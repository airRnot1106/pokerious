<script setup lang="ts">
  const { x, y } = useMouse();
</script>

<template>
  <div class="p-3">
    <h2>Successful!</h2>
    <button class="btn">Button</button>
    <div>pos: {{ x }}, {{ y }}</div>
  </div>
</template>
