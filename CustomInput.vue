<template>
  <div>
    <h1>Custom Input</h1>
    <input type="text" :value="modelValue" @input="updateValue" />
  </div>
</template>

<script setup>
  import { defineProps, defineEmits } from "vue";

  const props = defineProps({
    modelValue: {
      type: String,
      required: true,
    },
  });

  const emit = defineEmits(["update:modelValue"]);

  const updateValue = event => {
    emit("update:modelValue", event.target.value);
  };
</script>