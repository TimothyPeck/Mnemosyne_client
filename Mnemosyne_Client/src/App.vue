<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'
import { useBookStore } from './stores/BookStore'

// await bookStore.getBooks()
// var books = [{ title: '', pages: 0, commentary: '' }]
// books = bookStore.booksState
</script>
<script lang="ts">
export interface Book_I {
  name: string
  page: number
  commentary: string
}
export default {
  name: 'App',
  data() {
    return {
      books: [] as Book_I[],
      dataReady: false
    }
  },
  created() {
    this.getAllBooks()
  },
  methods: {
    async getAllBooks() {
      console.log('getAllBooks()')
      this.dataReady = false
      const bookStore = useBookStore()
      await bookStore.getBooks()
      const books = await bookStore.books
      var ibook: Book_I
      var booksArray: Book_I[] = []
      for (ibook of books) {
        let book = {
          name: ibook.name,
          page: ibook.page,
          commentary: ibook.commentary
        }
        booksArray.push(book)
      }
      this.dataReady = true
      this.books = booksArray
      return booksArray
    }
  }
}
</script>

<template>
  <nav>
    <h1>Mnemosyne</h1>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/search">Find books</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  gap: 1rem;
}
main {
  margin: 2rem;
  padding: 1rem;
  width: 100%;
}
h1 {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.2rem;
}
h2 {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.2rem;
}
p {
  font-size: 1rem;
  font-weight: normal;
}
div {
  margin: 2rem;
  margin-inline: auto;
  padding: 1rem;
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
