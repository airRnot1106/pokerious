<script setup lang="ts">
  import type { ActionNumber, ActionResultProperties } from '@/types/type';

  const { judge, reset: resetGame, onReset } = useGame();

  const { progress, advance, onAdvance, reset: resetProgress } = useProgress();

  const { show } = useHand();

  const playerFieldRef = ref<HTMLElement>();

  const actionFieldRef = ref<HTMLElement>();

  const { position } = usePosition();

  const resultRef = ref<HTMLElement>();

  const result = ref<ActionResultProperties | null>(null);

  const action = (actionNumber: ActionNumber) => {
    const { action } = useAction();
    action(actionNumber);
    result.value = judge(true);
    advance(5);
  };

  const actionsType = computed(() => (position.value.position === 1 ? 0 : 1));

  onAdvance((progress) => {
    switch (progress) {
      case 1: {
        const { play, reset } = useCssAnimation(
          playerFieldRef,
          'animate-slide-in-left',
          {
            endFunc: () => {
              reset();
              advance(2);
            },
            duration: 250,
          }
        );
        play();
        break;
      }
      case 2: {
        show();
        setTimeout(() => advance(3), 800);
        break;
      }
      case 3: {
        const { play, reset } = useCssAnimation(
          actionFieldRef,
          'animate-scale-up-center',
          {
            endFunc: () => {
              reset();
              advance(4);
            },
            duration: 250,
          }
        );
        nextTick(() => {
          play();
        });
        break;
      }
      case 4: {
        break;
      }
      case 5: {
        nextTick(() => {
          const { play, reset } = useCssAnimation(
            resultRef,
            result.value?.isCorrect
              ? 'animate-swirl-in-fwd'
              : 'animate-rotate-in-2-cw',
            {
              endFunc: () => {
                reset();
                advance(6);
              },
            }
          );
          play();
        });
      }
    }
  });

  onReset(() => {
    resetProgress();
    nextTick(() => {
      advance(1);
    });
  });

  onMounted(() => {
    resetGame();
  });
</script>

<template>
  <div class="flex flex-col items-center py-8">
    <ViewsResultsView />
    <ViewsPlayerField ref="playerFieldRef" />
    <div class="mt-3">
      <ViewsActionField
        v-if="progress >= 3 && progress < 5"
        ref="actionFieldRef"
        :actions-type="actionsType"
        @on-action="action"
      />
      <ViewsActionResultField
        v-if="progress >= 5 && progress < 7 && result !== null"
        ref="resultRef"
        :success="result.isCorrect"
        :correct-action="result.gtoAction"
      />
    </div>
    <button
      v-if="progress === 6"
      class="btn-primary btn mx-5 mt-1"
      @click="resetGame"
    >
      Next Problem
    </button>
  </div>
</template>
