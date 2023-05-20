import { defineStore } from 'pinia'
import { fetchWrapper } from '../utils/fetchWrapper'

const GOOGLE_BOOKS_URL: string = 'https://www.googleapis.com/books/v1/volumes?q='

export const useGoogleBooksStore = defineStore({
    id: 'google-books-store',
    state: () => ({
        booksState: [],
        loadingState: false,
        errorState: null as string | null | unknown
    }),
    getters: {
        books: (state) => state.booksState,
        loading: (state) => state.loadingState,
        error: (state) => state.errorState
    },
    actions: {
        async getBooks(searchTerm: string) {
            this.loadingState = true
            searchTerm = searchTerm.replace(' ', '+')
            try {
                const books = await fetchWrapper.get(`${GOOGLE_BOOKS_URL}${searchTerm}`, null)
                this.booksState = books.items
                return books.items
            } catch (error) {
                this.errorState = error
            } finally {
                this.loadingState = false
            }
        },
    },
})