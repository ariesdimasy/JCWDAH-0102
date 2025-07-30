import { create } from "zustand"

interface ICounterStore {
    count: number
    increment: () => void
    decrement: () => void
}

const useCounterStore = create<ICounterStore>((set) => {
    return {
        count: 0,
        increment: () => set((state) => {
            return { count: state.count + 1 }
        }),
        decrement: () => set((state) => {
            return { count: state.count - 1 }
        })
    }
})

export default useCounterStore