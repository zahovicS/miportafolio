<template>
  <nav
    class="
      w-full
      fixed
      bg-darkex
      z-50
      backdrop-filter backdrop-blur-lg
      bg-opacity-80
      shadow-lg
      md:shadow-none
    "
  >
    <div class="max-w-6xl mx-auto px-4">
      <div class="flex w-full">
        <div class="flex justify-between space-x-4 w-full">
          <!-- logo -->
          <div>
            <a href="#" class="flex items-center py-5 px-2 hover:text-gray-900">
              <span class="font-bold text-dark-200 bg-yellow-400 p-3">Z|S</span>
            </a>
          </div>
          <div class="flex">
            <!-- primary nav -->
            <div
              v-for="menuItem in menuItems"
              :key="menuItem.id"
              class="hidden md:flex items-center mr-auto space-x-4 uppercase"
            >
              <a
                :href="`${menuItem.link}`"
                class="
                  py-5
                  font-semibold
                  px-3
                  text-white
                  hover:text-yellow-400
                  border-transparent border-b-2
                  hover:border-b-2 hover:border-current
                  font-mulish
                  text-sm
                  tracking-wider
                "
                >{{ menuItem.title }}</a
              >
            </div>

            <!-- button -->
            <div class="hidden md:flex items-center mx-4">
              <a
                href=""
                class="
                  py-2
                  px-2
                  bg-darkex-light
                  hover:bg-darkex
                  text-white
                  hover:text-yellow-400
                  rounded-lg
                  transition
                  duration-300
                "
                ><SunIcon
              /></a>
            </div>
          </div>
        </div>

        <!-- mobile button goes here -->
        <div class="md:hidden flex items-center">
          <button
            class="mobile-menu-button focus:outline-none"
            type="button"
            @click="toggleNavbar()"
          >
            <MenuAlt3Icon class="w-6 h-6 text-yellow-400" />
          </button>
        </div>
      </div>
    </div>

    <!-- mobile menu -->
    <div
      :class="{ hidden: !showMenu, block: showMenu, 'h-auto': showMenu }"
      class="mobile-menu md:hidden h-0 transition-all ease-out duration-500"
    >
      <a
        v-for="menuItem in menuItems"
        :key="menuItem.id"
        :href="`${menuItem.link}`"
        class="
          uppercase
          block
          py-3
          px-6
          font-semibold
          text-white
          hover:bg-yellow-400 hover:text-darkex
          flex
          duration-500
          ease-out
        "
      >
        <component :is="menuItem.icon" class="w-6 h-6 text-sm"></component>
        <span class="pl-4">{{ menuItem.title }}</span>
      </a>
    </div>
  </nav>
</template>

<script>
import {
  MenuAlt3Icon,
  SunIcon,
  HomeIcon,
  AnnotationIcon,
  BeakerIcon,
  FingerPrintIcon,
} from '@vue-hero-icons/outline'

export default {
  name: 'Navbar',
  components: {
    MenuAlt3Icon,
    HomeIcon,
    SunIcon,
    AnnotationIcon,
    BeakerIcon,
    FingerPrintIcon,
  },
  data: () => ({
    showMenu: false,
    menuItems: [
      { icon: 'HomeIcon', title: 'Inicio', link: '#!' },
      { icon: 'FingerPrintIcon', title: 'Acerca de mí', link: '#!' },
      { icon: 'BeakerIcon', title: 'Mis proyectos', link: '#!' },
      { icon: 'AnnotationIcon', title: 'Contacto', link: '#!' },
    ],
  }),
  methods: {
    toggleNavbar() {
      this.showMenu = !this.showMenu
      // alert('hola')
    },
  },
}
</script>
