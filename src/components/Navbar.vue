<template>
  <nav>
    <h1>Satori Chat</h1>
    <div class="menubar">
      <span @click="localeCycle.next()">{{ $t('menubar.language') }}: {{ $t('name') }}</span>
      <span @click="themeCycle.next()">{{ $t('menubar.theme') }}: {{ $t('theme.' + theme) }}</span>
    </div>
  </nav>
</template>

<script setup lang="ts">

import { useColorMode, useCycleList, useStorage } from '@vueuse/core'
import { watch } from 'vue'
import { useI18n } from 'vue-i18n'

const i18n = useI18n()

const locale = useStorage('satori-chat-locale', 'en')

watch(locale, (value) => {
  i18n.locale.value = value
}, { immediate: true })

const localeCycle = useCycleList(i18n.availableLocales, {
  initialValue: locale,
})

const availableThemes = ['discord-dark', 'discord-light']

const theme = useColorMode({
  storageKey: 'satori-chat-theme',
  modes: Object.fromEntries(availableThemes.map((theme) => [theme, theme])),
})

if (['dark', 'light'].includes(theme.value)) {
  theme.value = 'discord-' + theme.value
}

const themeCycle = useCycleList(availableThemes, {
  initialValue: theme,
})

</script>

<style lang="scss" scoped>

nav {
  display: flex;
  align-items: center;
  padding: 0 1rem;

  h1 {
    font-size: 1.25rem;
    margin: 0;
  }

  .menubar {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    column-gap: 1rem;
    user-select: none;
  }
}

</style>
