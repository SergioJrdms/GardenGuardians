import Footer from "@/components/Home/Footer/Footer";
import Header from "@/components/Home/Header/Header";
import CardsRender from "@/components/Shop/CardsRender";
import ShopHeader from "@/components/Shop/ShopHeader";
import { Montserrat2, MontserratAlternates } from "@/pages/_app";
import { IconChevronRight } from "@tabler/icons-react";
import Link from "next/link";

export default function shop() {
    return (
        <>
            <header>
                <ShopHeader />
            </header>

            <section className="bg-palette-light">
                

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