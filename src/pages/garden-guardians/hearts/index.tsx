import Footer from "@/components/Home/Footer/Footer";
import Header from "@/components/Home/Header/Header";
import HomeProductsRender from "@/components/Home/HomeProducts/HomeProductsRender";
import { Montserrat2, MontserratAlternates } from "@/pages/_app";

export default function hearts() {
    return (
        <>
            <header className="">
                <div className={`
        flex flex-col gap-44
        bg-[url('https://images.unsplash.com/photo-1532024802178-20dbc87a312a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&h=500&q=60')]
        bg-no-repeat bg-cover h-96 bg-fixed
    `}>
                    <header>
                        <Header />
                    </header>

                    <section className="flex flex-col items-center gap-4 text-palette-light">
                        <h1 className={`
                            font-montserrat_alternate text-7xl ${MontserratAlternates.variable}`}>
                            Produtos que você curtiu!
                        </h1>
                        <p className={`
                    flex flex-row items-center text-xl font-montserrat_alternate ${Montserrat2.variable}
                    transform transition-all translate-y-[-100%] ease-out duration-500
                `}
                            data-replace='{ "translate-y-[-100%]": "translate-x-0" }'>
                        </p>
                    </section>
                </div>
            </header>
            <section className="bg-white pt-20">
                <section className="flex flex-col gap-1 p-10 justify-center items-start h-40">
                    <h1 className={`text-black ${MontserratAlternates.variable} font-montserrat_alternate text-4xl`}>
                        Que tal comprar?
                    </h1>
                    <hr className="bg-palette-mediumgreen h-1 w-40" />
                </section>

                <HomeProductsRender />
            </section>

            <footer className="bg-palette-mediumlight text-black">
                <Footer />
            </footer>
        </>
    )
}