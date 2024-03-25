<template>
  <div>Stage-{{ $route.params.id }}</div>
  <pre>{{ stageData }}</pre>
</template>

<script setup lang="ts">
import { useStageStore } from '~/store/stage'
const route = useRoute()

const { getStageById } = useStageStore()

const stageData = ref(getStageById(route.params.id as string))

onMounted(() => {
  console.log(stageData)
})
</script>

<style scoped></style>
