
// Remember: these methods have params 'context' and 'inject' if you need them.

async function getArticles({ $axios }) {
  const ip = await $axios.$get('http://api.darkgatecloud.com:8055/items/article')
  return { ip }
}

async function getTags({ $axios }) {
  const ip = await $axios.$get('http://api.darkgatecloud.com:8055/items/tag')
  return { ip }
}

export default {
  getArticles,
  getTags,
}
