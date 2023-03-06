export interface Product {
  id: number;
  image: Image;
  name: string;
  content: Product;
  category: Category;
  origin: string;
  price: number;
  quantity?: number;
}
interface Image {
  __typename: string;
  filename: string;
}
interface Category {
  name: string;
}
