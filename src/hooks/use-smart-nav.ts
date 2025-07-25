import useDebounce from '@/hooks/use-debounce'
import { useEffect, useState } from 'react'

const useSmartNav = () => {
  const [scrollState, setScrollState] = useState('')

  const handleNavScroll = (isScrollingDown: boolean) => {
    setScrollState(isScrollingDown ? 'down' : 'up')
  }

  const debounce = useDebounce(handleNavScroll, 150)

  useEffect(() => {
    let previousScrollPosition = 0
    const isScrollingDown = () => {
      const currentScrolledPos = window.scrollY || window.pageYOffset
      let scrollingDown

      if (currentScrolledPos > previousScrollPosition) {
        scrollingDown = true
      } else {
        scrollingDown = false
      }

      previousScrollPosition = currentScrolledPos

      return debounce(scrollingDown)
    }

    window.addEventListener('scroll', isScrollingDown)
    return () => window.removeEventListener('scroll', isScrollingDown)
  }, [debounce])

  return scrollState
}
export default useSmartNav
