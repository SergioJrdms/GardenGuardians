import { Montserrat2 } from "@/pages/_app";
import { IconHeart } from "@tabler/icons-react";

export default function ProductInfos() {
    return (
        <>
            <div className="flex flex-row justify-between mr-3">
                <div className="flex flex-col gap-4 text-2xl">
                    <p className={`text-black font-montserrat_alternate ${Montserrat2.variable} font-bold text-3xl`}>
                        Nome Produto
                    </p>
                    <p className={`flex flex-row gap-3 text-palette-mediumgreen font-montserrat_alternate ${Montserrat2.variable}`}>
                        R$ 70 <span>BRL</span>
                    </p>
                </div>
                <span className={`
                        flex justify-center items-center cursor-pointer
                        text-black border border-zinc-600 rounded-full h-10 w-10
                        hover:bg-palette-lightgreen hover:border-palette-lightgreen hover:text-white duration-300
                    `}>
                    <IconHeart className="w-5" />
                </span>
            </div>
            <hr className="bg-palette-darkgreen h-[0.2vh] w-[60vh]" />
            <div className="w-[60vh]">
                <p className="text-zinc-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consectetur semper nibh, quis finibus augue interdum a. Integer eu euismod orci. Proin vel lobortis sem. Sed dignissim vel libero eget porttitor. Ut nec odio commodo, laoreet orci at, tincidunt sapien. Ut bibendum a ligula varius vehicula. Nullam consequat sapien in placerat rutrum. Donec et nisi feugiat, convallis ante et, tristique nunc.
                </p>
            </div>
        </>
    )
}