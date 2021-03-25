<template>
  <Layout>
      <template v-slot:main>
        <h1 class="font-bold text-4xl text-info-page">Posts tagged with <strong class="bg-gray-800 text-white">{{ tags.name }}</strong></h1>
        <ArticleList
          :articles="paginatedArticles"
          :total="allArticles.length"
          :paginationIsQueryParams="true"
          :slugNamePagination="'/articles/tag/' + params.tag"
        />
      </template>
  </Layout>
</template>

<script>
import getContentPage from '@/utils/getContentPage'

export default {
  async asyncData(context) {
    const { $content, params } = context;
    
    const tags = await $content('tags')
      .where({ slug: { $contains: params.tag } })
      .limit(1)
      .fetch()
    const tag = tags.length > 0 ? tags[0] : {}

    return getContentPage(context, tag);
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
  },
  head() {
    return {
      title: `Articles for Tag ${this.$route.params.tag}`,
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `${this.$config.baseUrl}/articles/tag/${this.$route.params.tag}`
        }
      ]
    }
  }
}
</script>
