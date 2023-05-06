import { SideMenu } from "@/components/SideMenu";
import useAuth from "@/hooks/useAuth";

export default function Layout({ children }) {
  useAuth();
  return (
    <div className="relative flex">
      <SideMenu />
      <div className="bg-gray-100 min-h-screen w-full p-8 flex flex-col gap-8 ml-[248px]">
        {children}
      </div>
    </div>
  );
}
