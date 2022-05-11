<template>
  <nav>
    <h1>Satori Chat</h1>
    <div class="menubar">
      <span @click="locale.next()">{{ $t('menubar.language') }}: {{ $t('name') }}</span>
      <span @click="theme.next()">{{ $t('menubar.theme') }}: {{ mode }}</span>
    </div>
  </nav>
</template>

<script setup lang="ts">

import { useColorMode, useCycleList } from '@vueuse/core'
import { useI18n } from 'vue-i18n'

const i18n = useI18n()

const locale = useCycleList(i18n.availableLocales, {
  initialValue: i18n.locale,
})

const themes = ['discord-dark', 'discord-light']

const mode = useColorMode({
  storageKey: 'satori-chat-theme',
  modes: Object.fromEntries(themes.map((theme) => [theme, theme])),
})

if (['dark', 'light'].includes(mode.value)) {
  mode.value = 'discord-' + mode.value
}

const theme = useCycleList(themes, {
  initialValue: mode,
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
