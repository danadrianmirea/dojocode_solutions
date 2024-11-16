<template>
  <div class="text-center">
    <!-- Display the current image -->
    <img :src="images[currentIndex]" height="500" width="400" />

    <!-- Previous button, disabled if at the first image -->
    <button
      class="btn btn-primary"
      @click="prevImage"
      :disabled="currentIndex === 0">
      Previous
    </button>

    <!-- Next button, disabled if at the last image -->
    <button
      class="btn btn-primary"
      @click="nextImage"
      :disabled="currentIndex === images.length - 1">
      Next
    </button>
  </div>
</template>

<script setup>
  import { ref, defineProps } from "vue";

  const props = defineProps({
    images: {
      type: Array,
      required: true,
      validator: value => value.length > 0,
    },
  });

  const currentIndex = ref(0);

  const prevImage = () => {
    if (currentIndex.value > 0) {
      currentIndex.value--;
    }
  };

  const nextImage = () => {
    if (currentIndex.value < props.images.length - 1) {
      currentIndex.value++;
    }
  };
</script>

<style scoped>
  button {
    margin: 10px;
  }

  img {
    margin-bottom: 20px;
  }
</style>