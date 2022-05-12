<template>
  <aside>
    <el-scrollbar class="body">
      <ul>
        <li class="character" :class="{ active: currentUser === key }" v-for="(char, key) in characters" :key="key" @click="currentUser = key">
          <img class="avatar" :src="char.avatars[0]" :alt="key">
          <div class="info">
            <div class="name">{{ getName(char.name) }}</div>
          </div>
        </li>
      </ul>
    </el-scrollbar>
  </aside>
</template>

<script setup lang="ts">

import { ElScrollbar } from 'element-plus'
import { useI18n } from 'vue-i18n'
import { characters, currentUser, Dict } from '../utils'

const i18n = useI18n()

function getName(names: Dict<string>) {
  return names[i18n.locale.value] || names['en']
}

</script>

<style scoped lang="scss">

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
