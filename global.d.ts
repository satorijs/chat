/// <reference types="vite/client" />
/// <reference types="element-plus/global" />

declare module '*.yaml' {
  const exports: any
  export default exports
}

declare module '*.vue' {
  import type { DefineComponent } from 'vue'

  const component: DefineComponent<{}, {}, any>
  export default component
}
