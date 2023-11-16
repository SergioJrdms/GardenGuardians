import { Montserrat2 } from "@/pages/_app";
import Header from "../Home/Header/Header";

export default function PesquisaHeader() {
    return (
        <>
            <section className={`
                bg-[url('https://i.pinimg.com/originals/fc/36/fa/fc36fa7816fe1847b3dcbc352f227a0f.jpg')]
                bg-no-repeat bg-cover h-72 bg-fixed 
            `}>
                <Header />
                <div className="flex justify-center p-40 text-6xl">
                    <h1 className={`font-montserrat_alternate font-black ${Montserrat2.variable}`}>Pesquisar</h1>
                </div>
            </section>
        </>
    )
}