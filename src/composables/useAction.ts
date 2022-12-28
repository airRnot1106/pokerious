import type { ActionNumber } from '@/types/type';

export default () => {
  const initAction = () => {
    const actions: ActionNumber[] = [];

    return actions;
  };

  const actions = useState('action', initAction);

  const action = (action: ActionNumber) => {
    actions.value.push(action);
  };

  const reset = () => {
    actions.value = initAction();
  };

  return { actions: readonly(actions), action, reset };
};
