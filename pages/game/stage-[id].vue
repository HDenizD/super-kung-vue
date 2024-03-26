<template>
  <div class="flex flex-col md:h-[calc(100dvh_-_12.5rem)]">
    <div
      class="kv-outline-primary flex h-96 flex-grow items-center justify-center"
    >
      <p class="p-5 text-2xl">
        {{ stageData?.question }}
      </p>
    </div>
    <div class="flex flex-col">
      <div class="mt-3 grid gap-4 md:grid-cols-4">
        <div v-for="answer in stageData?.options">
          <KVBtn
            :label="answer.option"
            class="kv-outline-primary h-32 w-full"
          />
        </div>
      </div>
      <div class="mt-5 flex w-full justify-between gap-2">
        <KVBtn
          label="Skip"
          is-retro
          is-upper-case
          @click="handleSkip"
        />
        <KVBtn
          label="Submit Answer"
          is-retro
          is-upper-case
          @click="handleToggleComplete"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStageStore } from '~/store/stage'
const route = useRoute()
const router = useRouter()

const { getStageById, toggleCompleteState } = useStageStore()

const stageData = ref(getStageById(route.params.id as string))

const selectedAnswer = ref({})

function handleToggleComplete() {
  toggleCompleteState(route.params.id as string)
  router.push('/game/stage-hub')
}

function handleSkip() {
  toggleCompleteState(route.params.id as string)
  router.push('/game/stage-hub')
}

onMounted(() => {
  console.log(stageData)
})
</script>

<style scoped></style>
