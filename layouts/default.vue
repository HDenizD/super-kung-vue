<template>
  <ColorScheme tag="span">
    <div class="flex min-h-screen flex-col">
      <header
        class="dark:border-tertiary sticky top-0 z-50 flex items-center bg-light bg-opacity-95 px-5 py-2 dark:bg-dark dark:bg-opacity-95"
      >
        <TheNavigation />
      </header>
      <main class="mx-auto max-w-5xl flex-grow">
        <slot />
      </main>
      <footer
        class="dark:border-tertiary sticky bottom-0 right-0 flex h-auto w-full items-center justify-between overflow-hidden bg-light bg-opacity-95 px-5 shadow-lg md:py-2 dark:bg-dark dark:bg-opacity-95"
      >
        <TheFooter />
      </footer>
    </div>
  </ColorScheme>
</template>

<script setup lang="ts"></script>

<style></style>
