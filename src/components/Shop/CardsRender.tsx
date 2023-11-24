// ProductsPage.js

import Footer from "@/components/Home/Footer/Footer";
import ProductsHeader from "@/components/Shop/Products/ProductsHeader";
import {executeQuery} from "@/pages/api/queries";
import ShopProductsCards from "./ShopProductsCards";

export const getServerSideProps = async () => {
  try {
    const query = 'SELECT * FROM products';
    const produtos = await executeQuery(query);
    
    return {
      props: {
        produtos,
      },
    };
  } catch (error) {
    console.error('Erro ao obter produtos:', error);
    return {
      props: {
        produtos: [],
      },
    };
  }
};

export default function CardsRender({ produtos }: any) {
  return (
    <>
      <section>
        <ProductsHeader />
      </section>

      <section className="bg-white">
        <div className="grid grid-cols-4 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 gap-20 p-10">
          {produtos.map((produto: any) => (
            <ShopProductsCards
              key={produto.id}
              id={produto.id}
              product_name={produto.product_name}
              product_price={produto.product_price}
              product_desc={produto.product_desc}
            />
          ))}
        </div>
      </section>

      <footer className="text-black">
        <Footer />
      </footer>
    </>
  );
}
