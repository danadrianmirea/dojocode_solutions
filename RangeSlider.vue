<template>
  <div>
    <h1>Developer Experience</h1>
    <p>Let us know where you're at as a programmer</p>

    <!-- Use the CustomSlider component and bind modelValue -->
    <CustomSlider :min="0" :max="100" v-model="sliderValue" />

    <!-- Dynamically change the text based on slider value -->
    <h2>{{ developerStatus }}</h2>
  </div>
</template>

<script setup>
  import { ref, computed } from "vue";
  import CustomSlider from "./CustomSlider.vue";

  const sliderValue = ref(0);

  const developerStatus = computed(() => {
    if (sliderValue.value <= 20) {
      return "Junior Developer";
    } else if (sliderValue.value <= 60) {
      return "Middle Developer";
    } else {
      return "Senior Developer";
    }
  });
</script>