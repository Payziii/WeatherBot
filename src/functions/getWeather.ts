const key = process.env.WEATHER_KEY;

export default async function getWeather(city: string) {
    const url = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${encodeURIComponent(city)}`;

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
        },
    });

    const data = await response.json();

    return data;
}