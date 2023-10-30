import { MontserratAlternates } from "@/pages/_app";
import HomeNewProducts from "./HomeNewProducts";

export default function HomeNewProductsRender(){
    return(
        <section className="flex gap-20 items-center bg-palette-light h-[60vh] p-10">
            <h1 className={`flex flex-col gap-2 text-black font-montserrat_alternate text-6xl  select-none ${MontserratAlternates.variable}`}>
                Produtos novos <span className="text-palette-lightgreen">Semanalmente</span>
            </h1>
            <div className="grid grid-cols-4 gap-60">
                <HomeNewProducts product_img={"IMG"} product_name="Produto Novo 1" product_price={50.00} />
                <HomeNewProducts product_img={"IMG"} product_name="Produto Novo 2" product_price={30.00} />
                <HomeNewProducts product_img={"IMG"} product_name="Produto Novo 3" product_price={90.00} />
            </div>
        </section>
    )
}