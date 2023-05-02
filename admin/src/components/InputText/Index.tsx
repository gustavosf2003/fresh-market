import clsx from "clsx";
import { PropsWithChildren, forwardRef } from "react";

interface InputProps extends PropsWithChildren<JSX.IntrinsicElements["input"]> {
  className?: string;
  label: string;
  error: string;
}
export const InputText = forwardRef<HTMLInputElement, InputProps>(
  ({ label, className, error, ...rest }, ref) => {
    return (
      <>
        <label htmlFor={label} className="flex flex-col">
          {label}
          <input
            ref={ref}
            id={label}
            className={clsx("p-2 border border-gray-500", className)}
            {...rest}
          />
        </label>
        {error && <p className="text-sm text-red-500">{error}</p>}
      </>
    );
  }
);
