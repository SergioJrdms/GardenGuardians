import { useState } from "react"

export default function CartProductsQntd() {
    var [isClicked, setIsClicked] = useState(1)

    function dec (){
        setIsClicked(isClicked - 1)


        if (isClicked < 1){
            setIsClicked(isClicked = 0)
        }
    }

    return (
        <div className="flex justify-center gap-4 items-center h-9 w-32 border border-[#00000048] rounded-md select-none">
            <button 
                onClick={dec} 
                className="text-palette-mediumgreen text-3xl cursor-pointer">
                    -
            </button>
            <h1 className="flex justify-center items-center bg-palette-mediumlight w-10 h-full">
                {isClicked}
            </h1>
            <button 
                onClick={() => {
                    setIsClicked(isClicked + 1)
                }}
                className="text-palette-mediumgreen text-3xl cursor-pointer">
                    +
            </button>
        </div>
    )
}