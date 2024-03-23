<template>
  <div
    ref="playerNameForm"
    class="absolute-center animate__slower"
  >
    <form
      @submit.prevent="setPlayerName(playerName)"
      class="flex flex-col gap-4"
    >
      <KVInput
        v-model="playerName"
        label="PLAYER NAME"
        required
      />
      <KVBtn
        type="submit"
        label="SUBMIT"
        class="mx-auto"
        is-retro
      />
    </form>
  </div>
</template>

<script setup lang="ts">
const { observeElement } = useEasyIntersectionObserver()

const playerName = ref('')
const playerNameForm = ref()

function setPlayerName(name: string) {
  if (name) {
    console.log(name)
  }
}

onMounted(() => {
  observeElement(playerNameForm.value, 'animate__fadeIn')
})
</script>

<style scoped></style>
