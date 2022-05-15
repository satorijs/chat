<template>
  <main>
    <header>
      <div>{{ $t('chat.title') }}</div>
      <div class="toolbar">
        <Camera></Camera>
      </div>
    </header>
    <virtual-list class="chat-panel" :data="messages" :pinned="true" #="data">
      <chat-message :data="data"></chat-message>
    </virtual-list>
    <footer>
      <chat-input class="textarea" @send="sendMessage">
      </chat-input>
    </footer>
  </main>
</template>

<script setup lang="ts">

import { reactive } from 'vue'
import { ChatInput, VirtualList } from '@satorijs/components'
import { currentUser, characters, getTranslation, Message } from '../utils'
import { useI18n } from 'vue-i18n'
import ChatMessage from './Message.vue'
import Camera from '../icons/Camera.vue'

const i18n = useI18n()

const messages = reactive<Message[]>([])

function sendMessage(content: string) {
  const author = characters[currentUser.value]
  if (!author) return
  messages.push({
    user: getTranslation(author.nickname, i18n),
    avatar: author.avatars[0],
    content,
    id: Math.random().toString(36).substring(2),
  })
}

</script>

<style lang="scss" scoped>

main {
  background-color: var(--main-bgcolor);
  display: flex;
  flex-direction: column;

  header {
    .toolbar {
      font-size: 1.125rem;
      display: flex;
      align-items: center;
    }
  }
}

footer {
  position: relative;
  flex-shrink: 0;
  padding-left: 16px;
  padding-right: 16px;
}

.textarea {
  border-radius: 8px;
  margin-bottom: 24px;
  padding: 12px 16px;
  background-color: var(--textarea-bgcolor);
}

</style>
