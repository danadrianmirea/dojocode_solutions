<template>
  <div class="task">
    <h3>{{ task }}</h3>
    <span @click="deleteTask" class="delete">X</span>
  </div>
</template>

<script setup>
  import { defineProps, emit } from "vue";

  const props = defineProps({
    task: String,
  });

  const deleteTask = () => {
    emit("delete-task", props.task);
  };
</script>