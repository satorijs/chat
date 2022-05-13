<template>
  <div class="action-bar">
    <ul>
      <Tooltip placement="right" :content="$t('menubar.characters')">
        <li><AddressBook></AddressBook></li>
      </Tooltip>
      <Tooltip placement="right" :content="$t('menubar.archives')">
        <li><ClockRotateLeft></ClockRotateLeft></li>
      </Tooltip>
      <Tooltip placement="right" :content="$t('menubar.extensions')">
        <li><Cubes></Cubes></li>
      </Tooltip>
    </ul>
    <ul>
      <Tooltip placement="right" :content="$t('menubar.help')">
        <li><CircleQuestion></CircleQuestion></li>
      </Tooltip>
      <Tooltip placement="right" :content="$t('menubar.language')">
        <li><Globe></Globe></li>
      </Tooltip>
      <Tooltip placement="right" :content="$t('menubar.theme')">
        <li><Palette></Palette></li>
      </Tooltip>
      <Tooltip placement="right" :content="$t('menubar.repository')">
        <li @click="openRepository"><GitHub></GitHub></li>
      </Tooltip>
    </ul>
  </div>
</template>

<script lang="ts" setup>

import AddressBook from '../icons/AddressBook.vue'
import ClockRotateLeft from '../icons/ClockRotateLeft.vue'
import Cubes from '../icons/Cubes.vue'
import Globe from '../icons/Globe.vue'
import Palette from '../icons/Palette.vue'
import GitHub from '../icons/GitHub.vue'
import CircleQuestion from '../icons/CircleQuestion.vue'
import { Tooltip } from '@satorijs/ui-core'
import { useColorMode, useStorage } from '@vueuse/core'
import { watch } from 'vue'
import { useI18n } from 'vue-i18n'

const i18n = useI18n()

const locale = useStorage('satori-chat-locale', 'en')

watch(locale, (value) => {
  i18n.locale.value = value
}, { immediate: true })

const availableThemes = ['discord-dark', 'discord-light']

const theme = useColorMode({
  storageKey: 'satori-chat-theme',
  modes: Object.fromEntries(availableThemes.map((theme) => [theme, theme])),
})

if (['dark', 'light'].includes(theme.value)) {
  theme.value = 'discord-' + theme.value
}

function openRepository() {
  window.open('https://github.com/satorijs/chat', '_blank')
}

</script>

<style lang="scss" scoped>

.action-bar {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

li {
  display: flex;
  font-size: 1.625rem;
  height: 4rem;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

</style>
