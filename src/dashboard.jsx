import Nav from "./components/nav";
function Dashboard() {
    const links = ["Home", "Profile", "Settings"];
    let linkItems = links.map((link, index) => (<li key={index} className="opacity-50 relative transition-all hover:text-primary-clr hover:opacity-100 hover:cursor-pointer hover:text-secondary-clr hover:after:w-full">{link}</li>)) 
    return (
        <div className="bg-stone-950 min-h-screen">
            <Nav contents="Launch Dashboard" links={linkItems}/>
        </div>
    );
}
export default Dashboard