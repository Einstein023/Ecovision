import Nav from "./components/nav";
import GradientText from "./components/gradientText";
import { Link } from "react-router-dom";
import Cards from "./components/cards";
import { LeafIcon } from "./assets/icons/leaf";
import { WaterIcon } from "./assets/icons/water";
import { SunIcon } from "./assets/icons/sun";
import { ElectricityIcon } from "./assets/icons/electricity";
import { useEffect } from "react";
import { useState } from "react";
import { fetchWeatherApi } from "openmeteo";

function Dashboard() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [carbonData, setCarbonData] = useState(null);
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const params = {
                    latitude: 6.6153,
                    longitude: 3.5069,
                    hourly: ["carbon_dioxide", "carbon_monoxide"],
                    current: "carbon_monoxide",
                };
                const url = "https://air-quality-api.open-meteo.com/v1/air-quality";
                const responses = await fetchWeatherApi(url, params);

                const response = responses[0];

                const latitude = response.latitude();
                const longitude = response.longitude();
                const elevation = response.elevation();
                const utcOffsetSeconds = response.utcOffsetSeconds();

                const current = response.current();
                const hourly = response.hourly();

                const data = {
                    current: {
                        time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
                        carbon_monoxide: current.variables(0).value(),
                    },
                    hourly: {
                        time: Array.from(
                            { length: (Number(hourly.timeEnd()) - Number(hourly.time())) / hourly.interval() },
                            (_, i) => new Date((Number(hourly.time()) + i * hourly.interval() + utcOffsetSeconds) * 1000)
                        ),
                        carbon_dioxide: hourly.variables(0).valuesArray(),
                        carbon_monoxide: hourly.variables(1).valuesArray(),
                    },
                    location: { latitude, longitude, elevation },
                };

                setWeatherData(data);
                setCarbonData(data.current.carbon_monoxide);
                console.log("Weather data fetched:", data);
            } catch (err) {
                setError(err.message);
                console.error("Error fetching weather data:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <div className="text-center text-white font-heading ">Loading...</div>;
    if (error) return <div className="flex items-center justify-center flex-col gap-2 min-h-screen text-white font-heading"><img className="w-16" src="./offline.svg" alt="offline logo" /><h1 className="text-xl">NO Internet Connection</h1></div>;

    const demoImg = [
        {
            svg: <LeafIcon />,
            head: <h1 className="text-3xl font-heading">{carbonData?.toFixed(2) || 'N/A'} <span className="text-sm font-bodyq">µg/m³</span></h1>,
            percent: <p className="text-secondary-clr text-md">-90%</p>,
            style: "bg-gradient-to-r from-primary-clr to-secondary-clr",
            description: 'Carbon emission',
        },
        {
            svg: <WaterIcon />,
            head: <h1 className="text-3xl font-heading">1,240</h1>,
            percent: <p className="text-secondary-clr text-md">+80%</p>,
            style: "bg-gradient-to-r from-teal-600 to-teal-500",
            description: 'Water Usage',
        },
        {
            svg: <SunIcon />,
            head: <h1 className="text-3xl font-heading">6,670</h1>,
            percent: <p className="text-secondary-clr text-md">+72%</p>,
            style: "bg-gradient-to-r from-amber-500 to-amber-400",
            description: 'Renewable Energy',
        },
        {
            svg: <ElectricityIcon />,
            head: <h1 className="text-3xl font-heading">95</h1>,
            percent: <p className="text-secondary-clr text-md">-50%</p>,
            style: "bg-gradient-to-r from-emerald-500 to-emerald-400",
            description: 'Energy Consumption',
        },
    ];

    const links = ["Home", "Profile", "Settings"];
    let linkItems = links.map((link, index) => (
        <li
            key={index}
            className="opacity-50 text-md relative transition-all hover:text-primary-clr hover:opacity-100 hover:cursor-pointer hover:text-secondary-clr hover:after:w-full"
        >
            {link}
        </li>
    ));
    const extra = () => {
        return (
            <Link to="/">
                <button className="opacity-70 hover:text-primary-clr hover:opacity-100">
                    Back to home
                </button>
            </Link>
        );
    };
    return (
        <div className="bg-stone-950 min-h-screen ">
            <Nav contents="Export Data" links={linkItems} extras={extra()} />
            <main className="px-8">
                <GradientText
                    context="Environmental"
                    gradientContext=" Dashboard"
                    style="font-heading text-4xl pt-6 pb-3"
                />
                <p className="opacity-70 pb-6 text-lg w-200">
                    Real-time environmental metrics and AI-powered insights
                </p>
                <div className="flex items-center gap-3 w-full">
                    {demoImg.map((item, index) => (
                        <Cards
                            key={index}
                            img={item.svg}
                            head={item.head}
                            percent={item.percent}
                            style={item.style}
                            description={item.description}
                        />
                    ))}
                </div>
            </main>
        </div>
    );
}

export default Dashboard;
