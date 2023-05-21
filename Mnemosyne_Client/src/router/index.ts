import { createRouter, createWebHistory } from 'vue-router'
import BooksView from '../views/BooksView.vue'
import SearchView from '../views/SearchView.vue'
import GoogleSearchView from '../views/GoogleSearch.vue'
import UpdateView from '../views/UpdateView.vue'
export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: BooksView,
    },
    {
      path: '/search',
      name: 'search',
      component: SearchView,
    },
    {
      path: '/googleSearch',
      name: 'googleSearch',
      component: GoogleSearchView,
    },
    {
      path: '/update/:id',
      name: 'update',
      component: UpdateView,
    }
  ]
})
