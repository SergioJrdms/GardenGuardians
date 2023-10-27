import { Montserrat } from "@next/font/google";
import Link from "next/link";

const montserrat2 = Montserrat({
    subsets: ["latin"],
    variable: "--font-montserrat",
    weight: '100'
  })

export default function HeaderMenu(){
    return(
        
        <div className={`flex justify-center gap-20 font-semibold font-montserrat_alternate text-lg  ${montserrat2.variable}`}>
                <Link href={'/'} className="hover:text-zinc-200 duration-300">Home</Link>
                <Link href={'/'} className="hover:text-zinc-200 duration-300">Shop</Link>
                <Link href={'/'} className="hover:text-zinc-200 duration-300">Novo</Link>
        </div>
    )
}