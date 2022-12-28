import type { Ref } from '@/types/type';
import type { MaybeElement } from '@vueuse/core';

const defaultUseCssAnimationOptions = {
  endFunc: () => {},
  duration: 0,
};

export default (
  source: Ref<MaybeElement | undefined>,
  cssClass: string,
  options?: Partial<typeof defaultUseCssAnimationOptions>
) => {
  const { endFunc, duration } = {
    ...defaultUseCssAnimationOptions,
    ...options,
  };

  const isAnimating = ref(false);

  const isEnded = ref(false);

  const play = () => {
    const element = unrefElement(source);
    if (!element) {
      isEnded.value = true;
      return;
    }

    isAnimating.value = true;

    element.classList.add(cssClass);

    const cleanup = useEventListener(element, 'animationend', () => {
      setTimeout(() => {
        isAnimating.value = false;
        isEnded.value = true;
        endFunc();
      }, duration);
      cleanup();
    });
  };

  const reset = () => {
    const element = unrefElement(source);
    if (!element) return;

    element.classList.remove(cssClass);

    isAnimating.value = false;
    isEnded.value = false;
  };

  return {
    isAnimating: readonly(isAnimating),
    isEnded: readonly(isEnded),
    play,
    reset,
  };
};
