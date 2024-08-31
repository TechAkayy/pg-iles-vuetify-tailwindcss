<script setup lang="ts">
  import { useSeoMeta } from 'unhead'

  import type { Script } from '@unhead/schema'
  import checkDarkTheme from '@/composables/dark-color-scheme-check?raw'

  import siteDefn from '@/site'
  import image from '@/screenshots/image.jpg'
  import { fontUrls } from '@/utils/font'

  type TurboScript = Script & { once: true }

  const link: any = [
    // ...[
    //   '/fonts/barlow-7cHpv4kjgoGqM7E_Ass52Hs.woff2',
    //   '/fonts/firacode-uU9eCBsR6Z2vfE9aq3bL0fxyUs4tcw4W_D1sJVD7Ng.woff2',
    //   '/fonts/barlow-7cHpv4kjgoGqM7E_DMs5.woff2',
    // ].map(
    //   (href) =>
    //     ({
    //       rel: 'preload',
    //       as: 'font',
    //       type: 'font/woff2',
    //       crossorigin: '',
    //       href,
    //     } as const),
    // ),
  ]
  const noscript: any = []

  if (fontUrls.length) {
    const googleapis = 'https://fonts.googleapis.com'
    const gstatic = 'https://fonts.gstatic.com'
    link.push(
      { rel: 'dns-prefetch', href: googleapis },
      { rel: 'dns-prefetch', href: gstatic },
      { rel: 'preconnect', crossorigin: 'anonymous', href: googleapis },
      { rel: 'preconnect', crossorigin: 'anonymous', href: gstatic },
      {
        rel: 'preload',
        as: 'style',
        onload: "this.onload=null;this.rel='stylesheet'",
        href: fontUrls.toString(),
      },
    )
    noscript.push(
      `<link rel="stylesheet" crossorigin="anonymous" href="${fontUrls.toString()}" />`,
    )
  }

  const { name: title, description, url, author } = siteDefn

  const { frontmatter, site } = usePage()
  const imgUrl = $computed(() => `${site.url}${image}`)

  // const themeClassName = useNuxtApp().$vuetify.theme.global.name
  const themeClassName = 'dark'

  useSeoMeta({
    // charset: 'utf-8',
    // author,
    // viewport: 'width=device-width, initial-scale=1',
    // keywords: route.meta.tags?.toString(),
    // title,
    description,
    ogTitle: title,
    ogDescription: description,
    ogType: 'website',
    ogImage: imgUrl,
    ogImageAlt: title,
    // og:image:width
    // og:image:height
    // og:image:alt
    // og:image: type
    // og:image: secure_url
    ogUrl: url,
    ogSiteName: title,
    // og: locale
    // og: type
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: imgUrl,
    twitterImageAlt: title,
    twitterSite: '@vuedesigner',
    twitterCreator: '@techakayy',
    twitterCard: 'summary_large_image',
  })

  useHead({
    // title,
    // titleTemplate: (titleChunk) => {
    //   return titleChunk ? `${titleChunk} - ${title}` : title
    // },
    htmlAttrs: { lang: 'en-US', class: themeClassName },
    meta: [
      { name: 'charset', content: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      { name: 'author', content: author },
      { name: 'keywords', content: computed(() => frontmatter.tags) },
    ],
    script: [{ innerHTML: checkDarkTheme, once: true } as TurboScript],
    link,
    noscript,
  })
</script>

<template>
  <div />
</template>
