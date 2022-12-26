import type {
  Pair,
  Success,
  ResultData,
  PlayingCardProperties,
} from '@/types/type';

import { Deck, dummyCard } from '@/libs/deck';

export default () => {
  const initHand = () => {
    const deck = new Deck({ shuffle: true });
    const results = [deck.draw(), deck.draw()] as const;

    if (
      !((
        pair: typeof results
      ): pair is Pair<Success<ResultData<typeof results[number]>>> => {
        return pair.every((result) => result.success);
      })(results)
    ) {
      const hand = [
        dummyCard.properties,
        dummyCard.properties,
      ] satisfies Pair<PlayingCardProperties>;

      return hand;
    } else {
      const hand = [
        results[0].data.card,
        results[1].data.card,
      ] satisfies Pair<PlayingCardProperties>;

      return hand;
    }
  };

  const hand = useState('hand', initHand);

  const showEvent = createEventHook<void>();

  const show = () => {
    const [l, r] = hand.value;
    l.isShown = true;
    r.isShown = true;
    showEvent.trigger();
  };

  const hideEvent = createEventHook<void>();

  const hide = () => {
    const [l, r] = hand.value;
    l.isShown = false;
    r.isShown = false;
    hideEvent.trigger();
  };

  const reset = () => {
    hand.value = initHand();
  };

  return {
    hand: readonly(hand),
    show,
    hide,
    reset,
    onShow: showEvent.on,
    onHide: hideEvent.on,
  };
};
