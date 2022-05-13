<template>
  <ActionBar></ActionBar>
  <Characters></Characters>
  <Main></Main>
</template>

<script setup lang="ts">

import ActionBar from './components/ActionBar.vue'
import Characters from './components/sidebar/Characters.vue'
import Main from './components/Main.vue'

</script>

<style lang="scss">

$action-bar-width: 4rem;
$aside-width: 20rem;

.action-bar {
  color: var(--nav-color);
  background-color: var(--nav-bgcolor);
  position: absolute;
  left: 0;
  width: $action-bar-width;
  top: 0;
  bottom: 0;
}

aside {
  color: var(--side-color);
  background-color: var(--side-bgcolor);
  position: absolute;
  top: 0;
  left: $action-bar-width;
  bottom: 0;
  width: $aside-width;
}

main {
  color: var(--main-color);
  background-color: var(--main-bgcolor);
  position: absolute;
  top: 0;
  left: $action-bar-width + $aside-width;
  bottom: 0;
  right: 0;
}

</style>
