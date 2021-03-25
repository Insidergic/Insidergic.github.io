<template>
  <div
    class="w-full md:w-1/5 sidebar-blog md:bg-gray-900 px-2 text-center fixed bottom-0 md:pt-8 md:top-0 md:left-0 h-16 md:h-screen sidebar"
  >
    <div>
      <ul class="list-reset flex flex-row md:flex-col text-center md:text-left content-mobile">
        <li class="mr-3 flex-1 flex justify-start w-5/12 float-left">
          <div class="my-img">
            <img src="../static/img/eu_lindo.jpeg" />
          </div>
        </li>
        <li class="mr-3 flex-1 flex justify-end w-3/6 float-left">
          <button @click="() => openMenu = !openMenu" class="mt-4 text-xl button-open"><font-awesome-icon class="text-white" :icon="['fas', 'bars']"/></button>
        </li>
      </ul>

      <ul :style="openMenu ? 'display: flex;' : ''" class="list-reset flex flex-row md:flex-col text-center md:text-left content-menu">
        <li class="mr-3 flex-1 center li-my-img">
          <div class="my-img">
            <img src="../static/img/eu_lindo.jpeg" />
          </div>
        </li>

        <li class="mr-3 flex-1 mr-075">
          <div class="my-regards">
            <p><h2>Hi,</h2></p>
            <p><h2><strong>I'm Nathan Feitoza</strong></h2></p>
          </div>
        </li>

        <li class="mr-3 flex-1 item" v-for="(item, key) in menuItems" :key="key">
          <!--  border-b-2 border-pink-600 -->
          <NuxtLink
            :to="item.link"
            class="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white"
          >
            <i class="fas fa-link pr-0 md:pr-3 text-pink-500"></i
            ><span
              class="pb-1 md:pb-0 text-xs md:text-base text-white md:font-bold block md:inline-block"
            
              ><span class="icon"><font-awesome-icon :icon="item.icon"/></span>{{ item.name }}</span
            >
          </NuxtLink>
        </li>

        <li class="mr-3 mt-4 flex-1 mr-075">
          <div class="">
            <a href="https://github.com/nathanfeitoza" target="_blank" class="icon-social mr-4 text-white text-3xl"><font-awesome-icon :icon="['fab', 'github']"/></a>
            <a href="https://www.linkedin.com/in/nathan-feitoza-716a4592/" target="_blank" class="icon-social mr-4 text-white text-3xl"><font-awesome-icon :icon="['fab', 'linkedin']"/></a>
            <a href="https://twitter.com/feitoza_nathan" target="_blank" class="icon-social mr-4 text-white text-3xl"><font-awesome-icon :icon="['fab', 'twitter']"/></a>
            <a href="http://instagram.com/nathanfeitoza" target="_blank" class="icon-social mr-4 text-white text-3xl"><font-awesome-icon :icon="['fab', 'instagram']"/></a>
          </div>
        </li>

        <li class="mr-3 flex-1 mr-075">
          <div class="footer">
            <p>Copyright © 2021 License</p>
            <p>Powered by Nathan Feitoza and Nuxt</p>
          </div>
        </li>

      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  data() {
    return {
      openMenu: false,
      menuItems: [
        {
          name: 'Home',
          link: '/',
          icon: ['fas', 'home']
        },
        {
          name: 'About',
          link: '/about',
          icon: ['fas', 'user']
        },
        {
          name: 'Tags',
          link: '/tags',
          icon: ['fas', 'tags']
        },
        {
          name: 'Contact',
          link: '/contact',
          icon: ['fas', 'envelope']
        },
      ]
    }
  }
}
</script>
