import { useState } from "react"

export default function ProductQntd() {
    var [isClicked, setIsClicked] = useState(1)

    function dec() {
        setIsClicked(isClicked - 1)


        if (isClicked < 2) {
            setIsClicked(isClicked = 1)
        }
    }
    return (
        <>
            <div className="flex justify-center gap-4 items-center h-20 w-32 border border-[#00000048] rounded-md select-none">
                <h1 className="flex justify-center items-center font-bold text-2xl text-black w-10 h-full">
                    {isClicked}
                </h1>

                <div className="flex flex-col">
                    <button
                        onClick={() => {
                            setIsClicked(isClicked + 1)
                        }}
                        className="text-palette-dark hover:text-palette-darkgreen font-bold duration-300 text-3xl cursor-pointer">
                        +
                    </button>
                    <hr className="bg-palette-darkgreen h-[0.2vh] w-10" />
                    <button
                        onClick={dec}
                        className="text-palette-dark text-3xl hover:text-palette-darkgreen font-bold cursor-pointer">
                        -
                    </button>
                </div>
            </div>
        </>
    )
}
