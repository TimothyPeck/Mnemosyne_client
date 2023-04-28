import { defineStore } from 'pinia'
import { fetchWrapper } from '../utils/fetchWrapper'

const BASE_URL: string = `${import.meta.env.VITE_API_URL}/books`

export const useBookStore = defineStore({
  id: 'books',
  state: () => ({
    books: [],
    book: null,
    loading: false,
    error: null as string | null | unknown
  }),
  getters: {
    books: (state) => state.books,
    book: (state) => state.book,
    loading: (state) => state.loading,
    error: (state) => state.error
  },
  actions: {
    async getBooks() {
      this.loading = true
      try {
        const books = await fetchWrapper.get(BASE_URL, '')
        this.books = books
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    },
    async getBook(id: string) {
      this.loading = true
      try {
        const book = await fetchWrapper.get(`${BASE_URL}/${id}`, '')
        this.book = book
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    }
  }
})
