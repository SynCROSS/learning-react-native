export type ColorName =
  | 'Gray97'
  | 'White Smoke'
  | 'Pale Spring Bud'
  | 'Sage'
  | 'Forest Green Traditional';

export type ColorValue =
  | '#F7F7F7'
  | '#EFEFEF'
  | '#D0D6B3'
  | '#AAAE7F'
  | '#143109';

const colors: Map<ColorName, ColorValue> = new Map()
  .set('Gray97', '#F7F7F7')
  .set('White Smoke', '#EFEFEF')
  .set('Pale Spring Bud', '#D0D6B3')
  .set('Sage', '#AAAE7F')
  .set('Forest Green Traditional', '#143109');

export const GRAY_97 = colors.get('Gray97');
export const WHITE_SMOKE = colors.get('White Smoke');
export const PALE_SPRING_BUD = colors.get('Pale Spring Bud');
export const SAGE = colors.get('Sage');
export const FOREST_GREEN_TRADITIONAL = colors.get('Forest Green Traditional');
