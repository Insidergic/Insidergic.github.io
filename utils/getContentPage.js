import getContent from './getContent'

export default async ({ $content, params, error }) => {
  const content = await getContent($content, params, error)
  /*const tags = await $content('tags', params.slug)
        .only(['name', 'description', 'img', 'slug'])
        .sortBy('createdAt', 'asc')
        .fetch()*/

  return {
    allArticles: content.allArticles,
    paginatedArticles: content.paginatedArticles,
    params: params
    /*tags: tags*/
  }
}
