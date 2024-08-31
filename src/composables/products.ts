import type { Products, Store } from '@/types/store'
import { products } from '~~/db.json'

products as Products

export const productData = {
  products,
  categories: [],
  badges: [
    'Low Stock',
    'Selling Fast!',
    'New!',
    'Presale',
    'Clearance',
    'Get 10% OFF^',
  ],
} as Store

export const useProducts = () => {
  const fetchProducts = async () => {
    productData.categories = [
      ...new Set(products.map((product) => product.category)),
    ]

    productData.badges = [
      ...new Set(
        products
          .filter((product) => product.badge)
          .map((product) => product.badge),
      ),
    ]

    const { optimizeImage } = useOptimizeImage()

    return productData.products.map((product) =>
      product.image
        ? {
            ...product,
            imageOptimized: optimizeImage(product.image),
          }
        : product,
    )
  }

  return { fetchProducts }
}
