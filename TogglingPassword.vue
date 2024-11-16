<template>
  <div>
    <input
      :type="isVisible ? 'text' : 'password'"
      v-model="password"
      placeholder="Enter password" />
    <button @click="toggleVisibility" class="toggle-btn">
      {{ isVisible ? "Hide" : "Show" }}
    </button>
  </div>
</template>

<script setup>
  import { ref } from "vue";

  const isVisible = ref(false);

  const password = ref("");

  const toggleVisibility = () => {
    isVisible.value = !isVisible.value;
  };
</script>

<style scoped>
  .toggle-btn {
    margin-left: 10px;
    padding: 5px 10px;
    cursor: pointer;
  }
</style>