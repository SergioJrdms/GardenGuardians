import Header from "@/components/Home/Header/Header";
import { Montserrat2, MontserratAlternates } from "@/pages/_app";
import { IconChevronDown } from "@tabler/icons-react";

export default function history() {
    return (
        <div className="overflow-y-hidden ">
            <div
                className={`
                bg-[url('https://images.unsplash.com/photo-1552152974-19b9caf99137?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjBwbGFudHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80')] 
                bg-no-repeat bg-cover h-screen bg-fixed
                flex items-center 
            `}>
                <div><Header /></div>
                <div className="flex flex-col p-40 gap-20 mt-20">
                    <span>
                        <p
                            className={`
                        font-montserrat_alternate text-3xl select-none ${Montserrat2.variable}
                    `}
                        >
                            Saiba mais sobre os GardenGuardians
                        </p>
                        <h1
                            className={`
                        font-montserrat_alternate  text-8xl select-none ${MontserratAlternates.variable}
                    `}
                        >
                            Descubra a nossa <br></br> <span className="text-palette-lightgreen">História</span>
                        </h1>
                    </span>
                    <span
                        className="animate-bounce"
                    >
                        <IconChevronDown className="w-16 h-16 cursor-pointer" />
                    </span>
                </div>
            </div>

            <section className="bg-palette-light">
                <section className="flex flex-col p-20 justify-center items-start">
                    <h1 className={`text-black ${MontserratAlternates.variable} font-montserrat_alternate text-4xl`}>
                        Conheça mais sobre nós
                    </h1>
                    <hr className="bg-palette-mediumgreen h-1 w-40" />
                </section>

                <section className="flex justify-center items-center ">
                    <div className="grid text-black grid-cols-3 gap-16 md:gap-10 select-none p-10">

                        <div className="border border-zinc-300 hover:border-zinc-800 duration-300 p-10 rounded-lg w-[50vh] md:w-[60vh] group">
                            <div className="flex flex-col gap-8">
                                <span className="flex flex-col justify-center items-center">
                                    <p className={`font-extrabold font-montserrat_alternate text-2xl ${Montserrat2.variable} group-hover:scale-105 duration-300`}>Nossa história</p>
                                    <hr className="bg-palette-mediumgreen h-[0.3vh] w-[7vh]" />
                                </span>
                                <p className="flex justify-center text-lg text-pale text-center">
                                    Sophia Greenfield, uma entusiasta da natureza, deu vida à GardenGuardians, uma empresa dedicada a transformar cada lar em um paraíso verde. Com uma visão clara de conectar as pessoas à beleza da natureza, a GardenGuardians oferece uma variedade exuberante de plantas, ferramentas de jardinagem de alta qualidade e serviços especializados. Desde flores exóticas até consultorias personalizadas, a empresa visa inspirar, educar e capacitar, tornando-se um farol verde para aqueles que buscam cultivar seus próprios oásis de serenidade em meio à agitação da vida moderna. Junte-se à GardenGuardians e descubra a alegria de ser o guardião do seu próprio jardim, onde a natureza encontra um lar acolhedor em cada ambiente.
                                </p>
                            </div>
                        </div>

                        <div className="border border-zinc-300 hover:border-zinc-800 duration-300 p-10 rounded-lg w-[50vh] md:w-[60vh] group">
                            <div className="flex flex-col gap-8">
                                <span className="flex flex-col justify-center items-center">
                                    <p className={`font-extrabold font-montserrat_alternate text-2xl ${Montserrat2.variable} group-hover:scale-105 duration-300`}>Porque nos escolher?</p>
                                    <hr className="bg-palette-mediumgreen h-[0.3vh] w-[10vh]" />
                                </span>
                                <p className="flex justify-center text-lg text-center">
                                    Ao decidir criar seu próprio refúgio verde, escolher a GardenGuardians significa optar pela excelência e paixão pela jardinagem. Nossa empresa, fundada por Sophia Greenfield e sua equipe de entusiastas, não apenas oferece uma seleção cuidadosamente curada de plantas exuberantes, ferramentas de jardinagem ergonômicas e acessórios encantadores, mas também proporciona uma experiência holística para transformar sua visão em realidade. Com a GardenGuardians, você não apenas compra produtos, mas adquire uma parceria dedicada a inspirar, educar e apoiar, tornando-se o guardião de seu próprio oásis verde. Escolha a GardenGuardians e descubra como nossa paixão pela natureza e compromisso com a qualidade podem fazer a diferença em cada jardim, elevando sua experiência de jardinagem a novos patamares.
                                </p>
                            </div>
                        </div>

                        <div className="border border-zinc-300 hover:border-zinc-800 duration-300 p-10 rounded-lg w-[50vh] md:w-[60vh] group">
                            <div className="flex flex-col gap-8">
                                <span className="flex flex-col justify-center items-center">
                                    <p className={`font-extrabold font-montserrat_alternate text-2xl ${Montserrat2.variable} group-hover:scale-105 duration-300`}>Nosso futuro</p>
                                    <hr className="bg-palette-mediumgreen h-[0.3vh] w-[5vh]" />
                                </span> 
                                <p className="flex justify-center text-lg text-center">
                                    Enquanto a GardenGuardians floresce no presente, nosso olhar está firmemente fixado em um futuro repleto de crescimento e inovação. Nossa visão é expandir as fronteiras do verde, trazendo mais diversidade de plantas e produtos inovadores para os lares ao redor do mundo. Planejamos lançar iniciativas educacionais ainda mais robustas, oferecendo tutoriais interativos, workshops e recursos inspiradores para fortalecer a conexão das pessoas com a jardinagem. Além disso, estamos explorando parcerias sustentáveis e práticas ambientais para garantir que, à medida que prosperamos, continuemos sendo guardiões responsáveis da natureza. Na GardenGuardians, o futuro se desenha com paisagens ainda mais vibrantes, jardins florescentes e uma comunidade global unida pelo amor à natureza. Junte-se a nós enquanto cultivamos um futuro onde cada lar é um testemunho vivo da beleza e da serenidade que a natureza proporciona.
                                </p>
                            </div>
                        </div>

                    </div>
                </section>
            </section>
        </div>
    )
}