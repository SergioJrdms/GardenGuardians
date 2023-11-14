import ShopProductsCards from "./ShopProductsCards";

export default function CardsRender(){
    return(
        <div className="grid grid-cols-4 gap-40 p-10">
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