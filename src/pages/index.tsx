import Header from "@/components/Header/Header";
import { Montserrat_Alternates, Montserrat } from "@next/font/google";
import Link from "next/link";


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

export default function Home() {
  return (
    <div className="bg-[url('https://images.unsplash.com/photo-1533563906091-fdfdffc3e3c4?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGFyayUyMHBsYW50fGVufDB8fDB8fHww')] bg-no-repeat bg-cover h-screen">
      <Header />

      <div className="flex flex-col p-40 gap-5 pt-28">
        <p className={`font-montserrat_alternate text-xl ${montserrat2.variable}`}>
          Descubra a beleza das Plantas!
        </p>
        <h1 className={`font-montserrat_alternate text-5xl ${montserrat.variable}`}>
          As melhores plantas <br></br> para o seu Jardim!
        </h1>
        <Link href={'/'}>
          <button className="bg-palette-light text-palette-dark rounded-sm p-2 w-36 h-12 font-bold hover:bg-palette-lightgreen duration-300 hover:text-palette-light">Compre!</button>
        </Link>
      </div>
    </div>
  )
}
