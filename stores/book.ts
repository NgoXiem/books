import { defineStore } from "pinia";
import axios from "axios";

export const useBookStore = defineStore("books", {
    state: () => ({
      books: [] as any[],
      page: 1,
      total: 1,
      start: 0,
      query: "",
      loading: false,
    }),

    getters: {},

    actions: {
      fetchBooks() {
        this.loading = true;
        return new Promise((resolve, reject) => {
          axios.get(`http://openlibrary.org/search.json`, {params: {q: this.query, page: this.page}})
            .then((response) => {
              this.books = [...this.books, ...response.data.docs];
              this.total = response.data.numFound;
              this.start = response.data.start;
              resolve(response);
              })
            .catch((error) => {
              reject(error);
            })
            .finally(() => {
              this.loading = false;
            })
        });
      },
    },
});
