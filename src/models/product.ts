interface Variation {
  name: string;
  sku: string;
  price: number;
}

export interface Product {
  id: number;
  name: string;
  sku: string;
  brand: string;
  description: string;
  variations: Variation[];
}
