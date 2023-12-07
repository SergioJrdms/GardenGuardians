import Footer from "@/components/Home/Footer/Footer";
import ProductQntd from "@/components/Shop/Products/ProductQntd";
import ProductsHeader from "@/components/Shop/Products/ProductsHeader";
import ProductsImgs from "@/components/Shop/Products/ProductsImgs";
import { Montserrat2 } from "@/pages/_app";
import { IconHeart } from "@tabler/icons-react";

export default function ProductPage() {
    return (
        <>
            <section>
                <ProductsHeader />
            </section>



            <section className="bg-white">
                <section className="flex flex-row p-32 ml-10 gap-40">
                    <ProductsImgs img={""} />
                    <div className="flex flex-col gap-12">
                        <div className="flex flex-row justify-between mr-3">
                            <div className="flex flex-col gap-4 text-2xl">
                                <p className={`text-black font-montserrat_alternate ${Montserrat2.variable} font-bold text-3xl`}>
                                    Nome - Produto
                                </p>
                                <p className={`flex flex-row gap-3 text-palette-mediumgreen font-montserrat_alternate ${Montserrat2.variable}`}>
                                    R$ 17 <span>BRL</span>
                                </p>
                            </div>
                            <span className={`
                                    flex justify-center items-center cursor-pointer
                                    text-black border border-zinc-600 rounded-full h-10 w-10
                                    hover:bg-palette-lightgreen hover:border-palette-lightgreen hover:text-white duration-300
                                `}>
                                <IconHeart className="w-5" />
                            </span>
                        </div>
                        <hr className="bg-palette-darkgreen h-[0.2vh] w-[60vh]" />
                        <div className="w-[60vh]">
                            <p className="text-zinc-600">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consectetur semper nibh, quis finibus augue interdum a. Integer eu euismod orci. Proin vel lobortis sem. Sed dignissim vel libero eget porttitor. Ut nec odio commodo, laoreet orci at, tincidunt sapien. Ut bibendum a ligula varius vehicula. Nullam consequat sapien in placerat rutrum. Donec et nisi feugiat, convallis ante et, tristique nunc.
                            </p>
                        </div>
                        <section className="flex flex-row gap-5">
                            <ProductQntd />
                            <div className="flex items-center">
                                <button className={`bg-palette-darkgreen hover:bg-palette-dark duration-300 h-16 rounded-md pl-10 pr-10 font-bold font-montserrat_alternate tracking-widest ${Montserrat2.variable}`}>
                                    Adicionar ao Carrinho
                                </button>
                            </div>
                        </section>
                        <button className={`bg-palette-dark hover:bg-palette-darkgreen w-full duration-300 h-16 rounded-md pl-10 pr-10 font-bold font-montserrat_alternate tracking-widest ${Montserrat2.variable}`}>
                            Comprar agora!
                        </button>
                    </div>
                </section>
            </section>


            <footer className="text-black">
                <Footer />
            </footer>
        </>
    );
}


