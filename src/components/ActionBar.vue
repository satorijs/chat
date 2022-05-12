<template>
  <div class="action-bar">
    <ul>
      <li><AddressBook></AddressBook></li>
      <li><ClockRotateLeft></ClockRotateLeft></li>
    </ul>
    <ul>
      <li><CircleQuestion></CircleQuestion></li>
      <li><Globe></Globe></li>
      <li><Palette></Palette></li>
      <li><GitHub></GitHub></li>
    </ul>
  </div>
</template>

<script lang="ts" setup>

import AddressBook from '../icons/AddressBook.vue'
import ClockRotateLeft from '../icons/ClockRotateLeft.vue'
import Globe from '../icons/Globe.vue'
import Palette from '../icons/Palette.vue'
import GitHub from '../icons/GitHub.vue'
import CircleQuestion from '../icons/CircleQuestion.vue'

</script>

<style lang="scss" scoped>

.action-bar {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

ul {
  list-style-type: none;
}

li {
  display: flex;
  font-size: 1.75rem;
  height: 4rem;
  align-items: center;
  justify-content: center;
}

</style>
