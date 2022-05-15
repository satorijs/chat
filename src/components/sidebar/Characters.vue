<template>
  <aside class="aside-characters">
    <header class="clickable" v-if="extensions[0]">
      {{ getTranslation(extensions[0].name, i18n) }}
    </header>
    <virtual-list tag="ul" :data="Object.values(characters)" #="char">
      <li class="character" :class="{ active: currentUser === char.id }" @click="currentUser = char.id">
        <img class="avatar" :src="char.avatars[0]" :alt="char.id">
        <div class="info">
          <div class="name">{{ getTranslation(char.name, i18n) }}</div>
        </div>
      </li>
    </virtual-list>
  </aside>
</template>

<script setup lang="ts">

import { useI18n } from 'vue-i18n'
import { VirtualList } from '@satorijs/components'
import { characters, currentUser, extensions, getTranslation } from '../../utils'

const i18n = useI18n()

</script>

<style lang="scss" scoped>

.aside-characters {
  display: flex;
  flex-direction: column;
}

:deep(ul) {
  margin: 0;
  padding: 0;
  list-style: none;
}

$avatar-size: 3rem;

li {
  user-select: none;
  overflow-x: hidden;
  position: relative;
  display: flex;
  column-gap: 1rem;
  padding: 0.5rem 1rem;
  cursor: pointer;

  &:hover {
    background-color: var(--side-hover-bgcolor);
  }

  &.active {
    background-color: var(--side-active-bgcolor);
  }

  .avatar {
    width: $avatar-size;
    height: $avatar-size;
    border-radius: 50%;
    background-color: white;
  }
}

</style>
