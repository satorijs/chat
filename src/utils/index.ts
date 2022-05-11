import { reactive, ref } from 'vue'
import baChars from '@satori-chat/blue-archive/index.yaml'

export type Dict<T> = Record<string, T>

export interface Message {
  user: string
  avatar?: string
  content: string
}

export interface Character {
  images: string[]
  names: Dict<string>
}

export interface Manifest {
  id: string
  name: string
  characters: Dict<Character>
}

export const characters = reactive<Dict<Character>>({})

function loadManifest(manifest: Manifest) {
  const { id } = manifest
  for (const key in manifest.characters) {
    const data = manifest.characters[key]
    characters[id + '.' + key] = {
      ...data,
      images: data.images.map((image) => `/characters/${id}/${image}.webp`),
    }
  }
}

loadManifest(baChars)

export const currentUser = ref('')
