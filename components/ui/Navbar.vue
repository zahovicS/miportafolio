<template>
  <nav class="bg-darkex">
    <div class="max-w-6xl mx-auto px-4">
      <div class="flex justify-between">
        <div class="flex space-x-4">
          <!-- logo -->
          <div>
            <a
              href="#"
              class="
                flex
                items-center
                py-5
                px-2
                text-gray-700
                hover:text-gray-900
              "
            >
              <svg
                class="h-6 w-6 mr-1 text-blue-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
              <span class="font-bold">Z|S</span>
            </a>
          </div>

          <!-- primary nav -->
          <div
            class="hidden md:flex items-center justify-end mr-auto space-x-1"
          >
            <a href="#" class="py-5 px-3 text-white hover:text-yellow-200"
              >Inicio</a
            >
            <a href="#" class="py-5 px-3 text-white hover:text-yellow-200"
              >Acerca de mí</a
            >
            <a href="#" class="py-5 px-3 text-white hover:text-yellow-200"
              >Mis proyectos</a
            >
            <a href="#" class="py-5 px-3 text-white hover:text-yellow-200"
              >Contacto</a
            >
          </div>
        </div>

        <!-- secondary nav -->
        <div class="hidden md:flex items-center space-x-1">
          <a
            href=""
            class="
              py-2
              px-2
              bg-darkex-light
              hover:bg-darkex
              text-white
              hover:text-yellow-200
              rounded-lg
              transition
              duration-300
            "
            ><SunIcon
          /></a>
        </div>

        <!-- mobile button goes here -->
        <div class="md:hidden flex items-center">
          <button
            class="mobile-menu-button"
            type="button"
            @click="toggleNavbar()"
          >
            <MenuAlt3Icon class="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>

    <!-- mobile menu -->
    <div
      :class="{ hidden: !showMenu, block: showMenu }"
      class="mobile-menu md:hidden"
    >
      <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200">Features</a>
      <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200">Pricing</a>
    </div>
  </nav>
</template>

<script>
import { MenuAlt3Icon, SunIcon } from '@vue-hero-icons/outline'

export default {
  name: 'Navbar',
  components: { MenuAlt3Icon, SunIcon },
  data: () => ({
    showMenu: false,
  }),
  methods: {
    toggleNavbar() {
      this.showMenu = !this.showMenu
      // alert('hola')
    },
  },
}
</script>
