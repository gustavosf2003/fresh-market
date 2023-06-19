import type { ComponentPropsWithRef } from "react";
import clsx from "clsx";

export const SectionContainer = (
  props: ComponentPropsWithRef<"div"> & { className?: string }
) => (
  <div
    {...props}
    className={clsx(
      "flex flex-col bg-white border-2 border-gray-200 rounded-md shadow-sm",
      props.className
    )}
  />
);
