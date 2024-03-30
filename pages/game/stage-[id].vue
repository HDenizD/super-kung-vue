<template>
  <div class="flex flex-col md:h-[calc(100dvh_-_12.5rem)]">
    <div
      class="kv-outline-primary flex h-96 flex-grow items-center justify-center"
    >
      <p class="p-5 font-retro text-base">
        {{ typeEffectTarget }}
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
            class="kv-outline-primary h-32 w-full font-retro text-xs"
            :is-full-opacity="selectedAnswer?.option === answer.option"
            @click="selectedAnswer = answer"
          />
        </div>
      </div>
      <div class="mt-5 flex w-full justify-between gap-2">
        <KVBtn
          label="Back"
          is-retro
          is-upper-case
          @click="$router.push('/game/stage-hub')"
        />
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
import { useTypeWriterEffect } from '~/composables/typeWriterEffect'

const route = useRoute()
const router = useRouter()
const { typeWriterEffect, typeEffectTarget } = useTypeWriterEffect()

const { getStageById, submitAnswer } = useStageStore()

const stageData = ref(getStageById(route.params.id as string))

const selectedAnswer = ref<Option>()

function shuffelIndexOfOptions(options: Option[]) {
  return options.sort(() => Math.random() - 0.5)
}

function handleSubmitAnswer() {
  if (!selectedAnswer.value) return
  submitAnswer(route.params.id as string, selectedAnswer.value)
  router.push('/game/stage-hub')
}

onMounted(() => {
  if (stageData.value) {
    shuffelIndexOfOptions(stageData.value.options)
    typeWriterEffect(stageData.value.question, 30)
  }
})
</script>

<style scoped></style>
