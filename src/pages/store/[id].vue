<script lang="ts">
  import { useProducts } from '@/composables/products'

  export default definePageComponent({
    async getStaticPaths() {
      const { fetchProducts } = useProducts()
      const allProducts = await fetchProducts()
      const staticPaths = allProducts.map((product) => ({
        // Specify the parameters for the page.
        params: { id: String(product.id) },

        // Pass any data needed to render the page.
        props: { id: String(product.id) },
      }))
      return staticPaths
    },
  })
</script>

<script setup lang="ts">
  const props = defineProps<{ id: string }>()

  const { fetchProduct } = useProduct()
  const product = await fetchProduct(+props.id)

  useHead({
    title: computed(() => product.title),
  })
</script>

<template>
  <Suspense>
    <ProductDetails :product="product" client:load />
  </Suspense>
</template>
