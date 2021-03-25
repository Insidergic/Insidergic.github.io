import { stateDefault } from '../store/index';

export default async ({ $content, params, error, route }, tags) => {
  const currentPage = parseInt(params.page || route.query.page);

  const perPage = stateDefault.articlesPerPage

  const allArticles = await $content('articles').fetch()

  const skipNumber = () => {
    if (currentPage === 1) {
      return 0
    }

    return (currentPage - 1) * perPage
  }

  const dataArticle = $content('articles')
    .only(['name', 'title', 'description', 'img', 'slug', 'date', 'author', 'tags'])
    .sortBy('createdAt', 'asc')
    .limit(perPage)
    .skip(skipNumber());

  if (tags) {
    dataArticle.where({ tags: { $contains: tags.name } });
  }

  const paginatedArticles = await dataArticle.fetch();

  if (currentPage === 0 || !paginatedArticles.length) {
    return error({ statusCode: 404, message: 'No articles found!' })
  }

  return {
    allArticles,
    paginatedArticles
  }
}
