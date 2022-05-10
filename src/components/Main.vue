<template>
  <main>
    <div class="card-header">
    </div>
    <chat-panel class="sandbox" :messages="messages" @send="sendMessage" #="data">
      <!-- <chat-message :data="data"></chat-message> -->
    </chat-panel>
  </main>
</template>

<script setup lang="ts">

import { reactive } from 'vue'
import { ChatPanel } from 'semisigure'

const messages = reactive<string[]>([])

function sendMessage(message: string) {
  messages.push(message)
}

</script>

<style scoped>


</style>
