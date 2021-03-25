<template>
  <Layout>
      <template v-slot:main>
        <h1 class="font-bold text-4xl text-info-page">Latest Posts</h1>
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
  async asyncData(context) {
    return await getContentPage(context);
  },
  head() {
    return {
      title: `Nathan Feitoza's Blog/CV`,
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `${this.$config.baseUrl}/`
        }
      ]
    }
  }
}
</script>
