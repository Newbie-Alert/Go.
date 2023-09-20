let users = [
  {
    "username": "username",
    "password": "$2b$10$XkhKcb.1dlAv63MSnPQegOPRYjKU6s3pqYnhMT0ADHmuIp9iwyfha",  // ('pass1234')
    "name": "Choonsik",
    "email": "nya@nyan.com"
  }

]

export async function getUserByName(username) {
  return users.find(user => user.username === username)
}

export async function createUser(info) {
  const created = { ...info, id: Date.now().toString() }
  users.push(created);

  return (created.id)
}