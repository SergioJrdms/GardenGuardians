import { Montserrat2 } from "@/pages/_app";
import { IconChevronLeft } from "@tabler/icons-react";
import Link from "next/link";

export default function not_found() {
    return (
        <div
            className={`
                bg-[url('https://images.unsplash.com/photo-1552152974-19b9caf99137?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjBwbGFudHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80')] 
                h-screen bg-no-repeat bg-cover  
                flex justify-center items-center         
            `}
        >
            <div className="flex flex-col justify-evenly items-center bg-palette-mediumlight h-60 w-1/2 opacity-80 rounded-md">
                <h1 className={`text-black font-montserrat_alternate text-3xl ${Montserrat2.variable}`}>Ops! Parece que você se perdeu :( </h1>
                <Link href={"./garden-guardians/home"} className={`
                group
              text-black  bg-palette-lightgreen hover:bg-black duration-300 w-2/3
              hover:text-white text-lg rounded-md p-3 font-bold flex justify-center items-center
            `}>
                    <button className="flex flex-row gap-2 items-center">
                        <div className="border border-black group-hover:border-white group-hover:-translate-x-3 duration-300 rounded-full">
                            <IconChevronLeft />
                        </div> 
                        
                        <p>Que tal seguir o caminho de volta?</p>
                    </button>
                </Link>
            </div>
        </div>
    )
}