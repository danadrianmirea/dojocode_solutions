<template>
  <div>
    <h3>Shopping List</h3>

    <!-- Form to add a new item -->
    <form @submit.prevent="addItem">
      <input
        class="form-control"
        v-model="newItem"
        placeholder="Add New Item"
        type="text" />
    </form>

    <!-- Shopping list -->
    <ul class="list-group">
      <li
        class="list-group-item"
        v-for="(item, index) in items"
        :key="index"
        :class="{ removed: item.checked }">
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            v-model="item.checked" />
          <label class="form-check-label">{{ item.name }}</label>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
  import { ref } from "vue";

  const newItem = ref("");
  const items = ref([
    { name: "Banana", checked: false },
    { name: "Oranges", checked: false },
    { name: "Mangoes", checked: false },
  ]);

  const addItem = () => {
    if (newItem.value.trim() !== "") {
      items.value.push({ name: newItem.value.trim(), checked: false });
      newItem.value = "";
    }
  };
</script>

<style scoped>
  .removed {
    color: gray;
  }

  .removed label {
    text-decoration: line-through;
  }
</style>