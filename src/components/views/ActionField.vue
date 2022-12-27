<script setup lang="ts">
  import type { ActionNumber, ActionsType } from '@/types/type';

  export interface ActionFieldProps {
    actionsType: ActionsType;
  }

  const props = defineProps<ActionFieldProps>();

  const { actionsType } = toRefs(props);

  const actions = computed((): ActionNumber[] => {
    switch (actionsType.value) {
      case 0:
        return [0, 1, 4];
      case 1:
        return [0, 2, 4];
    }
  });

  interface Emits {
    (e: 'onAction', action: ActionNumber): void;
  }

  const emits = defineEmits<Emits>();
</script>

<template>
  <div class="flex flex-col items-center">
    <p class="text-xl">Choose your action</p>
    <div class="mt-3 flex items-center justify-center">
      <button
        v-if="actions.includes(0)"
        class="btn mx-1"
        @click="emits('onAction', 0)"
      >
        Fold
      </button>
      <button
        v-if="actions.includes(1)"
        class="btn-success btn mx-1"
        @click="emits('onAction', 1)"
      >
        Check
      </button>
      <button
        v-if="actions.includes(2)"
        class="btn-success btn mx-1"
        @click="emits('onAction', 2)"
      >
        Call
      </button>
      <button
        v-if="actions.includes(3)"
        class="btn-warning btn mx-1"
        @click="emits('onAction', 3)"
      >
        Bet
      </button>
      <button
        v-if="actions.includes(4)"
        class="btn-warning btn mx-1"
        @click="emits('onAction', 4)"
      >
        Raise
      </button>
      <button
        v-if="actions.includes(5)"
        class="btn mx-1 bg-red-600"
        @click="emits('onAction', 5)"
      >
        AllIn
      </button>
    </div>
  </div>
</template>
