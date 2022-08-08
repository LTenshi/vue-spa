<template>
  <th>
    <a v-for="link in bookLinks" :key="link.name" :href="link.url" class="bookLink">{{link.name}}<br></a>
  </th>
</template>

<script>
export default {
  props: {
    bookLinks: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style>
.bookLink {
  color: rgb(136, 221, 0);
  text-decoration: none;
}

.bookLink > a:link {
  text-decoration: none;
}

.bookLink > a:visited {
  text-decoration: none;
}

.bookLink > a:hover {
  text-decoration: none;
}

.bookLink > a:active {
  text-decoration: none;
}
</style>