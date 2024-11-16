<template>
  <div>
    <h1>TaskList</h1>
    <AddTask @add-task="addTask" />
    <div>
      <TaskItem
        v-for="(task, index) in taskList"
        :key="index"
        :task="task"
        @delete-task="deleteTask(task)" />
    </div>
  </div>
</template>

<script setup>
  import { ref } from "vue";
  import AddTask from "./AddTask.vue";
  import TaskItem from "./TaskItem.vue";

  const taskList = ref(["Sample Task 1", "Sample Task 2"]);

  const addTask = taskName => {
    taskList.value.push(taskName);
  };

  const deleteTask = taskName => {
    taskList.value = taskList.value.filter(task => task !== taskName);
  };
</script>