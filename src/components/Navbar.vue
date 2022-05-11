<template>
  <nav>
    Satori Chat
    {{ mode }}
  </nav>
</template>

<script setup lang="ts">

import { useColorMode } from '@vueuse/core'

const mode = useColorMode({
  storageKey: 'satori-chat-theme',
  modes: {
    'discord-dark': 'discord-dark',
    'discord-light': 'discord-light',
  },
})

if (['dark', 'light'].includes(mode.value)) {
  mode.value = 'discord-' + mode.value as any
}

</script>

<style lang="scss">

</style>
