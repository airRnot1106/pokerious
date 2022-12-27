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

  const reset = () => {
    game.value = initGame();
  };

  return {
    game: readonly(game),
    reset,
  };
};
