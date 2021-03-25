<template>
  <section>
    <div class="flex md:flex-row-reverse flex-wrap">
      <div class="w-full md:w-4/5">
        <div class="container pt-16 px-6 container-data">
          <AppSearchInput class="ml-8 to-right app-search" />
          <slot name="main"></slot>
        </div>
      </div>
      <Sidebar />
    </div>
  </section>
</template>

<style type="sass">
@import '../assets/scss/app.scss';
</style>

<script>
import Sidebar from './Sidebar'

export default {
  name: 'Layout',
  components: {
    Sidebar
  }
}
</script>
