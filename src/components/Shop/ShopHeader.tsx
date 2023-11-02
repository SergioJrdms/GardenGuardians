import { Montserrat2, MontserratAlternates } from "@/pages/_app";
import Header from "../Home/Header/Header";
import { IconChevronRight } from "@tabler/icons-react";
import Link from "next/link";

export default function ShopHeader() {
    return (
        <div className={`
        flex flex-col gap-44
        bg-[url('https://i.pinimg.com/originals/fc/36/fa/fc36fa7816fe1847b3dcbc352f227a0f.jpg')]
        bg-no-repeat bg-cover h-96 bg-fixed
        shadow-2xl
    `}>
            <header>
                <Header />
            </header>

            <section className="flex flex-col items-center gap-4 text-palette-light">
                <h1 className={`font-montserrat_alternate text-7xl ${MontserratAlternates.variable}`}>
                    Produtos
                </h1>
                <p className={`flex flex-row items-center text-xl font-montserrat_alternate ${Montserrat2.variable}`}>
                    <Link href={'./home'} className="hover:text-palette-mediumlight duration-300">Home</Link> <IconChevronRight /> Shop
                </p>
            </section>
        </div>
    )
}