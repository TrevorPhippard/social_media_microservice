import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    name: 'Trevor',
  }),
  actions: {
    setName(newName: string) {
      this.name = newName
    },
  },
})
