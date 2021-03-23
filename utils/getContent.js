import { stateDefault } from '../store/index';

export default async ($content, params, error) => {
  const currentPage = parseInt(params.page)

  const perPage = stateDefault.articlesPerPage

  const allArticles = await $content('articles').fetch()

  const skipNumber = () => {
    if (currentPage === 1) {
      return 0
    }

    return (currentPage - 1) * perPage
  }

  const paginatedArticles = await $content('articles')
    .only(['name', 'title', 'description', 'img', 'slug', 'date', 'author', 'tags'])
    .sortBy('createdAt', 'asc')
    .limit(perPage)
    .skip(skipNumber())
    .fetch()

  if (currentPage === 0 || !paginatedArticles.length) {
    return error({ statusCode: 404, message: 'No articles found!' })
  }

  return {
    allArticles,
    paginatedArticles
  }
}
