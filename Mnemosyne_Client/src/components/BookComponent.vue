<template>
  <div class="book-container">
    <h2>{{ book.name }}</h2>
    <p>{{ book.commentary }}</p>
    <p>Pages: {{ book.page }}</p>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import type { Book_I } from '../App.vue'
import type { PropType } from 'vue'

export default defineComponent({
  name: 'BookComponent',
  props: {
    book: {
      type: Object as PropType<Book_I>,
      required: true
    }
  }
})
</script>
<style scoped>
.book-container {
  margin: 2rem;
  padding: 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
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
</style>
