<template>
  <Popper ref="root" :placement="placement" :offset="offset" :arrow="true" transition="fade" :active="active" @show="onShow">
    <template #default>
      <slot name="default"></slot>
    </template>
    <template #content>
      <slot name="content">{{ content }}</slot>
    </template>
  </Popper>
</template>

<script lang="ts" setup>

import Popper from './popper.vue'
import { Placement } from '@popperjs/core'
import { onMounted, ref } from 'vue'
import { useEventListener } from '@vueuse/core'

defineProps<{
  placement?: Placement
  content?: string
  offset?: number
}>()

const active = ref(false)
const root = ref<any>(null)

const showEvents = ['mouseenter', 'focus']
const hideEvents = ['mouseleave', 'blur']

let timer: number

onMounted(() => {
  registerEvents(root.value.trigger)
})

function show() {
  window.clearTimeout(timer)
  active.value = true
}

function hide() {
  timer = window.setTimeout(() => {
    active.value = false
  }, 300)
}

function registerEvents(el: HTMLElement) {
  for (const event of hideEvents) {
    useEventListener(el, event, hide)
  }
  for (const event of showEvents) {
    useEventListener(el, event, show)
  }
}

function onShow(el: HTMLElement) {
  registerEvents(el)
}

</script>

<style lang="scss" scoped>

</style>
