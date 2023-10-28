import HomeWelcome from "@/components/HomeWelcome/HomeWelcome";
import { montserrat } from "./_app";
import HomeProductsRender from "@/components/HomeProducts/HomeProductsRender";
import HomeGoodsRender from "@/components/HomeGoods/HomeGoodsRender";

export default function Home() {

  return (
    <>
      <HomeWelcome />
      <HomeGoodsRender />

      <section className="flex flex-col gap-1 justify-center items-center bg-palette-light h-40">
        <h1 className={`text-black ${montserrat.variable} font-montserrat_alternate text-2xl`}>
          Conheça alguns produtos de nosso catálogo
        </h1>
        <span className="bg-palette-mediumgreen h-1 w-52"></span>
      </section>

      <HomeProductsRender />
     
    </>
  )
}
