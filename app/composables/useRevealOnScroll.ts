export const useRevealOnScroll = (rootMargin = '0px 0px -5% 0px') => {
  let observer: IntersectionObserver | null = null

  const ensureObserver = () => {
    if (!import.meta.client) {
      return null
    }

    if (observer) {
      return observer
    }

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return
          }

          const target = entry.target as HTMLElement
          target.classList.add('is-visible')
          observer?.unobserve(target)
        })
      },
      {
        threshold: 0.01,
        rootMargin
      }
    )

    return observer
  }

  const revealNow = (node: HTMLElement) => {
    node.classList.add('is-visible')
  }

  const bindReveal = (root?: ParentNode | null) => {
    if (!import.meta.client) {
      return
    }

    const scope = root || document
    const nodes = Array.from(
      scope.querySelectorAll<HTMLElement>('.reveal-on-scroll:not([data-reveal-bound])')
    )

    if (!nodes.length) {
      return
    }

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const activeObserver = ensureObserver()

    nodes.forEach((node, index) => {
      node.dataset.revealBound = 'true'
      node.style.transitionDelay = `${Math.min(index * 35, 140)}ms`

      if (reduceMotion || !activeObserver) {
        revealNow(node)
        return
      }

      // If already on screen (or near), show immediately — don't wait.
      const rect = node.getBoundingClientRect()
      const alreadyVisible =
        rect.top < window.innerHeight * 0.98 && rect.bottom > 0

      if (alreadyVisible) {
        revealNow(node)
        return
      }

      activeObserver.observe(node)

      // Failsafe: never leave a card stuck invisible.
      window.setTimeout(() => {
        if (!node.classList.contains('is-visible')) {
          revealNow(node)
          activeObserver.unobserve(node)
        }
      }, 900)
    })
  }

  return {
    bindReveal
  }
}
