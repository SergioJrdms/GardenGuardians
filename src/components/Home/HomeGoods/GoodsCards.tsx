interface GoodsNames{
    name: String,
}

export default function GoodsCards(props: GoodsNames){
    return(
        <div className={`
            text-palette-dark  h-[30rem] w-96 
             flex flex-col justify-end
          `}>
            <div className={`
                p-10 text-xl font-bold
              `}>
              <p>
                {props.name}
              </p>
              <button className={`
                bg-palette-dark hover:bg-palette-mediumgreen duration-300 w-full text-white text-lg rounded-sm p-2 font-bold
              `}>
                Ver {props.name}
              </button>
            </div>
          </div>
    )
}