import clsx from "clsx";
import { ComponentPropsWithoutRef } from "react";
import Spinner from "../Spinner";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  loading?: boolean;
  styledClassName?: string;
}

export const Button = ({
  children,
  loading,
  disabled,
  styledClassName,
  ...rest
}: ButtonProps) => {
  return (
    <button
      {...rest}
      disabled={disabled || loading}
      className={clsx(
        "p-2 font-medium flex text-md items-center justify-center text-primaryWhite disabled:opacity-40 disabled:cursor-not-allowed bg-primary",
        styledClassName
      )}
    >
      {loading ? <Spinner /> : children}
    </button>
  );
};
