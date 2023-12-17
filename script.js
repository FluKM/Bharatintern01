async function getWeather() {
    const apiKey = 'da0342ae433b63e7b49418bc8434f176';
    const cityInput = document.getElementById('cityInput');
    const city = cityInput.value;
    if (!city) {
        alert('Please enter a city name.');
        return;
    }
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        const data = await response.json();

        document.getElementById('city').innerText = `City: ${data.name}`;
        document.getElementById('temperature').innerText = `Temperature: ${data.main.temp}°C`;
        document.getElementById('description').innerText = `Description: ${data.weather[0].description}`;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        alert('Error fetching weather data. Please try again.');
    }
}
document.getElementById('cityInput').addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        getWeather();
    }
});
