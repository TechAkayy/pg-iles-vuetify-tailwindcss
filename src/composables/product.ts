import { productData } from './products'
import type { Product } from '@/types/store'

export const useProduct = () => {
  const fetchProduct = async (productId: number) => {
    const product: Maybe<Product> = productData.products.find(
      (product) => +product.id === +productId,
    )

    const { optimizeImage } = useOptimizeImage()

    return product.image
      ? {
          ...product,
          imageOptimized: optimizeImage(product.image),
        }
      : product
  }

  return { fetchProduct }
}
