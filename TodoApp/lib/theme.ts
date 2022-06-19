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

const colors: Record<ColorName, ColorValue> = {
  Gray97: '#F7F7F7',
  'White Smoke': '#EFEFEF',
  'Pale Spring Bud': '#D0D6B3',
  Sage: '#AAAE7F',
  'Forest Green Traditional': '#143109',
};

export const GRAY_97 = colors.Gray97;
export const WHITE_SMOKE = colors['White Smoke'];
export const PALE_SPRING_BUD = colors['Pale Spring Bud'];
export const SAGE = colors.Sage;
export const FOREST_GREEN_TRADITIONAL = colors['Forest Green Traditional'];
