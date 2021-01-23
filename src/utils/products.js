export const separateProducts = products => {
  const pizzas = products.filter(product => product.category.name === 'Pizza')
  const drinks = products.filter(product => product.category.name === 'İçecek')
  const menus = products.filter(product => product.category.name === 'Menü')
  const salads = products.filter(product => product.category.name === 'Salata')
  const fastfoods = products.filter(
    product => product.category.name === 'Fast Food'
  )

  return { pizzas, drinks, menus, salads, fastfoods }
}
