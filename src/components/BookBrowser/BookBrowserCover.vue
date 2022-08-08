<template>
  <tr>
    <th class="imageHeader">
        <img :src="bookCover" @click="openDetails" class="imageContainer">
    </th>
    <th class="bookName">
        <div>{{bookName}}</div>
        <div class="bookAuthor">{{bookAuthor}}</div>
    </th>
  </tr>
</template>

<script>
export default {
    props: {
        bookName: {
            type: String,
            required: true,
        },
        bookAuthor: {
            type: String,
            required: true,
        },
        bookCover: {
            type: String,
            required: true,
        },
    },
    methods: {
        openDetails() {
            this.$emit("openDetails");
        }
    }
}
</script>

<style>
.bookName, .bookAuthor {
    font-size: 13pt;
}

.bookName {
    vertical-align: top;
    padding: 20px;
    text-align: left;
}

.bookAuthor {
    font-weight: 400;
    color: rgb(175, 175, 175);
}

.imageContainer {
    max-width: 140px;
}
</style>