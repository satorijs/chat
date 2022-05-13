<template>
  <virtual-item ref="trigger" @click="active = !active">
    <slot></slot>
  </virtual-item>
  <teleport to="body">
    <div class="tooltip" v-if="active" ref="popper">
      <slot name="content">{{ content }}</slot>
      <div class="arrow"></div>
    </div>
  </teleport>
</template>

<script lang="ts" setup>

import VirtualItem from './item'
import { createPopper, Placement } from '@popperjs/core'
import { onMounted, ref, watch } from 'vue'
import { useEventListener } from '@vueuse/core'

const props = defineProps<{
  placement?: Placement
  content?: string
  offset?: number
}>()

const active = ref(false)
const trigger = ref<{ $el: HTMLElement }>(null)
const popper = ref<HTMLElement>(null)

const showEvents = ['mouseenter', 'focus']
const hideEvents = ['mouseleave', 'blur']

onMounted(() => {
  for (const event of showEvents) {
    useEventListener(trigger.value.$el, event, show)
  }

  for (const event of hideEvents) {
    useEventListener(trigger.value.$el, event, hide)
  }
})

function show() {
  active.value = true
}

function hide() {
  active.value = false
}

watch(popper, (el) => {
  if (!el) return
  const instance = createPopper(trigger.value.$el, el, {
    placement: props.placement,
    modifiers: [{
      name: 'offset',
      options: {
        offset: [0, props.offset ?? 12],
      },
    }, {
      name: 'preventOverflow',
      options: {
        padding: {
          top: 8,
          bottom: 8,
          left: 8,
          right: 8,
        },
      },
    }, {
      name: 'arrow',
      options: {
        element: '.arrow',
      },
    }],
  })
  instance.update()
})

</script>

<style lang="scss" scoped>

.tooltip {
  z-index: 10;
  background-color: var(--background-floating);
  box-shadow: var(--elevation-high);
  padding: 0.375rem 0.5rem;
  border-radius: 6px;
}

.tooltip[data-popper-placement^="right"] > .arrow {
  left: -4px;
}
.tooltip[data-popper-placement^="left"] > .arrow {
  right: -4px;
}
.tooltip[data-popper-placement^="top"] > .arrow {
  bottom: -4px;
}
.tooltip[data-popper-placement^="bottom"] > .arrow {
  top: -4px;
}

.arrow {
  width: 10px;
  height: 10px;
  z-index: -1;

  &::before {
    display: block;
    transition: transform 0.2s ease-out 0s, visibility 0.2s ease-out 0s;
    visibility: visible;
    transform: translateX(0px) rotate(45deg);
    transform-origin: center center;
    content: '';
    background: var(--background-floating);
    top: 0px;
    left: 0px;
    width: 10px;
    height: 10px;
  }
}

</style>
