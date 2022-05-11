<template>
  <img class="avatar" :src="data.avatar">
  <div class="nickname">{{ data.user }}</div>
  <div class="message-box">
    <message-content :content="data.content"/>
  </div>
</template>

<script lang="ts" setup>

import { Message } from '../utils'
import { MessageContent } from 'semisigure'

defineProps<{ data: Message }>()

</script>

<style lang="scss" scoped>

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
