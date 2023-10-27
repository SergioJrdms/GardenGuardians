import Header from "@/components/Header/Header";
import HomeWelcomeContent from "./HomeWelcomeContent";
import { IconArrowBigDownLines } from "@tabler/icons-react";



export default function HomeWelcome(){
    return(
        <div className="bg-[url('https://images.unsplash.com/photo-1552152974-19b9caf99137?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjBwbGFudHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80')] bg-no-repeat bg-cover h-screen bg-fixed">
            <Header />
            <HomeWelcomeContent />
            
            
            <div className="flex justify-center items-center animate-bounce mt-24">
                <IconArrowBigDownLines className="h-10 w-20"/>
            </div>
           
      </div>
    )
}