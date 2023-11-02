import { Montserrat2 } from "@/pages/_app"
import CartProductsQntd from "./CartProductsQntd"

//isso tem que vir exportado do componente dos produtos (fazer)
export interface ProductsProps {
    nome: String
    categoria: String
    preco: number
    img?: any
}


export default function CartCards(props: ProductsProps) {

    return (
        <div className=" bg-white w-[100vh] h-1/2 rounded-md">
            <h1 className="font-bold text-2xl p-5 text-black">Categoria: {props.categoria}</h1>
            <hr className="bg-palette-mediumlight" />

            <div className={`flex flex-row gap-10 p-12 items-center text-black font-montserrat_alternate text-2xl ${Montserrat2.variable}`}>
                <div className="justify-center w-20 h-20 bg-palette-mediumlight">
                    {props.img}
                </div>
                <h1>{props.nome}</h1>

                <CartProductsQntd />

                <p className="flex items-end">R$ {props.preco}</p>

            </div>

        </div>
    )
}