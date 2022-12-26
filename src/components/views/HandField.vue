<script setup lang="ts">
  const { hand } = useHand();

  const isLoadedImage = ref(false);

  const onLoadedImage = () => {
    isLoadedImage.value = true;
  };
</script>

<template>
  <div class="flex items-center justify-center">
    <PartsCardImage :card="hand[0]" class="m-1" @on-loaded="onLoadedImage" />
    <PartsCardImage :card="hand[1]" class="m-1" />
  </div>
</template>
