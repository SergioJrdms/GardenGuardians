import Footer from "@/components/Home/Footer/Footer";
import CardsRender from "@/components/Shop/CardsRender";
import ShopHeader from "@/components/Shop/ShopHeader";


export default function shop() {
    return (
        <>
            <header>
                <ShopHeader />
            </header>

            <section className="bg-palette-light pt-10">
                <section className="flex flex-col justify-center items-center">
                    <CardsRender />
                    <CardsRender />
                    <CardsRender />
                    <CardsRender />
                </section>
            </section>

            <footer className="text-black">
                <Footer />
            </footer>


        </>
    )
}