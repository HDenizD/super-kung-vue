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
        <div
          v-for="answer in stageData?.options"
          :class="
            selectedAnswer?.option === answer.option
              ? 'bg-primary text-dark'
              : ''
          "
        >
          <KVBtn
            :label="answer.option"
            class="kv-outline-primary h-32 w-full"
            :is-full-opacity="selectedAnswer?.option === answer.option"
            @click="selectedAnswer = answer"
          />
        </div>
      </div>
      <div class="mt-5 flex w-full justify-end gap-2">
        <!-- <KVBtn
          label="Skip"
          is-retro
          is-upper-case
          @click="handleSkip"
        /> -->
        <KVBtn
          label="Submit Answer"
          is-retro
          is-upper-case
          @click="handleSubmitAnswer"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStageStore, type Option } from '~/store/stage'
const route = useRoute()
const router = useRouter()

const { getStageById, submitAnswer } = useStageStore()

const stageData = ref(getStageById(route.params.id as string))

const selectedAnswer = ref<Option>()

function handleSubmitAnswer() {
  if (!selectedAnswer.value) return
  submitAnswer(route.params.id as string, selectedAnswer.value)
  router.push('/game/stage-hub')
}

function handleSkip() {
  router.push('/game/stage-hub')
}

onMounted(() => {
  console.log(stageData)
})
</script>

<style scoped></style>
