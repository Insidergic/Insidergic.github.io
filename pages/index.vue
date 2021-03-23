<template>
  <Layout>
      <template v-slot:main>
        <h1 class="font-bold text-4xl">Latest Posts</h1>
        <ArticleList :articles="paginatedArticles" :total="allArticles.length"/>
      </template>
  </Layout>
</template>

<script>
import getContentPage from '@/utils/getContentPage'
import ArticleList from '@/components/ArticleList'

export default {
  name: 'HomePage',
  components: {
    ArticleList
  },
  async asyncData({ $content, params, error }) {
    return await getContentPage({ $content, params, error });
  }
}
</script>
