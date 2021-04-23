import create from 'zustand'
import { devtools } from 'zustand/middleware'

let setLoadingStore = (set) => ({
    loading: true,
    setLoading: () => set((state) => ({ loading: !state.loading }))
});

let setErrorStore = (set) => ({
    error: "",
    setError: (error) => set({ error })
});

let setUserStore = (set) => ({
    user: "",
    setUser: (user) => set({ user })
});

export const userStore = create(setUserStore);
export const loadingStore = create(devtools(setLoadingStore));
export const errorStore = create(devtools(setErrorStore));