/**
 * Drop speculative modulepreload/prefetch link tags so LCP (hero image)
 * is not bandwidth-starved on Slow 4G / PageSpeed mobile.
 * The entry <script type="module"> and stylesheets must stay.
 *
 * Important: html.head entries can be multi-tag blobs, so we strip
 * matching <link> tags inside each entry instead of dropping the blob.
 */
export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('render:html', (html) => {
    const linkRe = /<link\b[^>]*>/gi

    html.head = html.head.map((entry) =>
      entry.replace(linkRe, (tag) => {
        const t = tag.toLowerCase()
        if (
          t.includes('rel="modulepreload"') ||
          t.includes("rel='modulepreload'") ||
          t.includes('rel="prefetch"') ||
          t.includes("rel='prefetch'")
        ) {
          return ''
        }
        return tag
      })
    )
  })
})
