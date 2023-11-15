import { IconHeart } from "@tabler/icons-react"
import Link from "next/link"

interface ProductCardProps {
    product_img: any
    product_name: string
    product_price: number
}

export default function ShopProductsCards(props: ProductCardProps) {
    return (
        <Link href={'./shop/product'}>
            <div className="bg-palette-light h-[23rem] duration-300 hover:cursor-pointer group">
                <div className="bg-palette-mediumlight w-72 h-72 hover:scale-105 duration-500 text-black">
                    {props.product_img}
                </div>
                <div className="pt-2">
                    <p className="text-black font-bold text-xl">{props.product_name}</p>
                    <span className="flex flex-row items-center justify-between  invisible group-hover:visible translate-y-6 group-hover:-translate-y-1 duration-300">
                        <p className="text-palette-mediumgreen font-bold text-lg pt-2">R$ {props.product_price}</p>

                        <IconHeart className="text-black  hover:scale-110 hover:text-red-600 duration-200" />
                    </span>
                </div>
            </div>
        </Link>
    )
}