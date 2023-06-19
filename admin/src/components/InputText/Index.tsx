import clsx from "clsx";
import { PropsWithChildren, forwardRef } from "react";

interface InputProps extends PropsWithChildren<JSX.IntrinsicElements["input"]> {
  className?: string;
  label?: React.ReactNode | string;
  error?: string;
  icon?: React.ReactNode;
}
export const InputText = forwardRef<HTMLInputElement, InputProps>(
  ({ label, className, icon, error, ...rest }, ref) => {
    return (
      <div>
        <label className="flex flex-col text-sm font-medium text-gray-700">
          {label}
          <div className="relative flex items-center">
            {icon && <div className="absolute left-0 pl-3">{icon}</div>}
            <input
              ref={ref}
              className={clsx(
                "shadow-sm rounded-md border border-gray-300 disabled:opacity-50 disabled:pointer-events-none w-full",
                icon ? "pl-8 pr-3 py-2 " : "px-3 py-2",
                className
              )}
              {...rest}
            />
          </div>
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
    );
  }
);
