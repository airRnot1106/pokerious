<script setup lang="ts">
  const { results } = useGame();
</script>

<template>
  <div class="flex items-center justify-center">
    <div class="mx-1 flex flex-col items-center">
      <img src="../../assets/images/other/image_check_mark.svg" width="20" />
      <p>{{ results.correct }}</p>
    </div>
    <div class="mx-5 flex flex-col items-center">
      <img src="../../assets/images/other/image_cross_mark.svg" width="20" />
      <p>{{ results.incorrect }}</p>
    </div>
    <div class="mx-1 flex flex-col items-center">
      <img src="../../assets/images/other/image_hot_mark.svg" width="20" />
      <p>{{ results.consecutive }}</p>
    </div>
  </div>
</template>
