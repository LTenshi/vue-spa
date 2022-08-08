<template>
  <div>
    <h1>Books</h1>
    <book-browser :books="books" :maxPages="pages" :currPage="currPage" @navigationEvent="handlePageChange"/>
  </div>
</template>

<script>
import BookBrowser from '@/components/BookBrowser/BookBrowser.vue'
// import BooksJSON from "../assets/books.json"
export default {
  components: { BookBrowser },
  data() {
    return {
      books: [],
      itemsToLoad: 5,
      pages: 0,
      currPage: 1,
    }
  },
  methods: {
    //startIndex and endIndex will only simulate the pagination received from API.
    //This function will always load all books.
    async fetchBooks() {
      //Can be replaced with any other url.
      let response = await fetch("books.json");
      let json = await response.json();

      //Pagination below
      let index = 0 + ( (this.currPage - 1) * this.itemsToLoad);
      this.books = json.slice(0 + ( (this.currPage - 1) * this.itemsToLoad), index + this.itemsToLoad);
      this.pages = Math.ceil(json.length / this.itemsToLoad);
    },
    handlePageChange(payload) {
      this.currPage = payload;
      this.fetchBooks();
    }
  },
  mounted() {
    this.fetchBooks();
  }
}
</script>

<style>

</style>