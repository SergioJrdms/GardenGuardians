import GoodsCards from "./GoodsCards";
import { useEffect, useState } from "react";


export default function HomeGoods(){
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
        <div className="p-10">
            <div className="grid grid-cols-3 gap-10">
                <span 
                    id="element-to-animate" 
                    className={`
                        duration-500 relative transform transition-all translate-y-[100%] ease-out
                        ${isVisible ? 'translate-y-[0]' : 'translate-y-0'}
                `}>
                    <GoodsCards name={"Plantas"}/>
                </span>
                <span id="element-to-animate" 
                    className={`
                        duration-700 relative transform transition-all translate-y-[100%] ease-out
                        ${isVisible ? 'translate-y-[0]' : 'translate-y-0'}
                `}>
                    <GoodsCards name={"Equipamentos"}/>
                </span>
                <span id="element-to-animate" 
                    className={`
                        duration-1000 relative transform transition-all translate-y-[100%] ease-out
                        ${isVisible ? 'translate-y-[0]' : 'translate-y-0'}
                `}>
                    <GoodsCards name={"Variados"}/>
                </span>
            </div>
        </div>
    )
}