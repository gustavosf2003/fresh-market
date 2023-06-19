import clsx from "clsx";
import { ComponentPropsWithoutRef } from "react";
import Spinner from "../Spinner";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  loading?: boolean;
}

export const Button = ({
  children,
  loading,
  disabled,
  className,
  ...rest
}: ButtonProps) => {
  return (
    <button
      disabled={disabled || loading}
      className={clsx(
        "px-4 py-2 font-medium gap-2.5 flex text-md items-center justify-center text-primaryWhite disabled:opacity-40 disabled:cursor-not-allowed bg-primary rounded-md",
        className
      )}
      {...rest}
    >
      {loading ? <Spinner /> : children}
    </button>
  );
};
