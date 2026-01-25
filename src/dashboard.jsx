import Nav from "./components/nav";
import GradientText from "./components/gradientText";
import { Link } from "react-router-dom";
import Cards from "./components/cards";

const demoImg = [
    { svg: <img width="35" height="35" src="https://img.icons8.com/ios/100/1A1A1A/leaf--v1.png" alt="leaf--v1"/>, head: "Air Quality", percent: "90%", style:"bg-gradient-to-r from-primary-clr to-secondary-clr" },
    { svg: <img width="35" height="35" src="https://img.icons8.com/parakeet-line/48/1A1A1A/water.png" alt="water"/>, head: "Water Quality", percent: "85%", style:"bg-gradient-to-r from-teal-600 to-teal-500" },
    { svg: <img width="35" height="35" src="https://img.icons8.com/ios/100/1A1A1A/sun--v1.png" alt="sun--v1"/>, head: "Temperature", percent: "72%", style:"bg-gradient-to-r from-amber-500 to-amber-400" },
    { svg: <img width="35" height="35" src="https://img.icons8.com/forma-light/48/1A1A1A/electricity.png" alt="electricity"/>, head: "Electricity", percent: "72%", style:"bg-gradient-to-r from-emerald-500 to-emerald-400" },
]

function Dashboard() {
    const links = ["Home", "Profile", "Settings"];
    let linkItems = links.map((link, index) => (<li key={index} className="opacity-50 text-lg relative transition-all hover:text-primary-clr hover:opacity-100 hover:cursor-pointer hover:text-secondary-clr hover:after:w-full">{link}</li>)) 
    const extra = () =>{
        return(
            <Link to="/">
                <button className="opacity-70 hover:text-primary-clr hover:opacity-100">Back to home</button>
            </Link>
        )
    }
    return (
        <div className="bg-stone-950 min-h-screen ">
            <Nav contents="Export Data" links={linkItems} extras={extra()}/>
            <main className="px-8">
            <GradientText context="Environmental" gradientContext=" Dashboard" style="font-heading text-4xl pt-6 pb-3"/>
            <p className="opacity-70 pb-4 text-lg w-200">Real-time environmental metrics and AI-powered insights</p>
            <div className="flex items-center gap-3 w-full">
                {demoImg.map((item, index) => (
                    <Cards key={index} img={item.svg} head={item.head} percent={item.percent} style={item.style}/>
                ))}
            </div>
            </main>
        </div>
    );
}

 
export default Dashboard