import { Montserrat2 } from "@/pages/_app";

export default function CartResume() {
    return (
        <div className="flex flex-col justify-center bg-white w-[50vh] h-[35vh] rounded-md -space-y-5">
            <div className="flex flex-col">
                <div className="p-7">
                    <h1 className={`font-bold text-black text-lg font-montserrat_alternate ${Montserrat2.variable}`}>
                        Resumo da Compra
                    </h1>
                </div>
                <hr className="bg-palette-mediumlight" />
            </div>

            <div className="flex flex-col -space-y-14 text-[#00000092]">
                <div className="flex justify-between p-8">
                    <p>Produtos (0)</p>
                    <p>R$ -</p>
                </div>

                <div className="flex justify-between p-8">
                    <p>Frete</p>
                    <p>R$ -</p>
                </div>
            </div>

            <div className="p-8 flex justify-between text-black font-bold">
                <h1 className="text-xl">
                    Total
                </h1>
                <p>R$ -</p>
            </div>

            <div className="flex justify-center">
                <button className="font-bold text-palette-mediumlight rounded-md p-3 w-3/4 bg-black hover:bg-palette-mediumgreen duration-300">
                    Continuar Compra
                </button>
            </div>

        </div>
    )
}