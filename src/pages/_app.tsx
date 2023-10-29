import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Montserrat_Alternates, Montserrat } from "next/font/google";


export const MontserratAlternates = Montserrat_Alternates({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: '700'
})

export const Montserrat2 = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: '400'
})

export default function App({ Component, pageProps }: AppProps) {
  return(
    <main >
      <Component {...pageProps} />
    </main>
  )
  
}
