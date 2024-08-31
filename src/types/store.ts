import type { ImageOptimized } from '@/types/image'

interface Rating {
  rate: number
  count: number
}

export interface Product {
  id: number
  title: string
  price: string
  description: string
  category: string
  image: string
  imageOptimized?: ImageOptimized
  rating: Rating
  badge: string
  shipping: string
}

export type Products = Product[]

export interface Store {
  products: Products
  categories: string[]
  badges: string[]
}
