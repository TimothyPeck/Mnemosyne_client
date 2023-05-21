<script setup lang="ts">
import type { Book_I } from '@/App.vue'
import UpdateBookComponent from '@/components/UpdateBookComponent.vue'
import { router } from '@/router'
import { useBookStore } from '@/stores/BookStore'
</script>
<script lang="ts">
export default {
  name: 'UpdateView',
  components: {
    UpdateBookComponent
  },
  data() {
    return {
      book: { id: 0, name: '', page: 0, commentary: '' } as Book_I,
    }
  },
  methods: {
    async getBook() {
      var id: Number = Number(router.currentRoute.value.params.id)
      const bookStore = useBookStore()
      this.book = await bookStore.getBook(id)
    }
  },
  created() {
    this.getBook()
  }
}
</script>
<template>
  <div v-if="book != undefined">
    <UpdateBookComponent :book="book"/>
  </div>    
  <div v-else>
    <p>Loading...</p>
  </div>
</template>
