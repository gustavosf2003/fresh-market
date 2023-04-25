import { Product } from "../interfaces/products";
import { ProductCardProps } from "@app/src/components/ProductCard";
import { StorageKeys, setStorageData } from "./storage";

export const addToCart = (params: ProductCardProps): void => {
  var { product, savedProducts, setSavedProducts } = params;
  const existingProduct = savedProducts.find(
    (p: Product) => p.id === product.id
  );
  if (existingProduct) {
    // Increment quantity if product already in cart
    setSavedProducts((savedProducts: Product[]) =>
      savedProducts.map((p: Product) =>
        p.id === product.id ? { ...p, quantity: p.quantity! + 1 } : p
      )
    );
  } else {
    // Add new product to cart
    setSavedProducts([...savedProducts, { ...product, quantity: 1 }]);
  }
};

export const removeFromCart = (params: ProductCardProps) => {
  var { product, savedProducts, setSavedProducts } = params;

  const existingProduct = savedProducts.find(
    (p: Product) => p.id === product.id
  );
  if (existingProduct) {
    if (existingProduct.quantity! > 1) {
      // Decrement quantity if more than 1 of product in cart
      setSavedProducts(
        savedProducts.map((p: Product) =>
          p.id === product.id ? { ...p, quantity: p.quantity! - 1 } : p
        )
      );
    } else {
      // Remove product from cart if only 1 of product in cart
      setSavedProducts((savedProducts: Product[]) =>
        savedProducts.filter((p: Product) => p.id !== product.id)
      );
    }
    setStorageData(StorageKeys.products, JSON.stringify(savedProducts));
  }
};

export function totalProducts(products: Product[]) {
  return products.reduce(
    (acc: number, curr: Product) => acc + (curr.quantity || 0),
    0
  );
}
