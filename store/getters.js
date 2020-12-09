export default {
  getProducts: ({ products, user }) =>
    products.filter(({ creator }) => creator === user),
  getUser: ({ user }) => user,
}
