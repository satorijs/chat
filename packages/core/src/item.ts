import { Comment, defineComponent, Directive, Fragment, h, Ref, ref, Text, VNode, watch, withDirectives } from 'vue'

export const useRefDirective = (ref: Ref): Directive<Element> => ({
  mounted(el) {
    ref.value = el
  },
  updated(el) {
    ref.value = el
  },
  beforeUnmount() {
    ref.value = null
  },
})

function findFirstLegitChild(node: VNode[]): VNode {
  if (!node) return null
  for (const child of node) {
    if (typeof child === 'object') {
      switch (child.type) {
        case Comment:
          continue
        case Text:
          return h('span', child)
        case 'svg':
          return h('span', child)
        case Fragment:
          return findFirstLegitChild(child.children as VNode[])
        default:
          return child
      }
    }
    return h('span', child)
  }
}

export default defineComponent({
  props: {
    class: {},
  },

  emits: ['resize'],

  setup(props, { attrs, slots, emit }) {
    let resizeObserver: ResizeObserver
    const root = ref<HTMLElement>()

    watch(root, (value) => {
      resizeObserver?.disconnect()
      if (!value) return

      resizeObserver = new ResizeObserver(dispatchSizeChange)
      resizeObserver.observe(value)
    })

    function dispatchSizeChange() {
      const marginTop = +(getComputedStyle(root.value).marginTop.slice(0, -2))
      emit('resize', root.value.offsetHeight + marginTop)
    }

    const directive = useRefDirective(root)

    return () => {
      const head = findFirstLegitChild(slots.default?.())
      return withDirectives(head, [[directive]])
    }
  },
})
