<template>
  <div>Stage-{{ $route.params.id }}</div>
</template>

<script setup lang="ts">
import { useStageStore } from '~/store/stage'
const route = useRoute()

const { getStage } = useStageStore()

const stageData = ref(getStage(route.params.id as string))

onMounted(() => {
  console.log(stageData)
})
</script>

<style scoped></style>
