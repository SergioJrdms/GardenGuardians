import HomeWelcome from "@/components/HomeWelcome/HomeWelcome";
import { Montserrat2 } from "./_app";
import HomeProductsRender from "@/components/HomeProducts/HomeProductsRender";
import HomeGoodsRender from "@/components/HomeGoods/HomeGoodsRender";
import HomeHistory from "@/components/HomeHistory/HomeHistory";
import HomeNewProductsRender from "@/components/HomeProducts/HomeNewProductsRender";
import { IconBrandGoogleMaps, IconMail, IconPhone } from "@tabler/icons-react";

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
        <div className={`flex flex-row gap-[80vh] p-24 text-2xl font-montserrat_alternate ${Montserrat2.variable}`}>
          
          <section className="flex flex-row gap-36">

              <div className="flex flex-col gap-5">
                <h1 className="font-bold ">
                  Informações
                  <hr className="bg-palette-mediumgreen h-1 w-20" />
                </h1>

                  <div className={`text-[2vh] select-none cursor-pointer`}>
                    <ul>Paginas</ul>
                    <ul>Termo & Condições</ul>
                    <ul>Contato</ul>
                    <ul>Acesoria</ul>
                    <ul>Termos de uso</ul>
                  </div>
              </div>

              <div className="flex flex-col gap-5">
                <h1 className="font-bold ">
                  Onde nos achar?
                  <hr className="bg-palette-mediumgreen h-1 w-20" />
                </h1>

                <div className={`text-[2vh] select-none cursor-pointer`}>
                    <ul className="flex flex-row gap-2 items-center"><IconPhone /> (11) 95636-6599</ul>
                    <ul className="flex flex-row gap-2 items-center"><IconMail /> help@gardenguardians.com</ul>
                    <ul className="flex flex-row gap-2 items-center"><IconBrandGoogleMaps /> Av. Paulista, 2202 - Bela Vista, São Paulo - SP</ul>
                  </div>
              </div>
          </section>
          
          <div>
            <h1 className="font-bold ">
              Newsletter
            </h1>
            <hr className="bg-palette-mediumgreen h-1 w-20" />
          </div>
        </div>
      </footer>
     
    </>
  )
}
