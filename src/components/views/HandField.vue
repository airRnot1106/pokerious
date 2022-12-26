<script setup lang="ts">
  const { hand, show, onShow } = useHand();

  const isLoadedImage = ref(false);

  const onLoadedImage = () => {
    isLoadedImage.value = true;
  };

  const lRef = ref<HTMLElement>();
  const rRef = ref<HTMLElement>();

  onShow(() => {
    const { play: lPlay, reset: lReset } = useCssAnimation(
      lRef,
      'animate-pulsate-fwd',
      {
        endFunc: () => {
          lReset();
        },
      }
    );
    lPlay();

    const { play: rPlay, reset: rReset } = useCssAnimation(
      rRef,
      'animate-pulsate-fwd',
      {
        endFunc: () => {
          rReset();
        },
      }
    );
    rPlay();
  });
</script>

<template>
  <div class="flex items-center justify-center">
    <PartsCardImage
      ref="lRef"
      :card="hand[0]"
      class="m-1"
      @on-loaded="onLoadedImage"
    />
    <PartsCardImage ref="rRef" :card="hand[1]" class="m-1" />
    <button v-if="isLoadedImage" class="btn" @click="show">Show</button>
  </div>
</template>
