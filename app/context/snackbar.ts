import { createContext } from "react";

interface ProductContextTypes {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
}

export const SnackBarContext = createContext<ProductContextTypes>({
  title: "",
  setTitle: () => {},
});
