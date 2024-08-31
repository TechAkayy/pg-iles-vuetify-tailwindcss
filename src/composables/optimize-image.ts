import type { ImageOptimized } from '@/types/image'

export const useOptimizeImage = () => {
  const optimizeImage = (src: string, bgStyles = false): ImageOptimized => {
    const imageOptimized: ImageOptimized = {
      src,
      lazySrc: src,
    }

    if (bgStyles) {
      try {
        const responsiveImageSrc = `url("${src}")`

        const responsiveImageSrcImageSet = `image-set(url("${src}") 1x,url("${src}") 2x)`

        const responsiveImageSrcImageSetFallback = `-webkit-image-set(url("${src}") 1x,url("${src}") 2x)`

        imageOptimized.bgStyles = [
          responsiveImageSrc,
          responsiveImageSrcImageSet,
          responsiveImageSrcImageSetFallback,
        ].reduce((acc, bgStyle) => {
          return `${acc}background-image:${bgStyle};`
        }, '')
      } catch (err) {
        console.log(err)
      }
    }

    return imageOptimized
  }

  return {
    optimizeImage,
  }
}
