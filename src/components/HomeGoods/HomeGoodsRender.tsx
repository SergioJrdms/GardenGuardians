import { useCallback, useEffect, useState } from "react";
import HomeGoods from "@/components/HomeGoods/HomeGoods";
import { MontserratAlternates } from "@/pages/_app";


export default function HomeGoodsRender(){
    const [txtVisible, setTxtVisible] = useState(false);

    const handleScroll = useCallback(function (){
        const scrollY = window.scrollY;
        const txt = document.getElementById('animacao-txt');

        if (txt && scrollY >= txt.offsetTop - window.innerHeight / 2) {
            setTxtVisible(true);
        }
    }, [])
        
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);
    
    return(
        <section className="bg-palette-light pl-10 pt-10">
            <h1 id="animacao-txt" 
            className={`
              text-black ${MontserratAlternates.variable} font-montserrat_alternate text-4xl 
                duration-700 relative transform transition-all translate-x-[-100%] ease-out
                ${txtVisible ? 'translate-x-[0%]' : 'translate-x-0'}
            `}>
                Nossas Principais Mercadorias
            </h1>
            <HomeGoods />
      </section>
    )
}