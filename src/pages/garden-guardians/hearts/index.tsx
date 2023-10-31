import Header from "@/components/Home/Header/Header";
import HomeProductsRender from "@/components/Home/HomeProducts/HomeProductsRender";
import { MontserratAlternates } from "@/pages/_app";

export default function hearts(){
    return(
        <div className="flex flex-col gap-20 bg-black ">
            <header>
                <Header />
            </header>
            <section className="bg-white">        
                <section className="flex flex-col gap-1 p-10 justify-center items-start h-40">
                    <h1 className={`text-black ${MontserratAlternates.variable} font-montserrat_alternate text-4xl`}>
                        Produtos que você curtiu!
                    </h1>
                    <hr className="bg-palette-mediumgreen h-1 w-40" />
                </section>

                <HomeProductsRender />
            </section>
        </div>
    )
}