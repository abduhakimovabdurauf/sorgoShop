import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: []
  }),
  actions: {
    addToCart(product, quantity = 1) {
      const existingItem = this.items.find(item => item.id === product.id)
      if (existingItem) {
        existingItem.quantity += quantity
      } else {
        this.items.push({
          id: product.id,
          product,
          quantity
        })
      }
    },
    removeFromCart(productId) {
      this.items = this.items.filter(item => item.id !== productId)
    },
    clearCart() {
      this.items = []
      this.saveToLocalStorage()
    },
    loadFromLocalStorage() {
      if (process.client) {
        const data = localStorage.getItem('cart')
        if (data) {
          this.items = JSON.parse(data)
        }
      }
    },
    saveToLocalStorage() {
      if (process.client) {
        localStorage.setItem('cart', JSON.stringify(this.items))
      }
    }
  }
})
