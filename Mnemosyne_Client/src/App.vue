<script setup lang="ts">
import BookComponent from './components/BookComponent.vue'
import { useBookStore } from './stores/BookStore'
const bookStore = useBookStore()

await bookStore.getBooks()
var books = [{ title: '', pages: 0, commentary: '' }]
books = bookStore.booksState
</script>

<template>
  <main>
    <BookComponent v-for="book in books" v-bind:key="book.title" :book="book" />
  </main>
</template>
