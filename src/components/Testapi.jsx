import { useEffect, useState } from "react";
import { fetchWeatherApi } from "openmeteo";

export default function TestApi({ carbonData }) {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    carbonData = weatherData.current.carbon_monoxide;

    return (
        <div>
            <TestApi carbonData={carbonData} />
        </div>
    );
}