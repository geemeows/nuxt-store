export const productsModeling = (products) => {
  const newProducts = []
  for (const id in products) {
    newProducts.push({
      id,
      ...products[id],
    })
  }
  return newProducts
}
