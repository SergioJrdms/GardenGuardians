import { IconPlant2 } from "@tabler/icons-react";
import Link from "next/link";
import { Montserrat_Alternates } from "@next/font/google";
import HeaderMenu from "./HeaderMenu";
import UserMenu from "./UserMenu";


const montserrat = Montserrat_Alternates({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: '700'
})


export default function Header(){
    return(
        <header className="grid grid-cols-3 p-11 bg-transparent text-palette-light h-24 ">
            <p className={`flex flex-row items-center gap-2 text-2xl font-black font-montserrat_alternate ${montserrat.variable}`}>
                <IconPlant2 className="w-9 h-10" /> <Link href={'/'} className="hover:text-palette-lightgreen duration-300"> GardenGuardians </Link>
            </p>
            <HeaderMenu />
            <UserMenu />
        </header>
    )
}