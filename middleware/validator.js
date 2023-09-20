import { validationResult } from "express-validator"

export const validator = (req, res, next) => {
  // req에서 데이터 검사 후 전달되는 에러들 
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    return next();
  }

  return res.status(400).json(errors.array()[0].msg);
}