import HomeWelcome from "@/components/Home/HomeWelcome/HomeWelcome";
import HomeProductsRender from "@/components/Home/HomeProducts/HomeProductsRender";
import HomeGoodsRender from "@/components/Home/HomeGoods/HomeGoodsRender";
import HomeHistory from "@/components/Home/HomeHistory/HomeHistory";
import HomeNewProductsRender from "@/components/Home/HomeProducts/HomeNewProductsRender";
import Footer from "@/components/Home/Footer/Footer";

import { Montserrat2 } from "../../_app";

export default function Home() {

  return (
    <>
      <header>
        <HomeWelcome />
      </header>
      <section>
        <HomeGoodsRender />
      </section>

      <section className="flex flex-col gap-1 justify-center items-center bg-palette-light h-40">
        <h1 className={`text-black ${Montserrat2.variable} font-montserrat_alternate text-4xl`}>
          Conheça alguns produtos de nosso catálogo
        </h1>
        <hr className="bg-palette-mediumgreen h-1 w-52" />
      </section>

      <section>
        <HomeProductsRender />
      </section>
      <section>
        <HomeHistory />
      </section>

      <section className="flex flex-col gap-1 justify-center items-center bg-palette-light h-40">
        <h1 className={`text-black ${Montserrat2.variable} font-montserrat_alternate text-4xl`}>
          Novos Produtos!
        </h1>
        <hr className="bg-palette-mediumgreen h-1 w-16" />
      </section>

      <section>
          <HomeNewProductsRender />
      </section>

      <footer className="flex flex-row bg-palette-mediumlight text-black">
        <Footer />
      </footer>
    </>
  )
}
