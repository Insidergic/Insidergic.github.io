<template>
  <Layout>
      <template v-slot:main>
        <h1 class="font-bold text-4xl">Posts page {{ params.page }}</h1>
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
  },
  head() {
    return {
      title: `Articles Page ${this.$route.params.page}`,
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `${this.$config.baseUrl}/articles/page/${this.$route.params.page}`
        }
      ]
    }
  }
}
</script>

