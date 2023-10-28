import ProductsCards from "./ProductsCards";

export default function HomeProductsRender(){
    return(
        <section className="flex bg-palette-light h-auto p-10">
            <div className="grid grid-cols-4 gap-10">
                <ProductsCards product_img={"IMAGEM PRODUTO"} product_name="Produto 1" product_price={70.00}/>
                <ProductsCards product_img={"IMAGEM PRODUTO"} product_name="Produto 2" product_price={40.00}/>
                <ProductsCards product_img={"IMAGEM PRODUTO"} product_name="Produto 3" product_price={50.00}/>
                <ProductsCards product_img={"IMAGEM PRODUTO"} product_name="Produto 4" product_price={60.00}/>

                <ProductsCards product_img={"IMAGEM PRODUTO"} product_name="Produto 1" product_price={70.00}/>
                <ProductsCards product_img={"IMAGEM PRODUTO"} product_name="Produto 2" product_price={40.00}/>
                <ProductsCards product_img={"IMAGEM PRODUTO"} product_name="Produto 3" product_price={50.00}/>
                <ProductsCards product_img={"IMAGEM PRODUTO"} product_name="Produto 4" product_price={60.00}/>
            </div>
        </section>
    )
}