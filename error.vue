<template>
  <div>Page not found custom</div>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'Page not found',
  description: 'Page not found',
  alias: '/404'
  // validate: async (route) => {
  //   return route.fullPath === '(.*)'
  // }
})
</script>

<style scoped></style>
