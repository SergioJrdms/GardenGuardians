import { IconChevronRight } from "@tabler/icons-react";
import Header from "../../Home/Header/Header";
import { Montserrat2, MontserratAlternates } from "@/pages/_app";
import Link from "next/link";

export default function ProductsHeader(){
    return(
        <div className={`
            flex flex-col gap-20 p-10
          bg-black bg-no-repeat bg-cover h-24 bg-fixed
        `}>
            <header>
                <Header />
            </header>

            <p className={`flex flex-row gap-2 text-lg text-black font-montserrat_alternate ${Montserrat2.variable}`}>
                <Link href={'./'}>
                    <span className="cursor-pointer hover:text-zinc-700 duration-300">Shop</span>
                </Link>
                <IconChevronRight className="w-10 h-7"/> 
                Produtos
            </p>
        </div>
    )
}