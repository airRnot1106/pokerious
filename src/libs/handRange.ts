import type {
  ActionNumber,
  DeepReadonly,
  Entries,
  HandRangeTable,
  Pair,
  PlayingCardProperties,
  PositionNumber,
  PositionProperties,
} from '@/types/type';

/*
Action

{
  0: 'fold';
  1: 'check';
  2: 'call';
  3: 'bet';
  4: 'raise';
  5: 'allIn';
};

*/

export const HAND_RANGE_TABLES_OP = {
  2: [
    // AK  Q  J  T  9  8  7  6  5  4  3  2
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0], // A
    [4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0], // K
    [4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0], // Q
    [4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0], // J
    [4, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0, 0, 0], // T
    [0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0], // 9
    [0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0], // 8
    [0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0], // 7
    [0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0], // 6
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 5
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 4
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 3
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 2
  ],
  3: [
    // AK  Q  J  T  9  8  7  6  5  4  3  2
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], // A
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0], // K
    [4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0], // Q
    [4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0], // J
    [4, 4, 0, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0], // T
    [0, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0, 0], // 9
    [0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0], // 8
    [0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0], // 7
    [0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0], // 6
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0], // 5
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 4
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 3
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 2
  ],
  4: [
    // AK  Q  J  T  9  8  7  6  5  4  3  2
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], // A
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0], // K
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0], // Q
    [4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0], // J
    [4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0], // T
    [4, 4, 0, 0, 4, 4, 4, 4, 0, 0, 0, 0, 0], // 9
    [4, 0, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0], // 8
    [0, 0, 0, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0], // 7
    [0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 0, 0, 0], // 6
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0], // 5
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0], // 4
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 3
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 2
  ],
  5: [
    // AK  Q  J  T  9  8  7  6  5  4  3  2
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], // A
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], // K
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0], // Q
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0], // J
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0], // T
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0], // 9
    [4, 4, 0, 0, 4, 4, 4, 4, 4, 0, 0, 0, 0], // 8
    [4, 0, 0, 0, 0, 0, 0, 4, 4, 4, 0, 0, 0], // 7
    [4, 0, 0, 0, 0, 0, 0, 0, 4, 4, 0, 0, 0], // 6
    [4, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 0, 0], // 5
    [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0], // 4
    [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0], // 3
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 2
  ],
  0: [
    // AK  Q  J  T  9  8  7  6  5  4  3  2
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], // A
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], // K
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0], // Q
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0], // J
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 0, 0], // T
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0], // 9
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0], // 8
    [4, 4, 0, 0, 0, 0, 0, 4, 4, 4, 4, 0, 0], // 7
    [4, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 0, 0], // 6
    [4, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 0], // 5
    [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0], // 4
    [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0], // 3
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4], // 2
  ],
  1: [
    // AK  Q  J  T  9  8  7  6  5  4  3  2
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], // A
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], // K
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1], // Q
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1], // J
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1], // T
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1], // 9
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1], // 8
    [4, 4, 1, 1, 1, 1, 1, 4, 4, 4, 4, 1, 1], // 7
    [4, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 1, 1], // 6
    [4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 1], // 5
    [4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1], // 4
    [4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1], // 3
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4], // 2
  ],
} as const satisfies Record<PositionNumber, DeepReadonly<HandRangeTable>>;

const rankToTableIndex = {
  14: 0,
  13: 1,
  12: 2,
  11: 3,
  10: 4,
  9: 5,
  8: 6,
  7: 7,
  6: 8,
  5: 9,
  4: 10,
  3: 11,
  2: 12,
} as const;

export const isGtoHandRange = (
  position: PositionProperties,
  hand: Readonly<Pair<PlayingCardProperties>>,
  actions: Readonly<ActionNumber[]>
) => {
  const { position: positionNumber } = position;
  const lastAction = actions.at(-1);

  if (lastAction === undefined) return null;

  const [lCard, rCard] = hand;

  const isSuited = lCard.suit === rCard.suit;

  const [row, col] = [lCard.rank, rCard.rank]
    .sort((a, b) => {
      if (a > b) return isSuited ? -1 : 1;
      if (a < b) return isSuited ? 1 : -1;
      return 0;
    })
    .map((rank) => rankToTableIndex[rank]) as Pair<
    Entries<typeof rankToTableIndex>[1]
  >;

  const gtoAction = HAND_RANGE_TABLES_OP[positionNumber][row][col];

  return {
    isCorrect: gtoAction === lastAction,
    gtoAction,
    yourAction: lastAction,
  };
};
