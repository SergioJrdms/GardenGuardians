import CartCards from "@/components/Cart/CartCads";
import CartResume from "@/components/Cart/CartResume";
import Header from "@/components/Home/Header/Header";

export default function cart(){
    return(
        <>
            <div className="bg-black h-24 flex flex-col gap-52 pl-10">
                <header>
                    <Header />
                </header>
                
                    <section className="grid grid-cols-2">
                        <div className="flex flex-col gap-x-28 gap-y-10">
                            <CartCards nome={"produto 1"} categoria={"Plantas"} preco={12} img={"Img"}/>
                            <CartCards nome={"produto 2"} categoria={"Equipamentos"} preco={20} img={"Img"}/>
                            <CartCards nome={"produto 3"} categoria={"Variados"} preco={40} img={"Img"}/>
                        </div>
                        <div className="flex justify-center">
                            <CartResume />
                        </div>
                    </section>
                   
            </div>
        </>
    )
}