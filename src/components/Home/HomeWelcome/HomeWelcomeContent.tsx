import { Montserrat2, MontserratAlternates } from "@/pages/_app";
import { IconShoppingCart } from "@tabler/icons-react";
import Link from "next/link";
import { useEffect } from 'react';


export default function HomeWelcomeContent() {
    useEffect(() => {
        const replacers = document.querySelectorAll('[data-replace]');
        for (let i = 0; i < replacers.length; i++) {
            const replaceClasses = JSON.parse(replacers[i].getAttribute('data-replace')!.replace(/'/g, '"'));
            Object.keys(replaceClasses).forEach((key) => {
                replacers[i].classList.remove(key);
                replacers[i].classList.add(replaceClasses[key]);
            });
        }
    }, []);

    return (
        <div className="flex flex-col p-40 gap-7">
            <p
                className={`
                        font-montserrat_alternate text-3xl select-none ${Montserrat2.variable}
                        duration-1000 transition-all opacity-0 
                    `}
                data-replace='{ "opacity-0": "opacity-1" }'
            >
                Descubra a beleza das Plantas!
            </p>
            <h1
                className={`
                        font-montserrat_alternate  text-8xl select-none ${MontserratAlternates.variable}
                        duration-1000 relative transform transition-all translate-x-[-100%] ease-out
                    `}
                data-replace='{ "translate-x-[-100%]": "translate-x-0" }'
            >
                As <span className="text-palette-lightgreen">melhores</span> opções <br></br> para o seu <span className="text-palette-lightgreen">Jardim</span>!
            </h1>
            <Link href={'./shop'}>
                <button
                    className={`
                        group
                        flex  items-center space-x-20 
                      bg-palette-light mt-5 text-palette-dark text-xl rounded-sm p-2 w-72 h-14 font-bold hover:bg-palette-lightgreen  
                        duration-300 hover:text-white tracking-tight hover:tracking-wide
                        relative transform transition-all translate-y-[-100%] ease-out    
                    `}
                    data-replace='{ "translate-y-[-100%]": "translate-y-0" }'

                >
                    <div className="text-white group-hover:translate-x-20 duration-300">
                        <IconShoppingCart />
                    </div>
                    <p>Comprar!</p>
                </button>
            </Link>
        </div>
    )
}




