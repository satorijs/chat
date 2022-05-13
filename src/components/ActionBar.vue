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
      <Dropdown placement="right">
        <template #default>
          <Tooltip placement="right" :content="$t('menubar.language')">
            <li><Globe></Globe></li>
          </Tooltip>
        </template>
        <template #content>
          <div class="menu-item" v-for="locale in i18n.availableLocales" :key="locale" @click="i18n.locale.value = locale">
            {{ i18n.getLocaleMessage(locale).name }}
          </div>
        </template>
      </Dropdown>
      <Dropdown placement="right">
        <template #default>
          <Tooltip placement="right" :content="$t('menubar.theme')">
            <li><Palette></Palette></li>
          </Tooltip>
        </template>
        <template #content>
          <div class="menu-item" v-for="name in availableThemes" :key="name" @click="theme = name">
            {{ $t('theme.' + name) }}
          </div>
        </template>
      </Dropdown>
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
import { Dropdown, Tooltip } from '@satorijs/ui-core'
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

.menu-item {
  padding: 0.375rem 0.5rem;
  margin: 2px 0;
  box-sizing: border-box;
  min-height: 2rem;
  min-width: 10rem;
  border-radius: 2px;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    background-color: var(--menu-hover-bgcolor);
  }
}

</style>
