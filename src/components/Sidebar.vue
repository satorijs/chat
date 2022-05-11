<template>
  <aside>
    <el-scrollbar class="body">
      <ul>
        <li class="character" :class="{ active: currentUser === char.id }" v-for="char in characters" @click="currentUser = char.id">
          <img class="avatar" :src="char.images[0]" :alt="char.id">
          <div class="info">
            <div class="name">{{ char.id }}</div>
          </div>
        </li>
      </ul>
    </el-scrollbar>
  </aside>
</template>

<script setup lang="ts">

import { ElScrollbar } from 'element-plus'
import { characters, currentUser } from '../utils'

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
