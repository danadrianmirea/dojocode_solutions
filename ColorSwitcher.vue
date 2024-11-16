<template>
  <div>
    <h1>Color switcher</h1>
    <p :class="isGreen ? 'green' : ''">Make me green</p>
    <button @click="toggleColor">Toggle color</button>
  </div>
</template>

<script setup>
  import { ref } from "vue";

  const isGreen = ref(false);

  function toggleColor() {
    isGreen.value = !isGreen.value;
  }
</script>

<style>
  .green {
    color: green;
  }
</style>