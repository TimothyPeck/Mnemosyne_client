<script setup lang="ts">
import { useBookStore } from '../stores/BookStore'
import BookComponent from '@/components/BookComponent.vue'
// const bookStore = useBookStore()

// var books = [{ title: '', pages: 0, commentary: '' }]
// books = await bookStore.getBooks()
// // books = bookStore.booksState
</script>
<script lang="ts">
export default {
  name: 'BooksView',
  components: {
    BookComponent
  },
  data() {
    return {
      books: [{ title: '', pages: 0, commentary: '' }]
    }
  },
  methods: {
    async getBooks() {
      const bookStore = useBookStore()
      this.books = await bookStore.getBooks()
    }
  },
  created() {
    this.getBooks()
  }
}
</script>
<template>
  <BookComponent v-for="book in books" v-bind:key="book.title" :book="book" />
</template>
<style scoped></style>
