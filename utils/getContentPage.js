import getContent from './getContent'

export default async (context, tags) => {
  const { params } = context;
  const content = await getContent(context, tags)

  return {
    allArticles: content.allArticles,
    paginatedArticles: content.paginatedArticles,
    params: params,
    tags: tags
  }
}
