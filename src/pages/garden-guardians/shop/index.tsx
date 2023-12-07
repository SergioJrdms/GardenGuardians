import Footer from "@/components/Home/Footer/Footer";
import ShopHeader from "@/components/Shop/ShopHeader";
import ShopProductsCards from "@/components/Shop/ShopProductsCards";



export default function shop() {
    return (
        <>
            <header>
                <ShopHeader />
            </header>

            <section className="bg-palette-light pt-10">
                <section className="grid grid-cols-4 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 gap-20 p-10">
                    <ShopProductsCards
                        id={1}
                        product_name={"Produto"}
                        product_price={17}
                        product_desc={"Produto"}
                    />
                    <ShopProductsCards
                        id={1}
                        product_name={"Produto"}
                        product_price={17}
                        product_desc={"Produto"}
                    />
                    <ShopProductsCards
                        id={1}
                        product_name={"Produto"}
                        product_price={17}
                        product_desc={"Produto"}
                    />
                    <ShopProductsCards
                        id={1}
                        product_name={"Produto"}
                        product_price={17}
                        product_desc={"Produto"}
                    />
                     <ShopProductsCards
                        id={1}
                        product_name={"Produto"}
                        product_price={17}
                        product_desc={"Produto"}
                    />
                    <ShopProductsCards
                        id={1}
                        product_name={"Produto"}
                        product_price={17}
                        product_desc={"Produto"}
                    />
                    <ShopProductsCards
                        id={1}
                        product_name={"Produto"}
                        product_price={17}
                        product_desc={"Produto"}
                    />
                    <ShopProductsCards
                        id={1}
                        product_name={"Produto"}
                        product_price={17}
                        product_desc={"Produto"}
                    />
                    <ShopProductsCards
                        id={1}
                        product_name={"Produto"}
                        product_price={17}
                        product_desc={"Produto"}
                    />
                    <ShopProductsCards
                        id={1}
                        product_name={"Produto"}
                        product_price={17}
                        product_desc={"Produto"}
                    />
                    <ShopProductsCards
                        id={1}
                        product_name={"Produto"}
                        product_price={17}
                        product_desc={"Produto"}
                    />
                    <ShopProductsCards
                        id={1}
                        product_name={"Produto"}
                        product_price={17}
                        product_desc={"Produto"}
                    />
                </section>
            </section>

            <footer className="text-black">
                <Footer />
            </footer>


        </>
    )
}