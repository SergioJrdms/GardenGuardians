import { IconHeart, IconSearch, IconShoppingBag, IconUser } from "@tabler/icons-react";

export default function UserMenu(){
    return(
        <div className="flex items-center justify-end gap-4">
                <IconSearch className="w-7 h-10 hover:text-zinc-200 duration-300 cursor-pointer "/>
                <IconUser className="w-7 h-10 hover:text-zinc-200 duration-300 cursor-pointer"/>
                <IconHeart className="w-7 h-10 hover:text-zinc-200 duration-300 cursor-pointer"/>
                <IconShoppingBag className="w-7 h-10 hover:text-zinc-200 duration-300 cursor-pointer"/>
        </div>
    )
}