import { reactive, ref } from 'vue'

export type Dict<T> = Record<string, T>

export interface Message {
  user: string
  avatar?: string
  content: string
}

export interface Character {
  avatars: string[]
  name: Dict<string>
  nickname: Dict<string>
}

export interface Manifest {
  id: string
  name: string
  characters: Dict<Character>
}

export const currentUser = ref('')

export const characters = reactive<Dict<Character>>({})

async function loadManifest(url: string) {
  const response = await fetch(url + '/index.json')
  const manifest: Manifest = await response.json()
  for (const key in manifest.characters) {
    const data = manifest.characters[key]
    characters[key] = {
      ...data,
      avatars: data.avatars.map(name => `${url}/characters/${name}`),
    }
  }
}

[
  'https://satori.js.org/extensions/blue-archive',
].forEach(loadManifest)
