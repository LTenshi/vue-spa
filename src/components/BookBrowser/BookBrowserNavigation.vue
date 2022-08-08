<template>
    <th class="container" colspan="4">
        <button @click="moveBack" :style="isBackPossible" :disabled="isBackPossible">&#10094;</button>
        Page {{currPage}} of {{maxPages}} 
        <button @click="moveForward" :style="isForwardPossible" :disabled="isForwardPossible">&#10095;</button>
    </th>
</template>

<script>
export default {
 props: {
    maxPages: {
      type: Number,
      required: true
    },
    currPage: {
        type: Number,
        required: true,
    }
  },
  methods: {
    moveBack() {
        this.$emit("navigationEvent", this.currPage - 1);
    },
    moveForward() {
        this.$emit("navigationEvent", this.currPage + 1);
    }
  },
  computed: {
    isBackPossible() {
        return this.currPage === 1 ? { color: "lightgrey", cursor: "unset" } : false
    },
    isForwardPossible() {
        return this.currPage === this.maxPages ? { color: "lightgrey", cursor: "unset" } : false
    }
  }
}
</script>

<style>
.container {
    width: 100%;
}

button {
	background: none;
    color: grey;
	border: none;
	font: inherit;
	cursor: pointer;
}
</style>