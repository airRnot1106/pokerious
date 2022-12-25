import type {
  NumberToRank,
  NumberToSuit,
  PlayingCardImage,
  PlayingCardProperties,
  RankNumber,
  Result,
  SuitNumber,
} from '@/types/type';

export const numberToSuit = {
  0: 'clubs',
  1: 'diamonds',
  2: 'hearts',
  3: 'spades',
} as const satisfies Readonly<NumberToSuit>;

const suitNumbers = [0, 1, 2, 3] as const satisfies Readonly<SuitNumber[]>;

export const numberToRank = {
  2: '2',
  3: '3',
  4: '4',
  5: '5',
  6: '6',
  7: '7',
  8: '8',
  9: '9',
  10: 'T',
  11: 'J',
  12: 'Q',
  13: 'K',
  14: 'A',
} as const satisfies Readonly<NumberToRank>;

const rankNumbers = [
  2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
] as const satisfies Readonly<RankNumber[]>;

class PlayingCard {
  private _suit: SuitNumber;
  private _rank: RankNumber;
  private _image: PlayingCardImage;
  private _isShown: boolean;

  constructor(suit: SuitNumber, rank: RankNumber) {
    this._suit = suit;
    this._rank = rank;
    this._image = `playing_cards/image_${numberToSuit[suit]}_${numberToRank[rank]}.png`;
    this._isShown = false;
  }

  get properties() {
    return {
      suit: this._suit,
      rank: this._rank,
      image: this._image,
      isShown: this._isShown,
    } satisfies PlayingCardProperties;
  }
}

export const dummyCard = new PlayingCard(0, 2);

type DeckOptions = {
  shuffle?: boolean;
};

const defaultDeckOptions = {
  shuffle: false,
} as const satisfies Readonly<DeckOptions>;

export class Deck {
  private _deck: PlayingCard[];
  private _remaining: number;

  constructor(options?: DeckOptions) {
    const { shuffle } = { ...defaultDeckOptions, ...options };

    this._deck = [];
    for (const suit of [...suitNumbers].reverse()) {
      for (const rank of [...rankNumbers].reverse()) {
        this._deck.push(new PlayingCard(suit, rank));
      }
    }

    if (shuffle) this.shuffle();

    this._remaining = this._deck.length;
  }

  shuffle() {
    for (let i = this._deck.length; i > 1; i--) {
      const k = Math.floor(Math.random() * i);
      // @ts-expect-error - It is guaranteed that the card is not undefined.
      [this._deck[k], this._deck[i - 1]] = [this._deck[i - 1], this._deck[k]];
    }
  }

  draw(): Result<{
    card: PlayingCardProperties;
    remaining: number;
  }> {
    const card = this._deck.pop();
    this._remaining -= 1;
    return card
      ? {
          success: true,
          data: {
            card: card.properties,
            remaining: this._remaining,
          },
        }
      : {
          success: false,
          data: null,
        };
  }
}
