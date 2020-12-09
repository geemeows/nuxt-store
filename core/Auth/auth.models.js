export const generateToken = () => {
  return [...Array(100)]
    .map((i) => (~~(Math.random() * 36)).toString(36))
    .join('')
}
export const loginModel = (email, name, token) => {
  localStorage.setItem('email', email)
  localStorage.setItem('name', name)
  localStorage.setItem('token', token)
}
export const logoutModel = () => {
  localStorage.removeItem('email')
  localStorage.removeItem('name')
  localStorage.removeItem('token')
}
