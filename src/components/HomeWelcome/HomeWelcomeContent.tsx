import { IconShoppingCart } from "@tabler/icons-react";

import { Montserrat_Alternates, Montserrat } from "@next/font/google";

const montserrat = Montserrat_Alternates({
    subsets: ["latin"],
    variable: "--font-montserrat",
    weight: '700'
  })
  
  const montserrat2 = Montserrat({
    subsets: ["latin"],
    variable: "--font-montserrat",
    weight: '400'
  })

export default function HomeWelcomeContent(){
    return(
        <div className="flex flex-col p-40 gap-7 pt-52">
                <p className={`font-montserrat_alternate text-2xl select-none ${montserrat2.variable}`}>
                    Descubra a beleza das Plantas!
                </p>
                <h1 className={`font-montserrat_alternate text-7xl select-none ${montserrat.variable}`}>
                    As <span className="text-palette-lightgreen">melhores</span> opções <br></br> para o seu <span className="text-palette-lightgreen">Jardim</span>!
                </h1>
                <button className="flex justify-center items-center gap-2 bg-palette-light mt-5 text-palette-dark text-xl rounded-sm p-2 w-56 h-14 font-bold hover:bg-palette-lightgreen duration-300 hover:text-palette-light tracking-tight hover:tracking-wide">
                    <IconShoppingCart /> 
                    Comprar!
                </button>
        </div>
    )
}