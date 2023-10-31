import { IconHeart, IconSearch, IconShoppingBag, IconUser } from "@tabler/icons-react";
import Link from "next/link";

export default function UserMenu(){
    return(
        <div className="flex items-center justify-end gap-4">
                <IconSearch className="w-7 h-10 hover:text-palette-lightgreen duration-300 cursor-pointer "/>
                <Link href={"./login"}>
                    <IconUser className="w-7 h-10 hover:text-palette-lightgreen duration-300 cursor-pointer"/>
                </Link>
                <Link href={"./hearts"}>
                    <IconHeart className="w-7 h-10  hover:text-palette-lightgreen duration-300 cursor-pointer"/>
                </Link>
                <IconShoppingBag className="w-7 h-10 hover:hover:text-palette-lightgreen duration-300 cursor-pointer"/>
        </div>
    )
}