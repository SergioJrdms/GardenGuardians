import Header from "../Header/Header";
import HomeWelcomeContent from "./HomeWelcomeContent";

export default function HomeWelcome(){
    return(
        <div 
            className={`
                bg-[url('https://images.unsplash.com/photo-1552152974-19b9caf99137?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjBwbGFudHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80')] 
                bg-no-repeat bg-cover h-screen bg-fixed
                flex items-center
            `}>
            <Header />
            <HomeWelcomeContent />  
        </div>
    )
}