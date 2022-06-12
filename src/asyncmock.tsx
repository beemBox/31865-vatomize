export type ProductProps = {
  id: number,
  title: string,
  price: number,
  description: string,
  pictureUrl: string,
  category: string
}

export type ProductsListProps = {
  products: ProductProps[],
}

export const getProducts = (): Promise<ProductsListProps> => {
  return fetch('../products.json')
    .then(res => res.json())
}

export const getProductById = async (id: number): Promise<ProductProps> => {
  return getProducts()
    .then(products => {
      const product: ProductProps | undefined = products.products.find(product => product.id === id)
      return product
        ? product
        : Promise.reject(new Error('Product not found'))
    })
}