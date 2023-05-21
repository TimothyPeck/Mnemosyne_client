<script setup lang="ts">
import { Form, Field } from 'vee-validate';
import type { Book_I } from '@/App.vue';
import type { PropType } from 'vue';
import { useBookStore } from '../stores/BookStore'
import * as yup from 'yup';
import { router } from '@/router';
// const bookStore = useBookStore()

const schema = yup.object({
    name: yup.string().required(),
    page: yup.number().required(),
    commentary: yup.string().required()
})
</script>
<script lang="ts">
export default {
  name: 'BooksView',
  props: {
    book: {
      type: Object as PropType<Book_I>,
      required: true
    },
  },
  methods: {
    async onSubmit(values: any){
        const bookStore = useBookStore()
        console.log(values)
        var { name, page, commentary } = values
        var book: Book_I = {id: this.book.id, name: name, page: page, commentary: commentary}
        await bookStore.updateBook(book)
        router.push({name: 'home'})
    }
  },
}
</script>
<template>
    <Form @submit="onSubmit" :validation-schema="schema">
        <!-- <Field name="name" type="text" placeholder="Book name" :value="book.name"/> -->
        <Field name="name" type="text" placeholder="Book name" v-model="book.name"/>
        <Field name="page" type="number" placeholder="Current page" v-model="book.page"/>
        <Field name="commentary" type="text" placeholder="Commentary" v-model="book.commentary"/>
        <button type="submit">Submit</button>
    </Form>
</template>
<style scoped>
form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
}
input {
    margin: 0.5rem;
    padding: 0.5rem;
    border-radius: 0.2rem;
    border: 1px solid var(--color-border);
}
button {
    margin: 0.5rem;
    padding: 0.5rem;
    border-radius: 0.2rem;
    border: 1px solid var(--color-border);
    background-color: var(--color-background);
    color: var(--color-text);
}
</style>