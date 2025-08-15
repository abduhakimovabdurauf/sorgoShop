export const useProductStore = defineStore('product', {
  state: () => ({
    products: []
  }),
  actions: {
    async fetchProducts() {
      const config = useRuntimeConfig()
      const baseUrl = config.public.CPANEL_LINK

      try {
        const res = await fetch(`${baseUrl}api/products`)
        const data = await res.json()
        if (data.status === 'success') {
          this.products = data.data
          console.log(this.products)
        } else {
          console.error('Maʼlumot olishda xatolik:', data)
        }
      } catch (error) {
        console.error('Fetch xatosi:', error)
      }
    }
  },
  
  getters: {
    getProductsByCategory: (state) => {
      return (category) => state.products.filter(product => product.category === category);
    },
    getProductById: (state) => {
      return (id) => state.products.find(product => product.id === id);
    }
  }

});