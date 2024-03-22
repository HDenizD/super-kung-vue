<template>
  <ColorScheme tag="span">
    <div class="flex min-h-screen flex-col">
      <header
        class="animate__animated animate__fadeInDown dark:border-tertiary sticky top-0 z-50 flex items-center bg-light bg-opacity-95 px-5 py-2 dark:bg-dark dark:bg-opacity-95"
      >
        <TheNavigation />
      </header>
      <main class="flex-grow px-4 py-5">
        <div class="mx-auto max-w-7xl">
          <slot />
        </div>
      </main>
      <footer
        class="animate__animated animate__fadeInUp dark:border-tertiary relative flex h-auto items-center overflow-hidden rounded-b-lg bg-light px-5 pb-16 shadow-lg md:py-2 dark:bg-dark"
      >
        <TheFooter />
      </footer>
    </div>
  </ColorScheme>
</template>

<script setup lang="ts"></script>

<style></style>
