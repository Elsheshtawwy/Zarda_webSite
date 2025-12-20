import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { db } from '@/firebase'
import { collection, doc, getDoc, getDocs, orderBy, query } from 'firebase/firestore'

export const usePackagesStore = defineStore('packages', () => {
  const items = ref([])
  const loading = ref(false)
  const error = ref(null)
  const lastFetched = ref(0)

  const all = computed(() => items.value)
  const latest = (limit = 10) => {
    const sorted = [...items.value].sort((a, b) => (b?.createdAt?.seconds || 0) - (a?.createdAt?.seconds || 0))
    return sorted.slice(0, limit)
  }
  const byId = (id) => items.value.find(p => p.id === id)

  const shouldRefetch = (maxAgeMs = 5 * 60 * 1000) => {
    if (!items.value.length) return true
    return Date.now() - lastFetched.value > maxAgeMs
  }

  const fetchAll = async ({ force = false } = {}) => {
    if (!force && !shouldRefetch()) return
    loading.value = true
    error.value = null
    try {
      let snap
      try {
        const qy = query(collection(db, 'packages'), orderBy('createdAt', 'desc'))
        snap = await getDocs(qy)
      } catch (e) {
        snap = await getDocs(collection(db, 'packages'))
      }
      items.value = snap.docs.map(d => ({ id: d.id, ...d.data() }))
      lastFetched.value = Date.now()
    } catch (e) {
      console.error('fetchAll packages failed:', e)
      error.value = 'فشل في جلب العروض'
    } finally {
      loading.value = false
    }
  }

  const fetchById = async (id) => {
    const existing = byId(id)
    if (existing) return existing
    try {
      const dref = doc(db, 'packages', id)
      const ds = await getDoc(dref)
      if (ds.exists()) {
        const pkg = { id: ds.id, ...ds.data() }
        const idx = items.value.findIndex(p => p.id === id)
        if (idx !== -1) items.value[idx] = pkg
        else items.value.push(pkg)
        return pkg
      }
      return null
    } catch (e) {
      console.error('fetchById failed:', e)
      return null
    }
  }

  return { items, loading, error, lastFetched, all, latest, byId, fetchAll, fetchById }
})


