<template>
  <ColorScheme tag="span">
    <div class="flex min-h-screen flex-col">
      <header
        class="animate__animated animate__fadeInDown dark:border-tertiary sticky top-0 z-50 flex items-center bg-light bg-opacity-95 px-5 py-2 dark:bg-dark dark:bg-opacity-95"
      >
        <TheNavigation />
      </header>
      <main class="flex-grow p-3">
        <div class="mx-auto max-w-7xl">
          <slot />
        </div>
      </main>
      <footer
        class="dark:border-tertiary relative bottom-0 right-0 flex h-auto w-full items-center justify-end overflow-hidden bg-light bg-opacity-95 px-5 shadow-lg md:py-2 dark:bg-dark dark:bg-opacity-95"
      >
        <TheFooter />
      </footer>
    </div>
  </ColorScheme>
</template>

<script setup lang="ts"></script>

<style></style>
