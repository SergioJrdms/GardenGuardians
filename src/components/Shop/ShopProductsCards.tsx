import Link from "next/link"

interface ProductCardProps {
    product_img: any
    product_name: string
    product_price: number
}

export default function ShopProductsCards(props: ProductCardProps) {
    return (
        <Link href={'./shop/product'}>
            <div className=" h-[23rem] hover:scale-110 duration-300 hover:cursor-pointer">
                <div className="bg-palette-mediumlight w-72 h-72 text-black">
                    {props.product_img}
                </div>
                <div className="pt-2">
                    <p className="text-black">{props.product_name}</p>
                    <p className="text-palette-mediumgreen font-bold pt-2">R$ {props.product_price}</p>
                </div>
            </div>
        </Link>
    )
}