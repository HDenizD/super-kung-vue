<template>
  <div>Stage-{{ $route.params.id }}</div>
  <pre>{{ stageData }}</pre>

  <KVBtn
    label="Completed"
    outline
    is-retro
    @click="handleToggleComplete"
  />
</template>

<script setup lang="ts">
import { useStageStore } from '~/store/stage'
const route = useRoute()
const router = useRouter()

const { getStageById, toggleCompleteState } = useStageStore()

const stageData = ref(getStageById(route.params.id as string))

function handleToggleComplete() {
  toggleCompleteState(route.params.id as string)
  router.push('/game/stage-hub')
}

onMounted(() => {
  console.log(stageData)
})
</script>

<style scoped></style>
