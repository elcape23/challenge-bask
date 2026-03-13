export type PrototypeCartItem = {
  productSlug: string;
  heading: string;
  description: string;
  dosageLabel?: string;
  subtotalPrice: string;
  discountAmount?: string;
  finalPrice: string;
  imageSrc: string;
  imageAlt: string;
  quantity: number;
  savingsText?: string;
};

let prototypeCartItem: PrototypeCartItem | null = null;

export function getPrototypeCartItem() {
  return prototypeCartItem;
}

export function setPrototypeCartItem(item: PrototypeCartItem) {
  prototypeCartItem = item;
}

export function getPrototypeCartCount() {
  return prototypeCartItem?.quantity ?? 0;
}
