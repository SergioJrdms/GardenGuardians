import { IconHeart } from "@tabler/icons-react"
import * as Toast from '@radix-ui/react-toast';
import { useState } from "react";
import ToastDemo from "./Toast";

interface ProductCardProps {
  product_img: any
  product_name: string
  product_price: number
}

export default function ProductsCards(props: ProductCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-palette-light h-[23rem] hover:scale-110 duration-300 hover:cursor-pointer">
      <div className="bg-palette-mediumlight w-72 h-72 text-black">
        {props.product_img}
      </div>
      <div className="pt-2">
        <p className="text-black">{props.product_name}</p>
        <span className="flex flex-row items-center justify-between">
          <p className="text-palette-mediumgreen font-bold pt-2">R$ {props.product_price}</p>
      
          <IconHeart className="text-black mr-4 hover:scale-110 hover:text-red-600  duration-200" />
        </span>
      </div>
    </div>
  )
}