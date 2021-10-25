<template>
  <footer class="bg-darkex text-white">
    <div class="mx-auto container py-12 md:py-24">
      <div class="w-full px-6 md:px-0">
        <div
          class="
            bg-darkex-light
            w-full
            p-10
            md:p-14
            rounded-lg
            flex
            md:flex-row
            flex-col
            justify-between
            shadow-x
            md:my-4
          "
        >
          <div class="md:text-left text-center">
            <h2 class="text-4xl font-montserrat font-bold py-3 text-white">
              ¿Quieres contratarme?
            </h2>
            <p class="font-mulish text-xl font-bold text-gray-100">
              Hazlo aquí
            </p>
          </div>
          <div class="flex justify-center justify-center content-center p-2">
            <a
              href="#!"
              class="
                bg-gray-100
                md:px-6
                px-24
                py-4
                md:py-6
                my-3
                md:px-6
                hover:bg-gray-400
                rounded-lg
                focus:outline-none
                hover:text-white
              "
            >
              <ArrowNarrowRightIcon class="text-darkex" />
            </a>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 py-4 px-6 md:px-0">
        <!-- Columna 1 -->
        <div class="pt-4">
          <div
            class="
              mx-auto
              w-16
              text-center
              p-4
              bg-yellow-400
              text-lg
              font-bold
              text-darkex
            "
          >
            Z|S
          </div>
        </div>
        <!-- Columna 2 -->
        <div
          class="
            bg-darkex-light
            rounded-lg
            shadow-xl
            p-3
            h-40
            flex flex-col
            justify-center
            content-center
          "
        >
          <h4 class="text-center text-xl">
            <i class="fas fa-bolt text-yellow-400"></i> Mis redes sociales
          </h4>
          <div class="flex justify-center pt-3">
            <a href="#!" class="bg-darkex py-2 px-3 rounded-lg mx-1">
              <i class="fab fa-facebook-square text-2xl"></i>
            </a>
            <a href="#!" class="bg-darkex py-2 px-3 rounded-lg mx-1">
              <i class="fab fa-whatsapp-square text-2xl"></i>
            </a>
          </div>
        </div>
        <!-- Columna 3 -->
        <div
          class="
            bg-darkex-light
            rounded-lg
            shadow-xl
            p-3
            h-40
            flex flex-col
            justify-center
            content-center
          "
        >
          <h4 class="text-center text-xl">
            <i class="fas fa-info text-yellow-400"></i> Extras
          </h4>
          <ul class="list-inside text-center py-2">
            <li
              v-for="menuItem in menuItems"
              :key="menuItem.id"
              class="md:inline-block block hover:text-yellow-400"
            >
              <i class="fas fa-chevron-right px-2"></i>
              <a :href="`${menuItem.link}`">{{ menuItem.title }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { ArrowNarrowRightIcon } from '@vue-hero-icons/outline'

export default {
  name: 'Footer',
  components: {
    ArrowNarrowRightIcon,
  },
  data: () => ({
    menuItems: [
      { icon: 'HomeIcon', title: 'Inicio', link: '#!' },
      { icon: 'FingerPrintIcon', title: 'Acerca de mí', link: '#!' },
      { icon: 'BeakerIcon', title: 'Mis proyectos', link: '#!' },
      { icon: 'AnnotationIcon', title: 'Contacto', link: '#!' },
    ],
  }),
}
</script>
