<template>
  <div class="markdown-editor">
    <textarea
      data-testid="editor"
      v-model="markdownText"
      placeholder="Enter Markdown text here"></textarea>
    <div
      class="markdown-preview"
      data-testid="preview"
      v-html="htmlOutput"></div>
  </div>
</template>

<script setup>
  import { ref, computed } from "vue";
  import { marked } from "marked";

  const markdownText = ref("");

  const htmlOutput = computed(() => marked(markdownText.value));
</script>

<style scoped>
  .markdown-editor {
    display: flex;
  }

  textarea {
    flex: 1;
    height: 300px;
    margin-right: 20px;
  }

  .markdown-preview {
    flex: 1;
    border: 1px solid #ccc;
    padding: 10px;
    overflow-y: auto;
  }
</style>