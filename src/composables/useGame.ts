export default () => {
  const initGame = () => {
    const { reset: resetProgress, progress } = useProgress();
    const { reset: resetPosition, position } = usePosition();
    const { reset: resetHand, hand } = useHand();

    resetProgress();
    resetPosition();
    resetHand();

    return {
      progress: unref(progress),
      position: unref(position),
      hand: unref(hand),
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
