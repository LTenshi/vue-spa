<template>
  <tr>
    <book-browser-cover 
        :bookCover="bookCover" 
        :bookName="bookName" 
        :bookAuthor="bookAuthor"
        @openDetails="openDetails"/>
    <th class="fontStyle">
        {{this.bookYear}}
    </th>
    <th class="fontStyle">
        {{this.bookRating}}/10
    </th>
    <book-browser-urls :bookLinks="bookLinks"/>
  </tr>
  <th v-if="detailsExpanded" colspan="4" class="detailsPanel" v-html="this.bookDetails"></th>
</template>

<script>
import BookBrowserCover from './BookBrowserCover.vue';
import BookBrowserUrls from './BookBrowserUrls.vue';
import showdown from "showdown";
export default {
    components: { BookBrowserCover, BookBrowserUrls },
    data() {
        return {
            detailsExpanded: false
        }
    },
    props: {
        book: {
            type: Object,
            required: true,
        },
    },
    computed: {
        bookCover() {
            return this.book.coverUrl;
        },
        bookName() {
            return this.book.name;
        },
        bookId() {
            return this.book.id;
        },
        bookAuthor() {
            return this.book.author;
        },
        bookYear() {
            return this.book.year;
        },
        bookRating() {
            return this.book.rating;
        },
        bookLinks() {
            return this.book.links;
        },
        bookDetails() {
            var converter = new showdown.Converter();
            return converter.makeHtml(this.book.details);
        }
    },
    methods: {
        openDetails() {
            this.detailsExpanded = !this.detailsExpanded;
        }
    }
}
</script>

<style>
.detailsPanel {
    font-weight: 450;
    text-align: initial;
}

.fontStyle {
    font-weight: 450;
}
</style>