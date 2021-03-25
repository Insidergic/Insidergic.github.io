<template>
  <div class="flex flex-wrap div-pagination" v-if="total > perPage">
    
    <div v-if="currentPage === 1" :class="disabledStyle">
      <SingleBack />
    </div>

    <nuxt-link
      v-else
      :to="currentPage === 2 ? '/' : routePagination(prevPage)"
      :class="buttonStyles"
    >
      <SingleBack />
    </nuxt-link>

    <div v-if="currentPage === 1" :class="disabledStyle  + ' active'">
      <span class="page-link">1</span>
    </div>

    <nuxt-link
      v-else
      to="/"
      :class="buttonStyles"
    >
      <span class="page-link">1</span>
    </nuxt-link>

    <div 
      v-for="index in totalPages"
      :key="index"
      v-if="(index === (parseInt(currentPage) + 1)
        || index === (parseInt(currentPage) + 2)
        || index === (parseInt(currentPage) - 1)
        || index === (parseInt(currentPage) - 2)
        || index === currentPage
        ) && index !== 1
        && index !== totalPages
      "
    >
      <nuxt-link
        :class="index === currentPage ? disabledStyle + ' active' : buttonStyles"
        :to="index == 1 ? '/' : routePagination(index)"
      >
        <span class="page-link">{{ index }}</span>
      </nuxt-link>
    </div>

    <div v-if="currentPage === totalPages" :class="disabledStyle + ' active'">
      <span class="page-link">{{ totalPages }}</span>
    </div>

    <nuxt-link
      v-else
      :to="routePagination(totalPages)"
      :class="buttonStyles"
    >
       <span class="page-link">{{ totalPages }}</span>
    </nuxt-link>

    <div v-if="currentPage === totalPages" :class="disabledStyle">
      <SingleFwd />
    </div>

    <nuxt-link
      v-else
      :to="routePagination(nextPage)"
      :class="buttonStyles"
    >
      <SingleFwd />
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
    },
    slugName: {
      type: String,
      default: 'articles-page-page'
    },
    paginationIsQueryParams: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    routePagination(page) {
      const dataPage = {};

      dataPage[this.slugName.indexOf('/') === -1 ? 'name' : 'path'] = this.slugName;
      dataPage[this.paginationIsQueryParams ? 'query' : 'params'] = { page };

      return dataPage;
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
    },
  }
}
</script>
