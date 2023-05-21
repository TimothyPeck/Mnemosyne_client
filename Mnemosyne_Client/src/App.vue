<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'

</script>
<script lang="ts">
export interface Book_I {
  id: number | null
  name: string
  page: number
  commentary: string
}
export interface GoogleBook_I{
  selfLink: string,
  volumeInfo: {
    title: string,
    subtitle: string,
    authors: string[],
    publisher: string,
    publishedDate: string,
    description: string,
    pageCount: number,
    printType: string,
    categories: string[],
    averageRating: number,
    ratingsCount: number,
    maturityRating: string,
    allowAnonLogging: boolean,
    contentVersion: string,
    imageLinks: {
      smallThumbnail: string,
      thumbnail: string
    },
    language: string,
    previewLink: string,
    infoLink: string,
    canonicalVolumeLink: string
  },
}
export default {
  name: 'App',
}
</script>

<template>
  <nav>
    <h1>Mnemosyne</h1>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/search">Find books</RouterLink>
    <RouterLink to="/googleSearch">Search from Google Books</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  gap: 1rem;
}
main {
  margin: 2rem;
  padding: 1rem;
  width: 100%;
}
h1 {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.2rem;
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
div {
  margin: 2rem;
  margin-inline: auto;
  padding: 1rem;
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
