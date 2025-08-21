export type Interaction =
  | { type: 'addToCart'; selectedProductIds: number[] }
  | { type: 'applyDiscountCode'; code: string };
