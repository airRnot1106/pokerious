<script setup lang="ts">
  import type { PlayingCardProperties } from '@/types/type';

  export interface CardImageProps {
    card: PlayingCardProperties;
  }

  const props = defineProps<CardImageProps>();

  interface Emits {
    (e: 'onLoaded'): void;
  }

  const emits = defineEmits<Emits>();

  const { card } = toRefs(props);

  const isShown = computed(() => card.value.isShown);

  const imageSrc = computed(() =>
    isShown.value ? card.value.image : 'playing_cards/image_back.png'
  );

  const { url, onLoaded } = useImage(imageSrc);

  onLoaded(() => emits('onLoaded'));

  const imgRef = ref<HTMLImageElement>();

  watch(isShown, (a, b) => {
    if (a && !b) {
      const { play, reset } = useCssAnimation(imgRef, 'animate-pulsate-fwd', {
        endFunc: () => {
          reset();
        },
      });
      play();
    }
  });
</script>

<template>
  <div>
    <img ref="imgRef" :src="url" width="80" />
  </div>
</template>
