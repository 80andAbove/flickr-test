<template>
  <div>
    <SearchInput />
    <SearchButton />
  </div>
</template>

<script>
import SearchInput from "../atoms/SearchInput.vue";
import SearchButton from "../atoms/SearchButton.vue";
export default {
  name: "SearchArea",
  components: { SearchInput, SearchButton },
  data() {
    return {
      test: "",
    };
  },
};
</script>

<style scoped></style>
