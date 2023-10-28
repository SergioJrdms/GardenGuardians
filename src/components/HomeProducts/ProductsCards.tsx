interface ProductCardProps{
    product_img: any
    product_name: string
    product_price: number
}

export default function ProductsCards(props: ProductCardProps){
    return(
        <div className="bg-palette-light h-[23rem]">
          <div className="bg-palette-mediumlight w-72 h-72 text-black">
             {props.product_img}
          </div>
          <div className="pt-2">
            <p className="text-black">{props.product_name}</p>
            <p className="text-palette-mediumgreen font-bold pt-2">R$ {props.product_price}</p>
          </div>
        </div>
    )
}