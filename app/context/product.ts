import { createContext } from "react";

import { Product } from "@app/interfaces/products";
interface ProductContextTypes {
  savedProducts: Product[];
  setSavedProducts: React.Dispatch<React.SetStateAction<never[]>>;
}

export const ProductContext = createContext<ProductContextTypes>({
  savedProducts: [],
  setSavedProducts: () => {},
});
