import type { UnwrapRef } from 'vue';

export default () => {
  const progress = useState('progress', () => 0);

  const advance = () => {
    progress.value += 1;
    progressEvent.trigger(progress.value);
  };

  const reset = () => {
    progress.value = 0;
  };

  const progressEvent = createEventHook<UnwrapRef<typeof progress>>();

  return {
    progress: readonly(progress),
    advance,
    reset,
    onAdvance: progressEvent.on,
  };
};
