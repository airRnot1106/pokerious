<script setup lang="ts">
  import type { ActionNumber } from '@/types/type';

  import { numberToAction } from '@/libs/action';

  export interface ActionResultProps {
    success: boolean;
    correctAction: ActionNumber;
  }

  const props = defineProps<ActionResultProps>();

  const { success } = toRefs(props);
</script>

<template>
  <div class="flex flex-col items-center p-5">
    <div>
      <PartsResultSuccess v-if="success" />
      <PartsResultFailure v-else />
    </div>
    <p class="mt-1 text-xl">
      Correct:
      {{
        numberToAction[correctAction].charAt(0).toUpperCase() +
        numberToAction[correctAction].slice(1).toLowerCase()
      }}
    </p>
  </div>
</template>
