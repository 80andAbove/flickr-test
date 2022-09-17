<template>
  <div>
    <input type="text" id="searchInput" v-model="searchInputValue" />
  </div>
</template>

<script>
// import axios from "axios";
// import config from '../../../config.js'

export default {
  name: "SearchInput",
  data() {
    return {
      searchInputValue: "Search for a Pic",
    };
  },
  methods: {},
};
</script>

<style scoped>
#searchInput {
  background-color: white;
}
</style>
