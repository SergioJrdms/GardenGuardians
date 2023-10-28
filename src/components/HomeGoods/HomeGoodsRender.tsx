import { useEffect, useState } from "react";
import HomeGoods from "@/components/HomeGoods/HomeGoods";
import { montserrat } from "@/pages/_app";


export default function HomeGoodsRender(){
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const scrollY = window.scrollY;
        const element = document.getElementById('element-to-animate');

        if (element && scrollY >= element.offsetTop - window.innerHeight / 2) {
        setIsVisible(true);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    return(
        <section className="bg-palette-light pl-10 pt-10">
            <h1 id="element-to-animate" 
            className={`
              text-black ${montserrat.variable} font-montserrat_alternate text-4xl 
                duration-700 relative transform transition-all translate-x-[-100%] ease-out
                ${isVisible ? 'translate-x-[0]' : 'translate-x-0'}
            `}>
                Nossas Principais Mercadorias
            </h1>
            <HomeGoods />
      </section>
    )
}