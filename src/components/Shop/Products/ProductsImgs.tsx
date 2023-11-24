interface imgProps{
    img: string
}

export default function ProductsImgs(props: imgProps) {
    return (
        <>
            <section className="flex items-center justify-center bg-palette-mediumlight w-[70vh] h-[60vh]">
                <div className="text-black">{props.img}</div>
            </section>
        </>
    )
}