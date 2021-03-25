<template>
 <Layout>
      <template v-slot:main>
        <article
          class="flex w-full"
        >
          <div class="w-full">
            <h1 class="font-bold text-4xl">{{ article.title }}</h1>
            <p class="text-xl text-gray-700 font-medium">{{ article.description }}</p>
            <p class="text-1xl text-gray-500 font-medium">{{ dayjs(article.date).format('MMM DD, YYYY') }} · {{ article.author }}</p>
            <p v-if="article.updatedAt" class="text-1xl text-gray-500 font-medium">Post last updated: {{ formatDate(article.updatedAt) }}</p>
            <div class="flex mt-4 mb-4 items-center article-tags">
              <NuxtLink
                v-for="(tag, key) in article.tags"
                :key="key"
                class="text-sm mr-4 py-1 pr-1 pl-1 bg-gray-800 text-white rounded-md"
                :to="`/articles/tag/${tags[tag].slug}`"
              >
                {{ tag }}
              </NuxtLink>
            </div>
            <div class="w-full h-55 bg-fixed bg-contain bg-center" :style="`background-image: url(${article.img})`">
              <div class="h-64"></div>
            </div>
            <!-- table of contents -->
            <nav class="rounded w-1/4 bg-gray-200 pt-4 m-2 overflow-hidden topics" v-if="article.toc">
              <h3 class="font-bold mb-2 mx-3 py-2 px-3 rounded bg-gray-300 text-gray-800">Topics</h3>
              <div
                v-for="(link, index) of article.toc"
                :key="index"
              >
                <div class="flex items-center border-b border-gray-300 cursor-pointer hover:bg-gray-300 text-gray-700 hover:text-gray-900 px-4 py-1">
                  <nuxtLink
                    :to="`#${link.id}`"
                    class="hover:underline"
                    :class="{
                      'py-2': link.depth === 2,
                      'ml-2 pb-2': link.depth === 3
                    }"
                    >{{ index + 1 }}. {{ link.text }}</nuxtLink
                  >
                </div>
              </div>
            </nav>
            <!-- content from markdown -->
            <nuxt-content :document="article" />
            <!-- prevNext component -->
            <PrevNext :prev="prev" :next="next" class="mt-8 mb-8" />
          </div>
        </article>
      </template>
  </Layout>
</template>
<script>
import getSiteMeta from '@/utils/getSiteMeta';
import dayjs from 'dayjs';

export default {
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()
    const tagsList = await $content('tags')
      .only(['name', 'slug'])
      .where({ name: { $containsAny: article.tags } })
      .fetch()
    const tags = Object.assign({}, ...tagsList.map((s) => ({ [s.name]: s })))
    const [prev, next] = await $content('articles')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()
    return {
      article,
      tags,
      prev,
      next
    }
  },
  computed: {
    meta() {
    const metaData = {
        type: 'article',
        title: this.article.title,
        description: this.article.description,
        url: `${this.$config.baseUrl}/articles/${this.$route.params.slug}`,
        mainImage: this.article.image,
    };
    return getSiteMeta(metaData);
  },
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
    dayjs: (val) => dayjs(val)
  }
}
</script>
<style>
.nuxt-content p {
  margin-bottom: 20px;
}
.nuxt-content h2 {
  font-weight: bold;
  font-size: 28px;
}
.nuxt-content h3 {
  font-weight: bold;
  font-size: 22px;
}
.icon.icon-link {
  background-image: url('~assets/svg/icon-hashtag.svg');
  display: inline-block;
  width: 20px;
  height: 20px;
  background-size: 20px 20px;
}
</style>
