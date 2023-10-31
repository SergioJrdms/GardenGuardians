interface GoodsNames{
    name: String
}

export default function GoodsCards(props: GoodsNames){
    return(
        <div className={`
            text-palette-dark bg-palette-mediumlight h-[30rem] w-96 
             flex flex-col justify-end
          `}>
            <div className={`
                p-10 text-xl font-bold
              `}>
              <p>
                {props.name}
              </p>
              <button className={`
                bg-palette-lightgreen hover:bg-black duration-300 w-full text-white text-lg rounded-sm p-2 font-bold
              `}>
                Ver {props.name}
              </button>
            </div>
          </div>
    )
}