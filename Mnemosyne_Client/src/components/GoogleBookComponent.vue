<script lang="ts">
import { defineComponent } from 'vue'
import type { GoogleBook_I } from '@/App.vue'
import type { PropType } from 'vue'

export default defineComponent({
  name: 'GoogleBookComponent',
  props: {
    book: {
      type: Object as PropType<GoogleBook_I>,
      required: true
    }
  }
})
</script>
<template>
  <div>
    <h2>{{ book.volumeInfo.title }}</h2>
    <h3>{{ book.volumeInfo.subtitle }}</h3>
    <ul>
        Authors:
        <ul>
            <li v-for="author in book.volumeInfo.authors" v-bind:key="author">{{ author }}</li>
        </ul>
      <li v-if="book.volumeInfo.description != ' '">{{ book.volumeInfo.description }}</li>
      <li>Page count: {{ book.volumeInfo.pageCount }}</li>
    </ul>
  </div>
</template>
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