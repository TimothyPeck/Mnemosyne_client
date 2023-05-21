<script setup lang="ts">
import { useBookStore } from '../stores/BookStore'
import BookComponent from '@/components/BookComponent.vue'
// const bookStore = useBookStore()

</script>
<script lang="ts">
export default {
  name: 'BooksView',
  components: {
    BookComponent
  },
  data() {
    return {
      books: [{id: 0, name: '', page: 0, commentary: '' }]
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
  <BookComponent v-for="book in books" v-bind:key="book.name" :book="book" />
</template>
<style scoped></style>
