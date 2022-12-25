import type {
  NumberToPosition,
  PositionImage,
  PositionNumber,
  PositionProperties,
} from '@/types/type';

export const numberToPosition = {
  0: 'sb',
  1: 'bb',
  2: 'utg',
  3: 'hj',
  4: 'co',
  5: 'btn',
} as const satisfies Readonly<NumberToPosition>;

export class Position {
  private _position: PositionNumber;
  private _image: PositionImage;

  constructor(position?: PositionNumber) {
    this._position =
      position ?? (Math.floor(Math.random() * 6) as PositionNumber);
    this._image = `position_field/image_position_field_${
      numberToPosition[this._position]
    }.png`;
  }

  get properties() {
    return {
      position: this._position,
      image: this._image,
    } as const satisfies Readonly<PositionProperties>;
  }
}
