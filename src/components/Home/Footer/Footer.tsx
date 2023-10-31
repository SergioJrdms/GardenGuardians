import { Montserrat2 } from "@/pages/_app";
import { IconBrandGoogleMaps, IconMail, IconPhone, IconSend } from "@tabler/icons-react";

export default function Footer(){
    return(
        <div className={`flex flex-row gap-[40vh] p-24 text-2xl font-montserrat_alternate ${Montserrat2.variable}`}>
          
          <section className="flex flex-row gap-20">

              <div className="flex flex-col gap-5">
                <h1 className="font-bold ">
                  Informações
                  <hr className="bg-palette-mediumgreen h-1 w-20" />
                </h1>

                  <ul className={`text-[2vh] select-none cursor-pointer`}>
                    <li className="hover:text-palette-lightgreen duration-300">Paginas</li>
                    <li className="hover:text-palette-lightgreen duration-300">Termo & Condições</li>
                    <li className="hover:text-palette-lightgreen duration-300">Contato</li>
                    <li className="hover:text-palette-lightgreen duration-300">Acesoria</li>
                    <li className="hover:text-palette-lightgreen duration-300">Termos de uso</li>
                  </ul>
              </div>

              <div className="flex flex-col gap-5">
                <h1 className="font-bold ">
                  Onde nos achar?
                  <hr className="bg-palette-mediumgreen h-1 w-20" />
                </h1>

                <ul className={`text-[2vh] select-none cursor-pointer`}>
                    <li className="flex flex-row gap-2 items-center hover:text-palette-lightgreen duration-300"><IconPhone /> (11) 95636-6599</li>
                    <li className="flex flex-row gap-2 items-center hover:text-palette-lightgreen duration-300"><IconMail /> help@gardenguardians.com</li>
                    <li className="flex flex-row gap-2 items-center hover:text-palette-lightgreen duration-300"><IconBrandGoogleMaps /> Av. Paulista, 2202 - Bela Vista, São Paulo - SP</li>
                  </ul>
              </div>
          </section>
          
          <div className="flex flex-col gap-5">
            <h1 className="font-bold">
              Newsletter
              <hr className="bg-palette-mediumgreen h-1 w-20" />
            </h1>
            <p className="font-bold text-lg">Receba semanalmente dicas e artigos sobre jardinagem de nossos especialistas e torne seu jardim impecável!</p>

            <div>
              <input 
                type="email" 
                name="email" 
                id="userEmail" 
                placeholder="Qual seu email?"
                className={`
                  p-4 text-lg w-2/3
                `} 
              />
              <button 
                className={`
                  bg-black text-white 
                  text-lg p-4 w-32 font-semibold
                  tracking-[0.5vh]
                  hover:bg-palette-mediumgreen
                  duration-300
                `}>
                  Enviar
                </button>
            </div>
          </div>
        </div>
    )
}