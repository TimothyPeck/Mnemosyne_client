<template>
  <div>
    <q-header>{{ book.title }}</q-header>
    <q-item-section>
      <q-item-label>{{ book.commentary }}</q-item-label>
      <q-q-item-label caption>Pages: {{ book.pages }}</q-q-item-label>
    </q-item-section>
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
  }
})
</script>
