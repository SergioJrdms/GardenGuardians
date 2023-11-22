/* eslint-disable @next/next/no-img-element */
import { IconChevronLeft } from "@tabler/icons-react";
import Link from "next/link";

export default function login() {
    return (
        <div className="flex flex-col pl-5 pt-3 bg-palette-mediumlight">
            <Link
                href={'./home'}
                className="bg-palette-light text-black w-10 rounded-full p-2 hover:text-palette-lightgreen hover:scale-110 duration-300">
                <IconChevronLeft />
            </Link>




            <div className="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
                <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
                    <div className="rounded-xl bg-white shadow-xl">
                        <div className="p-6 sm:p-16">
                            <div className="space-y-4">
                                <h2 className="mb-8 text-2xl text-palette-dark font-bold">Faça login para ter acesso ao <br /> melhor do <span className="text-palette-lightgreen">GardenGuardians</span>.</h2>
                            </div>
                            <div className="mt-16 grid space-y-4">
                                <button className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-palette-lightgreen">
                                    <div className="relative flex items-center space-x-4 justify-center">
                                        <img src="https://tailus.io/sources/blocks/social/preview/images/google.svg" className="absolute left-0 w-5" alt="google logo" />
                                        <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-palette-lightgreen sm:text-base">Continue com o Google</span>
                                    </div>
                                </button>
                                <button className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-palette-lightgreen">
                                    <div className="relative flex items-center space-x-4 justify-center">
                                        <img src="https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg" className="absolute left-0 w-5" alt="Facebook logo" />
                                        <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-palette-lightgreen sm:text-base">Continue com o Facebook</span>
                                    </div>
                                </button>
                            </div>

                            <div className="pt-6">
                                <Link href={"./cadastro"}>
                                    <p className="text-palette-dark hover:text-palette-mediumgreen duration-300 text-lg">Ainda não tem uma conta? Clique aqui e faça uma!</p>
                                </Link>
                            </div>

                            <div className="mt-32 space-y-4 text-gray-600 text-center sm:-mb-8">
                                <p className="text-xs">Ao prosseguir você concorda com nossos  <a href="#" className="underline hover:text-palette-lightgreen duration-300">Termos de Uso</a> e cofirma a leitura do <a href="#" className="underline hover:text-palette-lightgreen duration-300">Privacidade & Cookies</a>.</p>
                                <p className="text-xs">Este site é protegido por reCAPTCHA e o <a href="#" className="underline hover:text-palette-lightgreen duration-300">Google Privacy Policy</a> e <a href="#" className="underline hover:text-palette-lightgreen duration-300">Termos de Serviço</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}