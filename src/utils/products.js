export const separateProducts = products => {
  const pizzas = products.filter(
    product =>
      product.category.name === 'Pizza' ||
      product.category === '60071d408cd01c61430f3aeb'
  )
  const drinks = products.filter(
    product =>
      product.category.name === 'İçecek' ||
      product.category === '60060a0132156b311b514d80'
  )
  const menus = products.filter(
    product =>
      product.category.name === 'Menü' ||
      product.category === '60071d688cd01c61430f3aec'
  )
  const salads = products.filter(
    product =>
      product.category.name === 'Salata' ||
      product.category === '60071d8d8cd01c61430f3aee'
  )
  const fastfoods = products.filter(
    product =>
      product.category.name === 'Fast Food' ||
      product.category === '60071d7a8cd01c61430f3aed'
  )

  return { pizzas, drinks, menus, salads, fastfoods }
}
