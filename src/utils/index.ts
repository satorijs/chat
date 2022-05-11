import { reactive, ref } from 'vue'

export interface Message {
  user: string
  avatar?: string
  content: string
}

export interface Character {
  id: string
  images: string[]
}

export const characters = reactive<Record<string, Character>>({})

;(async () => {
  const response = await fetch('/blue-archive/index.json')
  const data: Character[] = await response.json()
  for (const item of data) {
    characters[item.id] = item
    item.images = item.images.map(name => `/blue-archive/characters/${name}.webp`)
  }
})()

export const currentUser = ref('')
