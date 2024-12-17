interface Size {
  width: number;
  height: number;
}

interface Product {
  id: number;
  imageUrl: string;
  name: string;
  count: number;
  size: Size;
  weight: string;
  comments: string[];
}

export type { Product };
