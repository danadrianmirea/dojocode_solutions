<template>
  <form class="add-form" @submit.prevent="addTask">
    <div>
      <input
        v-model="taskName"
        name="text"
        placeholder="Add task"
        type="text" />
    </div>
    <button type="submit">Save Task</button>
  </form>
</template>

<script setup>
  import { ref } from "vue";

  const taskName = ref("");

  const addTask = () => {
    if (taskName.value.trim()) {
      emit("add-task", taskName.value);
      taskName.value = "";
    }
  };
</script>