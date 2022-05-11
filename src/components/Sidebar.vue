<template>
  <aside>
    <el-scrollbar class="body">
      <ul>
        <li class="char" v-for="char in chars">
          <label>
            <img class="avatar" :src="'/blue-archive/characters/' + char.images[0] + '.webp'" :alt="char.id">
            <div class="info">
              <div class="name">{{ char.id }}</div>
            </div>
          </label>
        </li>
      </ul>
    </el-scrollbar>
  </aside>
</template>

<script setup lang="ts">

import { onMounted, reactive } from 'vue'
import { ElScrollbar } from 'element-plus'

const chars = reactive<any[]>([])

onMounted(async () => {
  const response = await fetch('/blue-archive/index.json')
  const data = await response.json()
  chars.push(...data)
})

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

.char {
  max-width: 100%;
  overflow-x: hidden;
}

$avatar-size: 3rem;

label {
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

  .avatar {
    width: $avatar-size;
    height: $avatar-size;
    border-radius: 50%;
    background-color: white;
  }
}

</style>
