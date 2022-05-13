import { reactive, ref } from 'vue'
import { Composer } from 'vue-i18n'

export type Dict<T> = Record<string, T>

export interface Message {
  user: string
  avatar?: string
  content: string
  id: string
}

export interface Character {
  id: string
  avatars: string[]
  name: Dict<string>
  nickname: Dict<string>
  tags?: []
}

export interface Manifest {
  base?: string
  name: Dict<string>
  tags: Dict<Dict<string>>
  characters: Dict<Character>
}

export function getTranslation(name: Dict<string>, i18n: Composer<any, any, any>) {
  return name[i18n.locale.value] || Object.values(name)[0]
}

export const currentUser = ref('')

export const extensions = reactive<Manifest[]>([])
export const characters = reactive<Dict<Character>>({})

function randomId() {
  return Math.random().toString(36).substring(2, 8)
}

async function loadManifest(url: string) {
  const prefix = randomId() + ':'
  const response = await fetch(url + '/index.json')
  const manifest: Manifest = await response.json()
  extensions.push(manifest)
  const { base = url + '/characters/' } = manifest
  for (const key in manifest.characters) {
    const data = manifest.characters[key]
    characters[prefix + data.id] = {
      tags: [],
      ...data,
      id: prefix + data.id,
      avatars: data.avatars.map(name => base + name),
    }
  }
}

[
  'https://satori.js.org/extensions/blue-archive',
  'https://satori.js.org/extensions/pcr',
].forEach(loadManifest)
