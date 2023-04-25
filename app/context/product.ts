import { Product } from "@app/interfaces/products";
import { createContext } from "react";
interface ProductContextTypes {
  savedProducts: Product[];
  setSavedProducts: React.Dispatch<React.SetStateAction<never[]>>;
}
export const ProductContext = createContext<ProductContextTypes>({
  savedProducts: [],
  setSavedProducts: () => {},
});
