import clsx from "clsx";
import { PropsWithChildren, forwardRef } from "react";

interface InputProps extends PropsWithChildren<JSX.IntrinsicElements["input"]> {
  className?: string;
  label: React.ReactNode | string;
  error: string;
}
export const InputText = forwardRef<HTMLInputElement, InputProps>(
  ({ label, className, error, ...rest }, ref) => {
    return (
      <>
        <div className="h-[82px]">
          <label className="flex flex-col text-sm font-medium text-gray-700">
            {label}
            <input
              ref={ref}
              className={clsx(
                "px-3 py-2 shadow-sm rounded-md border border-gray-300 disabled:opacity-50 disabled:pointer-events-none",
                className
              )}
              {...rest}
            />
          </label>
          {error && (
            <p
              className="text-sm font-medium text-red-500"
              role="alert"
              aria-live="assertive"
            >
              {error}
            </p>
          )}
        </div>
      </>
    );
  }
);
