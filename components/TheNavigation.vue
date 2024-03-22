<template>
  <div class="mx-auto flex w-screen items-center justify-between">
    <div
      class="group flex cursor-pointer select-none items-center gap-1"
      @click="
        () => {
          $router.push('/')
          isMobileNavOpen = false
        }
      "
    ></div>

    <button
      class="z-20 md:hidden"
      @click="isMobileNavOpen = !isMobileNavOpen"
    >
      <Icon
        v-if="!isMobileNavOpen"
        name="material-symbols-light:menu"
        class="cursor-pointer text-4xl"
      />
      <Icon
        v-else
        name="material-symbols:close-rounded"
        class="cursor-pointer text-4xl"
      />
    </button>
    <Transition
      enter-active-class="animate__fadeInRight"
      leave-active-class="animate__fadeOutRight"
    >
      <div
        id="mobile-navigation"
        v-if="isMobileNavOpen"
        class="animate__fast animate__animated fixed left-0 top-0 z-10 w-screen bg-light bg-opacity-95 dark:bg-dark dark:bg-opacity-95"
      >
        <ul
          class="flex h-dvh flex-col flex-wrap items-center justify-center gap-8 overflow-x-auto pt-24"
        >
          <li>Mobile Menu</li>
        </ul>
        <div
          class="absolute bottom-0 right-2 flex max-w-7xl justify-end pb-2 md:right-6"
        >
          <ColorModeToggle />
        </div>
      </div>
    </Transition>
    <ul class="hidden gap-8 md:flex">
      <li>Nav Menu</li>
      <ColorModeToggle />
    </ul>
  </div>
</template>

<script setup lang="ts">
const navItems = [
  {
    name: 'Startseite',
    href: '/'
  },
  {
    name: 'Leistungen',
    href: '/leistungen'
  },
  {
    name: 'Über uns',
    href: '/ueber-uns'
  },
  {
    name: 'Karriere',
    href: '/karriere'
  },
  {
    name: 'Kontakt',
    href: '/kontakt'
  }
]

const isMobileNavOpen = ref(false)

watch(isMobileNavOpen, () => {
  if (isMobileNavOpen.value) {
    document.body.style.overflowY = 'hidden'
  } else {
    document.body.style.overflowY = 'auto'
  }
})
</script>

<style scoped></style>
