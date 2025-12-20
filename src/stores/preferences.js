import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const usePreferencesStore = defineStore('preferences', () => {
  const PREFERENCES_KEY = 'zarda_public_preferences_v1'

  const sortKey = ref('createdAt') 
  const sortDir = ref('desc') 
  const viewMode = ref('grid') 

  const sort = computed(() => ({ key: sortKey.value, dir: sortDir.value }))

  const load = () => {
    try {
      const raw = localStorage.getItem(PREFERENCES_KEY)
      if (!raw) return
      const parsed = JSON.parse(raw)
      if (parsed?.sortKey) sortKey.value = parsed.sortKey
      if (parsed?.sortDir) sortDir.value = parsed.sortDir
      if (parsed?.viewMode) viewMode.value = parsed.viewMode
    } catch (_) {}
  }

  const persist = () => {
    try {
      localStorage.setItem(PREFERENCES_KEY, JSON.stringify({
        sortKey: sortKey.value,
        sortDir: sortDir.value,
        viewMode: viewMode.value,
      }))
    } catch (_) {}
  }

  const setSort = (key, dir = sortDir.value) => {
    sortKey.value = key
    sortDir.value = dir
    persist()
  }

  const setView = (mode) => {
    viewMode.value = mode
    persist()
  }

  load()

  return { sortKey, sortDir, viewMode, sort, load, persist, setSort, setView }
})
