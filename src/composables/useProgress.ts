export default () => {
  const progress = useState('progress', () => 0);

  const advance = () => {
    progress.value += 1;
  };

  const reset = () => {
    progress.value = 0;
  };

  return { progress: readonly(progress), advance, reset };
};
