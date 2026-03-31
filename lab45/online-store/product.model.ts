export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;     // KZT
  rating: number;    // 1..5 (decimals ok)
  image: string;     // URL or local path
  images: string[]
}