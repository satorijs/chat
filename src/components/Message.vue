<template>
  <div class="chat-message">
    <img class="avatar" :src="data.avatar">
    <div class="nickname">{{ data.user }}</div>
    <div class="message-box">
      <message-content :content="data.content">
        <template #default>[{{ $t('segment.unknown') }}]</template>
      </message-content>
    </div>
  </div>
</template>

<script lang="ts" setup>

import { Message } from '../utils'
import { MessageContent } from '@satorijs/ui-chat'

defineProps<{ data: Message }>()

</script>

<style lang="scss" scoped>

.chat-message {
  position: relative;

  &:hover {
    background-color: var(--message-hover-bgcolor);
  }
}

.avatar {
  position: absolute;
  border-radius: 50%;
  background-color: white;
}

.nickname {
  color: var(--message-nickname-color);
  font-weight: 500;
}

</style>
