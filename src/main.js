import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/main.css'

import App from './App.vue'
import router from './router'
import { db } from './firebase'
import { doc, getDoc, setDoc, updateDoc, increment } from 'firebase/firestore'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

(async () => {
	try {
		const key = 'zarda_site_visited'
		if (localStorage.getItem(key)) return

		const statsDocRef = doc(db, 'stats', 'site')
		const snap = await getDoc(statsDocRef)
		if (!snap.exists()) {
			await setDoc(statsDocRef, { visitors: 0, updatedAt: Date.now() })
		}
		await updateDoc(statsDocRef, { visitors: increment(1), updatedAt: Date.now() })
		localStorage.setItem(key, '1')
	} catch (e) {
		console.warn('Visitor counter failed:', e)
	}
})()
