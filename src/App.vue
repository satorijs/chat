<template>
  <TitleBar></TitleBar>
  <ActionBar></ActionBar>
  <Characters></Characters>
  <Main></Main>
</template>

<script setup lang="ts">

import TitleBar from './components/TitleBar.vue'
import ActionBar from './components/ActionBar.vue'
import Characters from './components/sidebar/Characters.vue'
import Main from './components/Main.vue'

</script>

<style lang="scss">

$nav-height: 3rem;
$action-bar-width: 4rem;
$aside-width: 20rem;

.title-bar {
  color: var(--nav-color);
  background-color: var(--nav-bgcolor);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  height: $nav-height;
  line-height: 1.25rem;
  font-weight: 500;
}

.action-bar {
  color: var(--nav-color);
  background-color: var(--nav-bgcolor);
  position: fixed;
  left: 0;
  width: $action-bar-width;
  top: $nav-height;
  bottom: 0;
}

aside {
  color: var(--side-color);
  background-color: var(--side-bgcolor);
  position: fixed;
  top: $nav-height;
  left: $action-bar-width;
  bottom: 0;
  width: $aside-width;
}

main {
  color: var(--main-color);
  background-color: var(--main-bgcolor);
  position: fixed;
  top: $nav-height;
  left: $action-bar-width + $aside-width;
  bottom: 0;
  right: 0;
}

</style>
