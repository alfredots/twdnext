import { useMediaQuery } from './useMediaQuery'

export function useBreakpoint() {
  const maxWidth = {
    xs: `(min-width: 0px)`,
    sm: `(min-width: 640px)`,
    md: `(min-width: 768px)`,
    lg: `(min-width: 1024px)`,
    xl: `(min-width: 1280px)`,
    '2xl': `(min-width: 1536px)`,
  }

  const isSm = useMediaQuery(maxWidth.sm)
  const isMd = useMediaQuery(maxWidth.md)
  const isLg = useMediaQuery(maxWidth.lg)
  const isXl = useMediaQuery(maxWidth.xl)
  const is2xl = useMediaQuery(maxWidth['2xl'])

  return {
    isSm,
    isMd,
    isLg,
    isXl,
    is2xl,
  }
}
