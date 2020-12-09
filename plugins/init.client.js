export default function ({ store, redirect, route }) {
  // Do not run on server
  if (process.server) {
    return
  }
  const user = localStorage.getItem('email')
  const token = localStorage.getItem('token')
  store.commit('SET_USER', user)

  if (user && token) {
    if (route.path === '/') {
      redirect('/dashboard')
    }
  }

  if (!user || !token) {
    return redirect('/')
  }
}
