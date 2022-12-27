import type { NumberToAction } from '@/types/type';

export const numberToAction = {
  0: 'fold',
  1: 'check',
  2: 'call',
  3: 'bet',
  4: 'raise',
  5: 'allIn',
} as const satisfies NumberToAction;
