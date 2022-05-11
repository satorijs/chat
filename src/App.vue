<template>
  <Navbar></Navbar>
  <Sidebar></Sidebar>
  <Main></Main>
</template>

<script setup lang="ts">

import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar.vue'
import Main from './components/Main.vue'

</script>

<style lang="scss">

$nav-height: 3rem;
$aside-width: 20rem;

nav {
  height: $nav-height;
  color: var(--nav-color);
  background-color: var(--nav-bgcolor);
  position: relative;
  display: flex;
  align-items: center;
  min-width: 0;
  width: 100%;
  line-height: 1.25rem;
  font-weight: 500;
}

aside {
  color: var(--side-color);
  background-color: var(--side-bgcolor);
  position: fixed;
  top: $nav-height;
  left: 0;
  bottom: 0;
  width: $aside-width;
}

main {
  color: var(--main-color);
  background-color: var(--main-bgcolor);
  position: fixed;
  top: $nav-height;
  left: $aside-width;
  bottom: 0;
  right: 0;
}

</style>
