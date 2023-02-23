import { Product, ProductCardProps } from "../interfaces/products";
import { StorageKeys, setStorageData } from "./storage";

export const addToCart = (params: ProductCardProps): void => {
  var { product, cart, setCart } = params;
  const existingProduct = cart.find((p: Product) => p.id === product.id);
  if (existingProduct) {
    // Increment quantity if product already in cart
    setCart(
      cart.map((p: Product) =>
        p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
      )
    );
  } else {
    // Add new product to cart
    setCart([...cart, { ...product, quantity: 1 }]);
  }
};

export const removeFromCart = (params: ProductCardProps) => {
  var { product, cart, setCart } = params;
  const existingProduct = cart.find((p: Product) => p.id === product.id);
  if (existingProduct) {
    if (existingProduct.quantity > 1) {
      // Decrement quantity if more than 1 of product in cart
      setCart(
        cart.map((p: Product) =>
          p.id === product.id ? { ...p, quantity: p.quantity - 1 } : p
        )
      );
    } else {
      // Remove product from cart if only 1 of product in cart
      setCart(cart.filter((p: Product) => p.id !== product.id));
    }
    setStorageData(StorageKeys.products, JSON.stringify(cart));
  }
};
