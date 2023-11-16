import Footer from "@/components/Home/Footer/Footer";
import PesquisaHeader from "@/components/Pesquisa/PesquisaHeader";
import { MontserratAlternates } from "@/pages/_app";

export default function pesquisa() {
    const handleSubmit = () => {
        null
    }
    return (
        <div>
            <header>
                <PesquisaHeader />
            </header>

            <section>
                <form action="post" className={`flex flex-row justify-center gap-2 mt-32`}>
                    <input
                        onSubmit={handleSubmit}
                        type="text"
                        name="pesquisa"
                        id="pesquisa"
                        className="w-[80%] rounded-md shadow-xl text-black p-3 focus:bg-zinc-100 duration-300"
                    />
                    <button className={`
                        font-montserrat_alternate ${MontserratAlternates.variable} rounded-md duration-300
                    bg-white text-black font-bold pl-2 pr-2 w-[10%] hover:bg-palette-lightgreen hover:text-white
                    `}>
                        Procurar
                    </button>
                </form>
            </section>
        </div>
    )
}