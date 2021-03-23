<template>
  <div>
    <div class="flex flex-wrap flex-col">
      <div
        class="flex items-center"
        v-for="article of articles"
        :key="article.slug"
      >
        <NuxtLink
          :to="{ name: 'articles-slug', params: { slug: article.slug } }"
          class="flex items-center m-2 p-2"
        >
          <img
            class="w-24 h-24 mr-8"
            :src="article.img"
          />
          <div>
            <h3 class="text-3xl text-gray-900 font-medium">{{ article.title }}</h3>
            <p class="text-1xl text-gray-500 font-medium">{{ dayjs(article.date).format('MMM DD, YYYY') }} · {{ article.author }}</p>
            <div class="flex items-center article-tags">
              <div
                v-for="(tag, key) in article.tags"
                :key="key"
                class="text-sm mr-4 py-1 pr-1 pl-1 bg-gray-800 text-white rounded-md"
              >
                {{ tag }}
              </div>
            </div>
            <p class="text-lg mt-4 text-gray-700 font-medium">
              {{ (article.description || '').substr(0, 255) }}
            </p>
            <p class="font-bold text-blue-600 mt-2">
              Read more<span class="text-blue-600">&hellip;</span>
            </p>
          </div>
        </NuxtLink>
      </div>
    </div>
    <!-- <ul class="flex flex-wrap">
      <li
        v-for="article of articles"
        :key="article.slug"
        class="xs:w-full md:w-1/2 px-2 xs:mb-6 md:mb-12 article-card"
      >
        <NuxtLink
          :to="{ name: 'articles-slug', params: { slug: article.slug } }"
          class="md:grid md:gap-4 md:grid-cols-2"
        >
          <img
            v-if="article.image"
            :src="article.image"
            alt=""
            class="mb-4 border rounded"
          />
          <div>
            <h2 class="font-bold text-gray-900 text-2xl mb-2">
              {{ article.title }}
            </h2>
            <p class="text-lg">{{ article.description }}</p>
            <p class="font-bold text-indigo-600 mt-2">
              Read more<span class="text-indigo-600">&hellip;</span>
            </p>
          </div>
        </NuxtLink>
      </li>
    </ul> -->
    <div v-if="total" class="constainer mx-auto my-5 max-w-5xl">
      <Pagination v-if="total > 5" :total="total" :perPage="$store.state.articlesPerPage"/>
    </div>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination'
import dayjs from 'dayjs';

export default {
  name: 'ArticleList',
  components: {
    Pagination
  },
  props: {
    articles: {
      type: Array,
      default: Array
    },
    total: {
      type: Number,
      default: 0
    }
  },
  methods: {
    dayjs: (val) => dayjs(val)
  }
}
</script>
