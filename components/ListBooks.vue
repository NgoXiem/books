<template>
  <div>
    <div v-for="p in bookStore.books" :key="p.key">
        <h2 class="">{{ p.title }}</h2>
    </div>
    <div v-if="bookStore.loading" class="text-center">...Loading</div>

  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useBookStore } from '../stores/book'

let bookStore = useBookStore()

const scroll = () => {
  window.onscroll = () => {
    let bottomOfWindow = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight === document.documentElement.offsetHeight

    if (bottomOfWindow) {
      bookStore.page++
        if(bookStore.start <= bookStore.total){
          bookStore.fetchBooks()
        }
    }
  }
}

onMounted(() => {
  scroll()
})  

</script>
