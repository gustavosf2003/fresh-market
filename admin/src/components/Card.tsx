import { useRef, useState, useEffect, forwardRef } from "react";
import { MoreVertical, Trash2, Edit } from "react-feather";
import clsx from "clsx";
import useOnClickOutside from "@/hooks/useOnClickOutside";
  
export const colorCombos = {
  0: "border-l-primary",
  1: "border-l-blue-500",
  2: "border-l-yellow-500",
  3: "border-l-red-500",
};

interface CardProps {
  listPosition?: number;
  name?: string;
  createdAt?: string;
  colorId?: number;
  address?: string;
}

export default function Card({ ...props }: CardProps) {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(menuRef, () => setShowMenu(false));
  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div
      onClick={handleMenuClick}
      className={clsx(
        "px-4 py-3.5 flex justify-between relative items-center bg-white border-l-4 rounded-sm shadow-sm",
        colorCombos[props.colorId] || colorCombos[0]
      )}
    >
      <div>
        <p className="text-sm font-medium">{props.name}</p>
        <p className="text-xs text-gray-500">{props.createdAt}</p>
      </div>
      <MoreVertical height={20} width={20} />
      {showMenu && (
        <CardMenu
          ref={menuRef}
          listPosition={props.listPosition + 1}
          close={() => setShowMenu(false)}
        />
      )}
    </div>
  );
}
const CardMenu = forwardRef<
  HTMLDivElement,
  { close: () => void; listPosition?: number }
>(function CardMenu({ close, listPosition }, ref) {
  return (
    <div
      className={clsx(
        "absolute z-10 w-40 bg-white rounded-sm shadow-lg ",
        listPosition % 3 === 0 ? "right-0 top-full" : "-top-2 left-full  mt-2"
      )}
      ref={ref}
    >
      <div className="py-1">
        <div
          className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100"
          onClick={close}
        >
          <Edit className="stroke-yellow-500" width={16} />
          <p className="ml-2 text-sm text-yellow-500">Edit</p>
        </div>
        <div
          className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100"
          onClick={close}
        >
          <Trash2 className="stroke-red-500" width={16} />
          <p className="ml-2 text-sm text-red-500">Delete</p>
        </div>
      </div>
    </div>
  );
});
