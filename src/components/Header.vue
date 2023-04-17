<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const activeLink = ref("Home");
const router = useRouter();

const clickLink = (link: string): void => {
  console.log(link);
  activeLink.value = link;
  router.push('/' + link.toLowerCase());
  isOpenedMenu.value = false;
};

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Profile",
    href: "/profile",
  },
  {
    name: "Works",
    href: "/works",
  },
  {
    name: "Research",
    href: "/research",
  },
];

const clickContact = (): void => {
  console.log("clicked contact");
};

const isOpenedMenu = ref(false);
const clickedMenu = (): void => {
  console.log("clicked menu");
  isOpenedMenu.value = !isOpenedMenu.value;
};

</script>

<template>
    <header class="mb-8 flex items-center justify-between border-b py-4 md:mb-12 md:py-8 xl:mb-16">
      <!-- logo - start -->
      <a href="/" class="text-black-800 inline-flex items-center gap-2.5 text-2xl font-bold md:text-3xl" aria-label="logo">
        <img width="95" height="94" viewBox="0 0 95 94" class="h-auto w-10 text-indigo-500" fill="currentColor" src="@/assets/penguin.svg">
        Keita Kobayashi
      </a>
      <!-- logo - end -->

      <!-- nav - start -->
      <nav class="hidden gap-12 lg:flex">
        <a href="#" v-on:click.prevent.stop="clickLink('Home')" v-bind:class="[activeLink == 'Home' ? 'text-indigo-500' : 'text-gray-600']" class="link"><RouterLink v-bind:to="{name: 'Home'}">Home</RouterLink></a>
        <a href="#" v-on:click.prevent.stop="clickLink('Profile')" v-bind:class="[activeLink == 'Profile' ? 'text-indigo-500' : 'text-gray-600']" class="link"><RouterLink v-bind:to="{name: 'Profile'}">Profile</RouterLink></a>
        <a href="#" v-on:click.prevent.stop="clickLink('Works')" v-bind:class="[activeLink == 'Works' ? 'text-indigo-500' : 'text-gray-600']" class="link"><RouterLink v-bind:to="{ name: 'Works' }">Works</RouterLink></a>
        <a href="#" v-on:click.prevent.stop="clickLink('Research')" v-bind:class="[activeLink == 'Research' ? 'text-indigo-500' : 'text-gray-600']" class="link"><RouterLink v-bind:to="{ name: 'Research' }">Research</RouterLink></a>
      </nav>
      <!-- nav - end -->

      <!-- buttons - start -->
      <a href="#" class="hidden rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:inline-block">Contact</a>

      <button type="button" v-on:click="clickedMenu()" class="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
        </svg>
        Menu
      </button>
      <!-- buttons - end -->
      <!-- menu for smartphone - start -->
      <div v-if="isOpenedMenu" class="absolute top-0 left-0 w-full h-full bg-white z-10">        
        <button type="button" v-on:click="clickedMenu()" class="absolute top-4 right-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </button>
        <div class="flex flex-col items-center justify-center h-full gap-8">
          <a href="#" v-on:click.prevent.stop="clickLink('Home')" class="text-2xl font-bold text-gray-800">Home</a>
          <a href="#" v-on:click.prevent.stop="clickLink('Profile')" class="text-2xl font-bold text-gray-800">Profile</a>
          <a href="#" v-on:click.prevent.stop="clickLink('Works')" class="text-2xl font-bold text-gray-800">Works</a>
          <a href="#" v-on:click.prevent.stop="clickLink('Research')" class="text-2xl font-bold text-gray-800">Research</a>
          <a href="#" class="text-2xl font-bold text-gray-800">Contact</a>
        </div>
      </div>
      <!-- menu for smartphone - end -->
    </header>
</template>

<style scoped>
.link {
  @apply text-lg font-semibold transition duration-100 hover:text-indigo-500 active:text-indigo-700;
}
</style>