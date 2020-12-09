import serverHttp from '../httpClient'

export const addProduct = async (payload) => {
  const { data } = await serverHttp.post('/products.json', {
    ...payload,
    creator: localStorage.getItem('email'),
    createdAt: new Date(),
    updatedAt: new Date(),
  })
  return data
}
export const editProduct = async (id, payload) => {
  const { data } = await serverHttp.put(`/products/${id}.json`, {
    ...payload,
    updatedAt: new Date(),
  })
  return data
}

export const getProducts = async () => {
  const { data } = await serverHttp.get('/products.json')
  return data
}

export const deleteProduct = async (id) => {
  const { data } = await serverHttp.delete(`/products/${id}.json`)
  return data
}

export const getProduct = async (id) => {
  const { data } = await serverHttp.get(`/products/${id}.json`)
  return data
}
