import Footer from "@/components/Home/Footer/Footer";
import ProductInfos from "@/components/Shop/Products/ProductInfos";
import ProductQntd from "@/components/Shop/Products/ProductQntd";
import ProductsHeader from "@/components/Shop/Products/ProductsHeader";
import ProductsImgs from "@/components/Shop/Products/ProductsImgs";
import { Montserrat2 } from "@/pages/_app";

export default function product() {


    return (
        <>
            <section>
                <ProductsHeader />
            </section>

            <section className="bg-white">
                <section className="flex flex-row p-32 ml-10 gap-7">
                    <ProductsImgs />
                    <div className="flex flex-col gap-12 -mt-20">
                        <ProductInfos />
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
    )
}