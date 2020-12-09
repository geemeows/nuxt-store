import { accounts } from '@/static/data/accounts.json'
import { loginModel, generateToken, logoutModel } from './auth.models'

export const login = (payload) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const accountIndex = accounts.findIndex(
        ({ email }) => email === payload.email
      )
      if (accountIndex === -1) reject(new Error('This email does not exist!'))
      else if (accountIndex !== -1) {
        if (
          payload.email !== accounts[accountIndex].email ||
          payload.password !== accounts[accountIndex].password
        ) {
          reject(new Error('Email or passsword is not correct!'))
        } else {
          const token = generateToken()
          loginModel(payload.email, accounts[accountIndex].name, token)
          resolve('Logged in successfully!')
        }
      }
    }, 3000)
  })
}

export const logout = () => {
  logoutModel()
}
