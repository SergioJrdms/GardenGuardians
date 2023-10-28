import { IconPlant2 } from "@tabler/icons-react";
import Link from "next/link";
import HeaderMenu from "./HeaderMenu";
import UserMenu from "./UserMenu";
import { useState, useEffect } from 'react';
import { montserrat } from "@/pages/_app";

export default function Header(){
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
  
    const headerClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolling ? 'bg-black' : 'bg-transparent'
    }`;
    
    return(
        <header className={` ${headerClasses} grid grid-cols-3 p-7 bg-transparent text-palette-light h-24`}>
            <p className={`flex flex-row items-center gap-2 text-2xl font-black font-montserrat_alternate ${montserrat.variable}`}>
                <IconPlant2 className="w-9 h-10" /> <Link href={'/'} className="hover:text-palette-lightgreen duration-300"> GardenGuardians </Link>
            </p>
            <HeaderMenu />
            <UserMenu />
        </header>
    )
}