import Footer from "@/components/Home/Footer/Footer";
import CardsRender from "@/components/Shop/CardsRender";
import ShopHeader from "@/components/Shop/ShopHeader";


export default function shop() {
    return (
        <>
            <header>
                <ShopHeader />
            </header>

            <section className="bg-palette-light flex p-10 justify-center">
                <section>
                    <CardsRender />
                </section>
            </section>

            <footer className="text-black">
                <Footer />
            </footer>


        </>
    )
}