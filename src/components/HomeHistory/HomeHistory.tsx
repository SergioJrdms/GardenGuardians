import { Montserrat2 } from "@/pages/_app";
import Link from "next/link";


export default function HomeHistory(){
    return(
        <section className={`
            bg-[url('https://cdn.create.vista.com/api/media/small/470623410/stock-photo-summer-view-domestic-home-garden-flowers-lawn-patio-furniture-background')] 
            bg-no-repeat bg-cover h-screen bg-fixed
            flex justify-center items-center
        `}>
        <div className="flex flex-col justify-evenly items-center bg-palette-mediumlight h-60 w-1/2 opacity-80 rounded-md">
          <h1 className={`text-black font-montserrat_alternate text-3xl ${Montserrat2.variable}`}>Nós temos o que o seu <span className="text-palette-mediumgreen">Jardim</span> precisa!</h1>
          <Link href={"/history"} className={`
              text-black  bg-palette-lightgreen hover:bg-black duration-300 w-1/2
              hover:text-white text-lg rounded-md p-2 font-bold flex justify-center items-center
            `}>
            <button>
              Nossa História
            </button>
          </Link>
        </div>
      </section>
    )
}