import { Montserrat2 } from "@/pages/_app";
import { IconAlertSquare, IconHome2, IconShoppingCart } from "@tabler/icons-react";
import Link from "next/link";

export default function HeaderMenu() {
    return (

        <div className={`flex justify-center p-2 gap-16  font-montserrat_alternate text-xl select-none  ${Montserrat2.variable}`}>
            <Link
                href={'./home'}
                className={`
                    group flex flex-row items-center gap-3
                    hover:text-zinc-300 duration-300 tracking-tight 
                    hover:tracking-wide 
                `}>
                <div className="text-transparent group-hover:text-zinc-300 group-hover:translate-x-2 duration-300 ">
                    <IconHome2 />
                </div>
                <p>Home</p>
            </Link>
            <Link
                href={'./shop'}
                className={`
                    group flex flex-row items-center gap-3
                  hover:text-zinc-300 duration-300 tracking-tight 
                    hover:tracking-wide 
                `}>
                <div className="text-transparent group-hover:text-zinc-300 group-hover:translate-x-2 duration-300 ">
                    <IconShoppingCart />
                </div>
                <p>Shop</p>
            </Link>
            <Link href={'./novo'} className={`
                    group flex flex-row items-center gap-3
                  hover:text-zinc-300 duration-300 tracking-tight 
                    hover:tracking-wide 
                `}>
                <div className="text-transparent group-hover:text-zinc-300 group-hover:translate-x-2 duration-300 ">
                    <IconAlertSquare />
                </div>
                <p>Novo</p>
                <span className="relative flex h-3 w-3 float-right">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                </span>
            </Link>
        </div>
    )
}