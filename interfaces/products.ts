export interface Product {
  id: number;
  image: string;
  name: string;
  origin: string;
  price: number;
  quantity: number;
}
export interface ProductCardProps {
  cart: Array<Product>;
  setCart: React.Dispatch<React.SetStateAction<any>>;
  product: any;
}
