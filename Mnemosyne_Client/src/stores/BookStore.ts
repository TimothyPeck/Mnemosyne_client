import { defineStore } from 'pinia'
import { fetchWrapper } from '../utils/fetchWrapper'

const BASE_URL: string = `http://127.0.0.1:8080/api/books`

export const useBookStore = defineStore({
  id: 'books-store',
  state: () => ({
    booksState: [],
    bookSate: { title: '', pages: 0, commentary: '' },
    loadingState: false,
    errorState: null as string | null | unknown
  }),
  getters: {
    books: (state) => state.booksState,
    book: (state) => state.bookSate,
    loading: (state) => state.loadingState,
    error: (state) => state.errorState
  },
  actions: {
    async getBooks() {
      this.loadingState = true
      try {
        const books = await fetchWrapper.get(BASE_URL, null)
        this.booksState = books
      } catch (error) {
        this.errorState = error
      } finally {
        this.loadingState = false
      }
    },
    async getBook(id: string) {
      this.loadingState = true
      try {
        const book = await fetchWrapper.get(`${BASE_URL}/${id}`, null)
        this.bookSate = book
      } catch (error) {
        this.errorState = error
      } finally {
        this.loadingState = false
      }
    }
  }
})
