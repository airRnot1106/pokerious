import { isGtoHandRange } from '@/libs/handRange';

export default () => {
  const initGame = () => {
    const { reset: resetProgress, progress } = useProgress();
    const { reset: resetPosition, position } = usePosition();
    const { reset: resetHand, hand } = useHand();
    const { reset: resetAction, actions } = useAction();

    resetProgress();
    resetPosition();
    resetHand();
    resetAction();

    return {
      progress: unref(progress),
      position: unref(position),
      hand: unref(hand),
      actions: unref(actions),
    };
  };

  const game = useState('game', initGame);

  const results = useState('results', () => ({
    correct: 0,
    incorrect: 0,
    consecutive: 0,
  }));

  const judge = (isCount = false) => {
    const { position, hand, actions } = unref(game);
    const result = isGtoHandRange(position, hand, actions);
    if (isCount && result) {
      if (result.isCorrect) {
        results.value.correct++;
        results.value.consecutive++;
      } else {
        results.value.incorrect++;
        results.value.consecutive = 0;
      }
    }
    return result;
  };

  const resetEvent = createEventHook<void>();

  const reset = () => {
    game.value = initGame();
    resetEvent.trigger();
  };

  return {
    game: readonly(game),
    results: readonly(results),
    judge,
    reset,
    onReset: resetEvent.on,
  };
};
