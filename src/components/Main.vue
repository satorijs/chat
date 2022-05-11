<template>
  <main>
    <chat-panel class="chat-panel" :messages="messages" @send="sendMessage" #="data">
      <chat-message :data="data"></chat-message>
    </chat-panel>
  </main>
</template>

<script setup lang="ts">

import { reactive } from 'vue'
import { ChatPanel } from 'semisigure'
import { currentUser, characters, Message } from '../utils'
import ChatMessage from './Message.vue'

const messages = reactive<Message[]>([])

function sendMessage(content: string) {
  const author = characters[currentUser.value]
  if (!author) return
  messages.push({
    user: author.names[0],
    avatar: author.images[0],
    content,
  })
}

</script>

<style lang="scss">

main {
  background-color: var(--main-bgcolor);
}

.chat-panel {
  footer {
    position: relative;
    flex-shrink: 0;
    padding-left: 16px;
    padding-right: 16px;
  }

  .textarea {
    border-radius: 8px;
    padding: 12px 16px;
    background-color: var(--textarea-bgcolor);
  }
}

.chat-message {
  &:hover {
    background-color: var(--message-hover-bgcolor);
  }
}

</style>
