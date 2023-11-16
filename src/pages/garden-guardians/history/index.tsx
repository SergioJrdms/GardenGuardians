import Header from "@/components/Home/Header/Header";
import { Montserrat2, MontserratAlternates } from "@/pages/_app";
import { useEffect, useState } from "react";

export default function history() {
    const [mostrarComponente, setMostrarComponente] = useState(false);

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
        <div className="overflow-y-hidden ">
            {mostrarComponente && (
                <section className="bg-zinc-100  w-full h-[100vh]  ">
                    <p>Conteúdo do componente aqui</p>
                </section>
            )}
            <div
                className={`
                bg-[url('https://images.unsplash.com/photo-1552152974-19b9caf99137?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjBwbGFudHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80')] 
                bg-no-repeat bg-cover h-screen bg-fixed
                flex items-center 
            `}>
                <div><Header /></div>
                <div className="flex flex-col p-40 gap-7">
                    <p
                        className={`
                        font-montserrat_alternate text-3xl select-none ${Montserrat2.variable}
                        duration-1000 transition-all opacity-0 
                    `}
                        data-replace='{ "opacity-0": "opacity-1" }'
                    >
                        Saiba mais sobre os GardenGuardians
                    </p>
                    <h1
                        className={`
                        font-montserrat_alternate  text-8xl select-none ${MontserratAlternates.variable}
                        duration-1000 relative transform transition-all translate-x-[-100%] ease-out
                    `}
                        data-replace='{ "translate-x-[-100%]": "translate-x-0" }'
                    >
                        Descubra a nossa <br></br> <span className="text-palette-lightgreen">História</span>!
                    </h1>
                    <button
                        className={`
                        group
                        flex  items-center justify-center space-x-20 
                      bg-palette-light mt-5 text-palette-dark text-xl rounded-sm p-2 w-72 h-14 font-bold hover:bg-palette-lightgreen  
                        duration-300 hover:text-white tracking-tight hover:tracking-wide
                        relative transform transition-all translate-y-[-100%] ease-out    
                    `}
                        data-replace='{ "translate-y-[-100%]": "translate-y-0" }'

                        onClick={() => setMostrarComponente(!mostrarComponente)}

                    >

                        <p>Clica aqui pra ver!</p>
                    </button>

                </div>
            </div>
        </div>
    )
}