<template>
  <table id="bookbrowser">
    <thead>
      <h3>Most popular Books of All time</h3>
    </thead>
    <tbody class="rowContainer">
      <tr>
        <th v-for="value in columns" :key="value.title" class="tHeader" :style="headerStyle(value.style)">
          {{capitalise(value.title)}}
        </th>
      </tr>
      <book-browser-row 
        v-for="book in books" 
        :key="book.id"
        :book="book">
      </book-browser-row>
    </tbody>
    <tfoot>
      <book-browser-navigation :maxPages="maxPages" :currPage="currPage" @navigationEvent="navigationEventHandler"/>
    </tfoot>
  </table>
</template>

<script>
import BookBrowserRow from './BookBrowserRow.vue'
import BookBrowserNavigation from "./BookBrowserNavigation.vue"
export default {
  components: { BookBrowserRow, BookBrowserNavigation },
  data: function() {
    return {
      columns: [
        { title: "Title", style: { width: "60", textAlign: "initial" } },
        { title: "Published", style: { width: "10" } },
        { title: "Rating", style:{ width: "10" } },
        { title: "Buy On", style: { width: "10" } },
      ]
    }
  },
  props: {
    books: {
      type: Array,
      required: true,
      default: () => []
    },
    maxPages: {
      type: Number,
      required: true
    },
    currPage: {
      type: Number,
      required: true
    }
  },
  methods: {
    capitalise(value) {
      return value.toUpperCase();
    },
    headerStyle(style) {
      let styleReturn = {};
      styleReturn.width = style.width + "%";
      if (style.textAlign) {
        styleReturn.textAlign = style.textAlign;
      }
      return styleReturn
    },
    navigationEventHandler(navEvent) {
      this.$emit("navigationEvent", navEvent);
    }
  },
}
</script>

<style>

#bookbrowser {
  width: 100%;
  background-color: white;
  border-radius: 5px;
  padding: 10px;
}

.rowContainer > tr:nth-child(even) {
  background-color: rgb(245, 245, 245);
}

.tHeader {
  color: rgb(175, 175, 175);
}

</style>