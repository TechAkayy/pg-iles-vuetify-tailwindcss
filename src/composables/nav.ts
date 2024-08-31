import { computed } from 'vue'
import { useRoute } from 'iles'
import site from '@/site'

export const useNav = () => {
  const navlinksFromConfig = site.nav
  const navlinks = computed(() => navlinksFromConfig)

  const navlinksPrimary = computed(() => {
    return navlinks.value.filter(
      (navlink) => !navlink.type || navlink.type === 'primary',
    )
  })

  const navlinksSecondary = computed(() => {
    return navlinks.value.filter((navlink) => navlink.type === 'secondary')
  })

  const currentRoute = useRoute()
  const currentPath = computed(() => {
    return currentRoute.path
  })

  return {
    navlinks,
    navlinksPrimary,
    navlinksSecondary,
    currentPath,
  }
}

export const isCurrentRoute = (navlink, currentPath) => {
  if (!currentPath) {
    currentPath = useNav().currentPath.value
  }
  return navlink.link === '/'
    ? currentPath === navlink.link
    : currentPath.startsWith(navlink.link)
}
