import GoodsCards from "./GoodsCards";
import { useCallback, useEffect, useState } from "react";

export default function HomeGoods() {
    const [isVisible, setIsVisible] = useState(false);

    const handleScrollCard = useCallback(function () {
        const scrollY = window.scrollY;
        const element = document.getElementById('animacao-card');

        if (element && scrollY >= element.offsetTop - window.innerHeight / 2) {
            setIsVisible(true);
        }
    }, []);

    // Esta parte é adicionada para definir o estado inicial com base na posição da página ao carregar
    useEffect(() => {
        handleScrollCard(); // Verifica a posição da página ao carregar
        window.addEventListener('scroll', handleScrollCard);

        return () => {
            window.removeEventListener('scroll', handleScrollCard);
        };
    }, [handleScrollCard]);

    return (
        <div className="p-10">
            <div className="flex flex-row justify-center items-center gap-10">
                <span
                    id="animacao-card"
                    className={`
                        duration-500 relative transform transition-all translate-y-0 ease-out
                        ${isVisible ? 'translate-y-0' : 'translate-y-[100%]'}
                `}>
                    <GoodsCards name={"Plantas"} />
                </span>
                <span
                    id="animacao-card-2"
                    className={`
                        duration-700 relative transform transition-all translate-y-0 ease-out
                        ${isVisible ? 'translate-y-0' : 'translate-y-[100%]'}
                `}>
                    <GoodsCards name={"Equipamentos"} />
                </span>
                <span
                    id="animacao-card-3"
                    className={`
                        duration-1000 relative transform transition-all translate-y-0 ease-out
                        ${isVisible ? 'translate-y-0' : 'translate-y-[100%]'}
                `}>
                    <GoodsCards name={"Variados"} />
                </span>
            </div>
        </div>
    )
}
