import type { Ref as VueRef } from 'vue';

/* Utils */

export type Ref<T> = VueRef<T>;

export type Pair<T> = [T, T];

export type Entries<T extends Object> = {
  [K in keyof T]: [K, T[K]];
}[keyof T];

type Success<T> = {
  success: true;
  data: T;
};

type Failure = {
  success: false;
  data: null;
};

export type Result<T> = Success<T> | Failure;

/* Playing Card */

export type NumberToSuit = {
  0: 'clubs';
  1: 'diamonds';
  2: 'hearts';
  3: 'spades';
};

export type SuitNumber = Entries<NumberToSuit>[0];

export type SuitString = Entries<NumberToSuit>[1];

export type NumberToRank = {
  2: '2';
  3: '3';
  4: '4';
  5: '5';
  6: '6';
  7: '7';
  8: '8';
  9: '9';
  10: 'T';
  11: 'J';
  12: 'Q';
  13: 'K';
  14: 'A';
};

export type RankNumber = Entries<NumberToRank>[0];

export type RankString = Entries<NumberToRank>[1];

export type PlayingCardImage =
  `playing_cards/image_${SuitString}_${RankString}.png`;

export type PlayingCardProperties = {
  suit: SuitNumber;
  rank: RankNumber;
  image: PlayingCardImage;
  isShown: boolean;
};

/* Position */

export type NumberToPosition = {
  0: 'sb';
  1: 'bb';
  2: 'utg';
  3: 'hj';
  4: 'co';
  5: 'btn';
};

export type PositionNumber = Entries<NumberToPosition>[0];

export type PositionString = Entries<NumberToPosition>[1];

export type PositionImage =
  `position_field/image_position_field_${PositionString}.png`;

export type PositionProperties = {
  position: PositionNumber;
  image: PositionImage;
};
