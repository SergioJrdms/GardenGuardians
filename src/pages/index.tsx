import HomeWelcome from "@/components/HomeWelcome/HomeWelcome";
import { Montserrat2 } from "./_app";
import HomeProductsRender from "@/components/HomeProducts/HomeProductsRender";
import HomeGoodsRender from "@/components/HomeGoods/HomeGoodsRender";
import HomeHistory from "@/components/HomeHistory/HomeHistory";
import ProductsCards from "@/components/HomeProducts/ProductsCards";

export default function Home() {

  return (
    <>
    
      <HomeWelcome />
      <HomeGoodsRender />

      <section className="flex flex-col gap-1 justify-center items-center bg-palette-light h-40">
        <h1 className={`text-black ${Montserrat2.variable} font-montserrat_alternate text-3xl`}>
          Conheça alguns produtos de nosso catálogo
        </h1>
        <span className="bg-palette-mediumgreen h-1 w-52"></span>
      </section>

      <HomeProductsRender />
      <HomeHistory />

      <section className="flex flex-col gap-1 justify-center items-center bg-palette-light h-40">
        <h1 className={`text-black ${Montserrat2.variable} font-montserrat_alternate text-3xl`}>
          Novos Produtos!
        </h1>
        <span className="bg-palette-mediumgreen h-1 w-16"></span>
      </section>

      <section>
        
      </section>

     
    </>
  )
}
