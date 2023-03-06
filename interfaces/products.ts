export interface Product {
  id: number;
  image: Image;
  name: string;
  content: Product;
  unit: string;
  category: Category;
  origin: string;
  price: number;
  quantity?: number;
}
interface Image {
  filename: string;
}
interface Category {
  name: string;
}
