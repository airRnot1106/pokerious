<script setup lang="ts">
  const { position } = usePosition();
</script>

<template>
  <div>
    <PartsPositionImage :position="position" />
  </div>
</template>
