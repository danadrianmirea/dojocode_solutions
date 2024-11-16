<template>
  <div class="slidecontainer">
    <input
      class="slider"
      type="range"
      :min="min"
      :max="max"
      :value="localValue"
      @input="updateValue" />
  </div>
</template>

<script setup>
  import { ref, watch, defineProps, defineEmits } from "vue";

  const props = defineProps({
    min: {
      type: Number,
      required: true,
    },
    max: {
      type: Number,
      required: true,
    },
    modelValue: {
      type: Number,
      required: true,
    },
  });

  const localValue = ref(props.modelValue);

  const emit = defineEmits(["update:modelValue"]);

  watch(
    () => props.modelValue,
    newValue => {
      localValue.value = newValue;
    },
  );

  const updateValue = event => {
    emit("update:modelValue", +event.target.value);
  };
</script>

<style scoped>
  .slidecontainer {
    width: 100%;
    text-align: center;
  }

  .slider {
    width: 80%;
  }
</style>