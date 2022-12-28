import { Position } from '@/libs/position';

export default () => {
  const initPosition = () => {
    const position = new Position();

    return position.properties;
  };

  const position = useState('position', initPosition);

  const reset = () => {
    position.value = initPosition();
  };

  return { position: readonly(position), reset };
};
