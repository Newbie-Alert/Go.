const TOKEN = 'token'

export default class TokenStorage {

  setToken(token) {
    localStorage.setItem(TOKEN, token)
  }

  getToken() {
    const token = localStorage.getItem(TOKEN)
    return token
  }

  clearToken() {
    localStorage.removeItem(TOKEN)
  }
}