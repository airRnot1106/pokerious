<script setup lang="ts">
  const heroRef = ref<HTMLElement>();

  const { play } = useCssAnimation(heroRef, 'animate-slide-out-bck-center', {
    endFunc: () => {
      navigateTo('/op');
    },
    duration: 500,
  });
</script>

<template>
  <div ref="heroRef" class="hero">
    <div class="hero-content text-center">
      <div class="max-w-lg">
        <h1 class="text-5xl font-bold">Pokerious</h1>
        <p class="py-6">
          Your preflop improvement will lead you to victory.<br />
          This app will help you learn the best action (open raise) based on
          your hand range.
        </p>
        <button class="btn-primary btn" @click="play">Get Started</button>
      </div>
    </div>
  </div>
</template>
