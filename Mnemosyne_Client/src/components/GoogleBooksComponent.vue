<script lang="ts" setup>
import { Form, Field } from 'vee-validate'
import { useGoogleBooksStore } from '@/stores/GoogleBooksStore'
import GoogleBookComponent from './GoogleBookComponent.vue'
import * as yup from 'yup'
import type { GoogleBook_I } from '@/App.vue'

const schema = yup.object().shape({
  searchTerm: yup.string().required()
})
</script>
<script lang="ts">
export default {
  name: 'BooksFormComponent',

  methods: {
    async onSubmit(values: any) {
      const bookStore = useGoogleBooksStore()
      const searchTerm = values.searchTerm
      this.books = await bookStore.getBooks(searchTerm)
      //   books = bookStore.booksState
      console.log(this.books)
    }
  },
  data() {
    return {
      books: Array<GoogleBook_I>,
    }
  }
}
</script>
<template>
  <div class="form-container">
    <h1>Books Form</h1>
    <Form :validation-schema="schema" @submit="onSubmit" class="form">
      <Field name="searchTerm" type="text" class="input" />
      <input type="submit" value="Search" class="search-button" />
    </Form>
  </div>
  <div class="book-container">
    <GoogleBookComponent v-for="book in books" v-bind:key="book.volumeInfo.title" :book="book" />
  </div>
</template>

<style scoped>
.form-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: var(--color-background-mute);
  color: var(--color-text);
  padding: 1rem;
  border-radius: 0.2rem;
  border: 1px solid var(--color-border);
}
.form {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}
.input {
  width: 70%;
  border-radius: 0.05rem;
  border: 1px solid var(--color-border);
  background-color: var(--color-background-soft);
  color: var(--color-text);
}
.input:focus {
  border: 1px solid var(--color-primary);
}

.search-button {
  width: 30%;
  border-radius: 0.05rem;
  border: 1px solid var(--color-border);
  background-color: var(--color-background-soft);
  color: var(--color-text);
  transition: all 0.2s ease-in-out;
  cursor: pointer;
}

.search-button:focus,
.search-button:hover {
  border: 1px solid var(--color-border-hover);
  background-color: var(--color-background-mute);
}
</style>
