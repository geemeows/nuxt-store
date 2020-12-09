export default function ({ store, redirect, route }) {
  // Do not run on server
  if (process.server) {
    return
  }
  const user = localStorage.getItem('email')
  store.commit('SET_USER', user)
}
