import * as postRepository from '../Model/postData.js'

export async function getAllPosts(req, res) {
  const data = await postRepository.getAll()
  res.status(200).json({ data })
}

export async function getPostById(req, res) {
  const params = req.params.id
  const data = await postRepository.getById(params)
  res.status(200).json({ data })
}