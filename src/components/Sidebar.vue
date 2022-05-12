<template>
  <aside>
    <virtual-list class="body" wrapper-tag="ul" :data="Object.values(characters)"
      item-tag="li" :item-class="getItemClass" @item-click="handleClick" #="char">
      <img class="avatar" :src="char.avatars[0]" :alt="char.id">
      <div class="info">
        <div class="name">{{ getTranslation(char.name, i18n) }}</div>
      </div>
    </virtual-list>
  </aside>
</template>

<script setup lang="ts">

import { useI18n } from 'vue-i18n'
import { VirtualList } from 'semisigure'
import { Character, characters, currentUser, getTranslation } from '../utils'

const i18n = useI18n()

function getItemClass(char: Character) {
  return (currentUser.value === char.id ? 'active ' : '') + 'character'
}

function handleClick(char: Character) {
  currentUser.value = char.id
}

</script>

<style lang="scss">

.body {
  height: 100%;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

$avatar-size: 3rem;

.character {
  user-select: none;
  overflow-x: hidden;
  position: relative;
  display: grid;
  grid-template-columns: $avatar-size 1fr $avatar-size;
  grid-template-rows: auto 1fr;
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
