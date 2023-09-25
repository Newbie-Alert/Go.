import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import * as userRepository from '../Model/userData.js'
import { config } from '../config.js';

// SIGN UP
// 회원가입을 하는 유저의 info가 req.body의 객체로 전달
export async function signUp(req, res) {
  const { nickname, password, username, email } = req.body
  const found = await userRepository.getUserByName(nickname) // 중복 검사

  // 중복 된 유저가 있다면 에러메세지
  if (found) {
    return res.status(409).json({ msg: 'nickname already exists.' }.msg)
  }

  // 중복 유저가 아니라면 다음 프로세스 진행
  const hashed = await bcrypt.hash(password, config.bcrypt.saltRounds) // 입력받은 유저 비밀번호 암호화

  // 신규 유저 데이터 생성 후 해당 유저의 고유 ID return
  const userId = await userRepository.createUser({
    nickname, password: hashed, username, email
  })

  // 전 단계에서 return 받은 유저 고유 ID로 token 생성 후 전달
  const token = createJWT(userId)
  console.log(userRepository.users);
  res.status(201).json({ token, username })
}


// SIGN IN
export async function signIn(req, res) {
  const { nickname, password } = req.body

  // DB의 데이터에서 입력받은 user가 있나 검사
  const found = await userRepository.getUserByName(nickname)

  // 일치하는 유저 정보가 없다면 에러메세지
  if (!found) {
    return res.status(404).json({ msg: 'not exists name or password' }.msg)
  }

  // DB의 암호화된 유저 비밀번호와 입력받은 유저 비밀번호 비교
  const passwordCheck = await bcrypt.compare(password, found.password)

  // 비밀번호가 일치하지 않다면 에러메세지
  if (!passwordCheck) {
    return res.status(404).json({ msg: 'not exists name or password' }.msg)
  }

  // 문제 없으면 DB에서 찾은 유저의 고유 ID로 토큰 발행 후 전송
  const token = createJWT(found.id)
  console.log(userRepository.users);
  res.status(201).json({ token, nickname })
}



function createJWT(userId) {
  return jwt.sign({ userId }, config.jwt.secretKey, { expiresIn: config.jwt.expiredSec })
}