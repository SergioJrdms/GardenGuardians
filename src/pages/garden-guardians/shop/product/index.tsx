import Footer from "@/components/Home/Footer/Footer";
import ProductInfos from "@/components/Shop/Products/ProductInfos";
import ProductQntd from "@/components/Shop/Products/ProductQntd";
import ProductsHeader from "@/components/Shop/Products/ProductsHeader";
import ProductsImgs from "@/components/Shop/Products/ProductsImgs";
import { executeQuery } from "@/pages/api/queries";
import { Montserrat2 } from "@/pages/_app";

const fetchData = async () => {
    try {
        const query = 'SELECT * FROM products';
        const produtos = await executeQuery(query);
        console.log(produtos)
        return produtos;
    } catch (error) {
        console.error('Erro ao executar a consulta:', error);
        return [];
    }
};

export const getServerSideProps = async () => {
    const produtos = await fetchData();

    console.log(produtos)

    return {
        props: {
            produtos,
        },
    };
};

interface Product {
    id: number;
    product_name: string;
    product_price: number;
    product_desc: string;
  }
  


export default function product(props: Product) {
    return (
        <>
            <section>
                <ProductsHeader />
            </section>

            <section className="bg-white">
                <section className="flex flex-row p-32 ml-10 gap-40">
                    <ProductsImgs />
                    <div className="flex flex-col gap-12">
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