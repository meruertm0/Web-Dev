export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;      // KZT
  rating: number;     // 1..5
  image: string;      // main image
  images: string[];   // at least 3
  link: string;       // kaspi product page
}