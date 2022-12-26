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

  const imageSrc = computed(() =>
    card.value.isShown ? card.value.image : 'playing_cards/image_back.png'
  );

  const { url, onLoaded } = useImage(imageSrc);

  onLoaded(() => emits('onLoaded'));
</script>

<template>
  <div>
    <img :src="url" width="100" />
  </div>
</template>
