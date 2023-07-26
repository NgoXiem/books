<template>
    <div>
      <h1 class="text-3xl font-bold underline">Looking for a book?</h1>
        <input type="text" v-model="query" @change="handleChange" class="border-2 border-indigo-500"/>
      <ListBooks/>
    </div>
</template>
  
<script setup lang="ts">

import { useBookStore } from '../stores/book'

const bookStore = useBookStore()
const query = ref('')

const handleChange = (e: any) => {
  bookStore.page = 1
  bookStore.start = 0
  bookStore.total = 0
  bookStore.books = []
  bookStore.query = e.target.value
  bookStore.fetchBooks()
}

</script>