<template>
  <div>
    <h2>{{ book.name }}</h2>
    <ul>
      <li v-if="book.commentary != ''">{{ book.commentary }}</li>
      <li>Current page: {{ book.page }}</li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BookComponent',
  props: {
    book: {
      type: Object,
      required: true
    }
  },
})
</script>
