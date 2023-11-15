import ShopProductsCards from "./ShopProductsCards";

export default function CardsRender(){
    return(
        <div className="grid grid-cols-4 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 gap-20 p-10">
            <ShopProductsCards product_img={"IMG"} product_name="Nome Produto" product_price={22} />
            <ShopProductsCards product_img={"IMG"} product_name="Nome Produto" product_price={22} />
            <ShopProductsCards product_img={"IMG"} product_name="Nome Produto" product_price={22} />
            <ShopProductsCards product_img={"IMG"} product_name="Nome Produto" product_price={22} />

            <ShopProductsCards product_img={"IMG"} product_name="Nome Produto" product_price={22} />
            <ShopProductsCards product_img={"IMG"} product_name="Nome Produto" product_price={22} />
            <ShopProductsCards product_img={"IMG"} product_name="Nome Produto" product_price={22} />
            <ShopProductsCards product_img={"IMG"} product_name="Nome Produto" product_price={22} />

            <ShopProductsCards product_img={"IMG"} product_name="Nome Produto" product_price={22} />
            <ShopProductsCards product_img={"IMG"} product_name="Nome Produto" product_price={22} />
            <ShopProductsCards product_img={"IMG"} product_name="Nome Produto" product_price={22} />
            <ShopProductsCards product_img={"IMG"} product_name="Nome Produto" product_price={22} />
        </div>
    )
}