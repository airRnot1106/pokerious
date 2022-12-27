<script setup lang="ts">
  import type { PositionProperties } from '@/types/type';

  export interface PositionImageProps {
    position: PositionProperties;
  }

  const props = defineProps<PositionImageProps>();

  interface Emits {
    (e: 'onLoaded'): void;
  }

  const emits = defineEmits<Emits>();

  const { position } = toRefs(props);

  const imageSrc = computed(() => position.value.image);

  const { url, onLoaded } = useImage(imageSrc);

  onLoaded(() => emits('onLoaded'));
</script>

<template>
  <div>
    <img :src="url" width="100" />
  </div>
</template>
