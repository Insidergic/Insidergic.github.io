<template>
  <section>
    <div class="flex md:flex-row-reverse flex-wrap">
      <div class="w-full md:w-4/5">
        <div class="container pt-16 px-6">
          <AppSearchInput class="ml-8 to-right" />
          <slot name="main"></slot>
        </div>
      </div>
      <Sidebar />
    </div>
  </section>
</template>

<script>
import Sidebar from './Sidebar'

export default {
  name: 'Layout',
  components: {
    Sidebar
  }
}
</script>
