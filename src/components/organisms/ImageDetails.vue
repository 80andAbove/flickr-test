<template>
  <div class="ml-auto mr-auto mt-3" id="cardCaption">
    <p>
      Taken By: <strong>{{ image.id }}</strong>
    </p>
    <p>
      Taken On: <strong>{{ image.datetaken }}</strong>
    </p>
  </div>
</template>

<script>
export default {
  name: "ImageDetails",
  props: {
    image: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
#cardCaption {
  margin-left: auto;
  margin-right: auto;
}
</style>
