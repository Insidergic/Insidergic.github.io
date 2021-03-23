<template>
  <div class="flex flex-wrap div-pagination" v-if="total > perPage">
    <div v-if="currentPage === 1" :class="disabledStyle">
      <DoubleBack />
    </div>

    <nuxt-link
      v-else
      to="/"
      :class="buttonStyles"
    >
      <DoubleBack />
    </nuxt-link>

    <div v-if="currentPage === 1" :class="disabledStyle">
      <SingleBack />
    </div>

    <nuxt-link
      v-else
      :to="currentPage === 2 ? '/' : { name: 'articles-page-page', params: { page: prevPage } }"
      :class="buttonStyles"
    >
      <SingleBack />
    </nuxt-link>
    
    <div 
      v-for="index in totalPages"
      :key="index"
      v-if="index === (parseInt(currentPage) + 1)
        || index === (parseInt(currentPage) + 2)
        || index === (parseInt(currentPage) - 1)
        || index === (parseInt(currentPage) - 2)
        || index === totalPages
        || index === currentPage
      "
    >
      <nuxt-link
        :class="index === currentPage ? disabledStyle + ' active' : buttonStyles"
        :to="index == 1 ? '/' : { name: 'articles-page-page', params: { page: index } }"
      >
        <span class="page-link">{{ index }}</span>
      </nuxt-link>
    </div>

    <div v-if="currentPage === totalPages" :class="disabledStyle">
      <SingleFwd />
    </div>

    <nuxt-link
      v-else
      :to="{ name: 'articles-page-page', params: { page: nextPage } }"
      :class="buttonStyles"
    >
      <SingleFwd />
    </nuxt-link>

    <div v-if="currentPage === totalPages" :class="disabledStyle">
      <DoubleFwd />
    </div>

    <nuxt-link
      v-else
      :to="{ name: 'articles-page-page', params: { page: totalPages } }"
      :class="buttonStyles"
    >
      <DoubleFwd />
    </nuxt-link>
  </div>
</template>

<script>
import DoubleFwd from '@/components/svg/DoubleFwd'
import DoubleBack from '@/components/svg/DoubleBack'
import SingleFwd from '@/components/svg/SingleFwd'
import SingleBack from '@/components/svg/SingleBack'

export default {
  name: 'Pagination',
  components: {
    DoubleFwd,
    DoubleBack,
    SingleFwd,
    SingleBack
  },
  props: {
    total: {
      type: Number,
      default: 0
    },
    perPage: {
      type: Number,
      default: 5
    }
  },
  computed: {
    buttonStyles() {
      return 'border rounded px-4 py-1 text-sm bg-white flex justify-center '
        + 'items-center sm:uppercase hover:bg-gray-500 hover:text-white '
        + 'transform duration-500 ease-in-out button-paginate'
    },
    disabledStyle() {
      return 'border rounded px-4 py-1 text-sm bg-white flex justify-center '
        + 'items-center sm:uppercase text-gray-300 '
        + 'button-paginate'
    },
    totalPages() {
      return Math.ceil(this.total / this.perPage)
    },
    currentPage() {
      return parseInt(this.$route.params.page) || 1
    },
    prevPage() {
      return this.currentPage > 1 ? this.currentPage - 1 : 1
    },
    nextPage() {
      return this.currentPage < this.totalPages
        ? this.currentPage + 1
        : this.totalPages
    }
  }
}
</script>
