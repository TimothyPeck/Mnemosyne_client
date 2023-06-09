import { defineStore } from 'pinia'
import { fetchWrapper } from '../utils/fetchWrapper'

const BASE_URL: string = `${import.meta.env.VITE_API_URL}/books`

export const useBookStore = defineStore({
  id: 'books-store',
  state: () => ({
    booksState: [],
    bookState: { title: '', pages: 0, commentary: '' },
    loadingState: false,
    errorState: null as string | null | unknown
  }),
  getters: {
    books: (state) => state.booksState,
    book: (state) => state.bookState,
    loading: (state) => state.loadingState,
    error: (state) => state.errorState
  },
  actions: {
    async getBooks() {
      this.loadingState = true
      try {
        const books = await fetchWrapper.get(`${BASE_URL}`, null)
        this.booksState = books
        return books
      } catch (error) {
        this.errorState = error
      } finally {
        this.loadingState = false
      }
    },
    async getBook(id: Number) {
      this.loadingState = true
      try {
        const book = await fetchWrapper.get(`${BASE_URL}/${id}`, null)
        this.bookState = book
        return book
      } catch (error) {
        this.errorState = error
      } finally {
        this.loadingState = false
      }
    },
    async findBook(searchTerm: string) {
      this.loadingState = true
      try {
        const books = await fetchWrapper.post(`${BASE_URL}/find/${searchTerm}`, '')
        this.bookState = books
        return books
      } catch (error) {
        this.errorState = error
      } finally {
        this.loadingState = false
      }
    },
    async updateBook(book: any) {
      this.loadingState = true
      try {
        const response = await fetchWrapper.put(`${BASE_URL}/${book.id}`, JSON.stringify(book))
        this.bookState = response
      } catch (error) {
        this.errorState = error
        console.log(error)
      } finally {
        this.loadingState = false
      }
    },
    async deleteBook(id: string) {
      this.loadingState = true
      try {
        const response = await fetchWrapper.delete(`${BASE_URL}/${id}`, '')
        this.bookState = response
      } catch (error) {
        this.errorState = error
      } finally {
        this.loadingState = false
      }
    },
  }
})
