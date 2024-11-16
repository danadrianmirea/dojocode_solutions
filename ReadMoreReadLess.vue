<template>
  <div>
    <p>
      Hello, my name is
      <strong>...</strong>
      <span v-show="isExpanded">{{ fullText }}</span>
    </p>
    <button @click="toggleText">
      {{ isExpanded ? "Show Less" : "Show More" }}
    </button>
  </div>
</template>

<script setup>
  import { ref } from "vue";

  const isExpanded = ref(false);

  const fullText = " Danut";

  const toggleText = () => {
    isExpanded.value = !isExpanded.value;
  };
</script>

<style scoped>
  button {
    margin-top: 10px;
    padding: 5px 15px;
    cursor: pointer;
  }
</style>