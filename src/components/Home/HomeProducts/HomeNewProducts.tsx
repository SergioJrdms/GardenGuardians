interface NewProductCardProps{
    product_img: any
    product_name: string
    product_price: number
}

export default function HomeNewProducts(props: NewProductCardProps){
    return(
        <div className="bg-palette-light h-[23rem] hover:scale-110 duration-300 hover:cursor-pointer">
          <div className="bg-palette-mediumlight w-60 h-60 text-black">
             {props.product_img}
          </div>
          <div className="pt-2">
            <p className="text-black text-xl font-bold">{props.product_name}</p>
            <p className="text-palette-mediumgreen font-bold pt-2">R$ {props.product_price}</p>
          </div>
        </div>
    )
}