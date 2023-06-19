import { SideMenu } from "@/components/SideMenu";
import useAuth from "@/hooks/useAuth";
import clsx from "clsx";

export default function Layout({ children, className = "" }) {
  useAuth();
  return (
    <div className="relative flex">
      <SideMenu />
      <div
        className={clsx(
          "bg-gray-100 min-h-screen w-full p-8 flex flex-col gap-8 ml-[248px]",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}
