import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { RoutesName } from "@/config/routes";
import { StorageKeys } from "@/config/constants";

const menuItems = [
  { label: "Dashboard", href: "/" },
  { label: "Users", href: "/users" },
  { label: "Orders", href: "/orders" },
];

export const SideMenu = () => {
  const [menuOpen, triggerMenu] = useState(false);
  return (
    <nav className="fixed left-0 top-0 flex min-h-screen w-[248px] flex-shrink-0 flex-col bg-gray-800 py-4">
      <div className="flex flex-col flex-1 gap-6 px-2 py-2">
        <span className="px-2">
          <h1 className="text-primary font-[Caveat] text-4xl">Fresh Market</h1>
        </span>
        {menuItems.map((item) => {
          return (
            <Link key={item.label} href={item.href}>
              <span className="flex items-center gap-3 p-2 pr-3 text-white rounded-md hover:bg-gray-900">
                <p>{item.label}</p>
              </span>
            </Link>
          );
        })}
      </div>
      <div
        className="px-4 pt-4 border-t cursor-pointer border-t-gray-900"
        onClick={() => triggerMenu(!menuOpen)}
      >
        {menuOpen && <MenuSidebar />}
        <span className="inline-flex gap-3">
          <Image
            className="rounded-full"
            width={36}
            height={36}
            src="/images/user.png"
            alt=""
          />
          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-50">
              Gustavo Ferreira
            </span>
            <span className="text-xs font-normal text-gray-400">
              View profile
            </span>
          </div>
        </span>
      </div>
    </nav>
  );
};
interface MenuProps {
  children?: React.ReactNode;
  className?: string;
}

export const MenuItem = ({ children }: MenuProps) => {
  return <li className="flex justify-between px-4 py-1.5 ">{children}</li>;
};
export const Menu = ({ children, className = "" }: MenuProps) => {
  return (
    <ul
      className={
        "absolute rounded-md shadow-lg cursor-pointer border z-10 " + className
      }
    >
      {children}
    </ul>
  );
};
export const MenuSidebar = () => {
  const router = useRouter();
  const logout = () => {
    localStorage.removeItem(StorageKeys.token);
    router.push(RoutesName.login);
  };
  return (
    <Menu className="bg-gray-800 text-white -mt-6 w-44 left-[252px]">
      <MenuItem>
        <Link href="/profile">Profile</Link>
      </MenuItem>
      <MenuItem>
        <button onClick={() => logout()}>Log out</button>
      </MenuItem>
    </Menu>
  );
};
