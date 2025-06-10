document.addEventListener('DOMContentLoaded', () => {
    // OpenWeatherMap API key
    const apiKey = 'YOUR_API_KEY'; 

   // Get references to our HTML elements
    const cityInput = document.getElementById('cityInput');
    const searchButton = document.getElementById('searchButton');
    const unitSelect = document.getElementById('unitSelect');
    const weatherInfoDiv = document.getElementById('weather-info');
    const errorMessageDiv = document.getElementById('error-message');
    const cityNameEl = document.getElementById('cityName');
    const loadingSpinner = document.getElementById('loading-spinner'); // Get spinner

    // Variable to store the last searched city
    let lastCity = '';

    // Function to handle the search logic
    const handleSearch = () => {
        const city = cityInput.value.trim();
        if (city) {
            getWeather(city);
        }
    };

    // Add event listeners
    searchButton.addEventListener('click', handleSearch);
    cityInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    });
    unitSelect.addEventListener('change', () => {
        if (lastCity) {
            getWeather(lastCity);
        }
    });

    const savedCity = localStorage.getItem('lastCity');
    if (savedCity) {
        getWeather(savedCity);
    }

    // Function to fetch weather data from the API
    async function getWeather(city) {
        // --- BONUS: Show loading spinner and hide other elements ---
        loadingSpinner.classList.remove('hidden');
        weatherInfoDiv.classList.add('hidden');
        errorMessageDiv.classList.add('hidden');

        const units = unitSelect.value;
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
        
        try {
            const response = await fetch(apiUrl);

            if (!response.ok) {
                throw new Error('City not found');
            }

            const data = await response.json();
            lastCity = city; 
            
            // --- BONUS: Save successful search to localStorage ---
            localStorage.setItem('lastCity', city); 

            displayWeather(data, units);

        } catch (error) {
            console.error('Error fetching weather data:', error);
            showError();
        }
    }

    // Function to display the weather data on the page
    function displayWeather(data, units) {
        loadingSpinner.classList.add('hidden'); // Hide spinner on success
        errorMessageDiv.classList.add('hidden');
        weatherInfoDiv.classList.remove('hidden');

        const tempUnit = units === 'metric' ? '°C' : '°F';
        const speedUnit = units === 'metric' ? 'm/s' : 'mph';

        const temperature = document.getElementById('temperature');
        const weatherDescription = document.getElementById('weatherDescription');
        const weatherIcon = document.getElementById('weatherIcon');
        const humidity = document.getElementById('humidity');
        const windSpeed = document.getElementById('windSpeed');

        cityNameEl.textContent = data.name;
        temperature.textContent = `${Math.round(data.main.temp)}${tempUnit}`;
        weatherDescription.textContent = data.weather[0].description;
        weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        humidity.textContent = `${data.main.humidity}%`;
        windSpeed.textContent = `${data.wind.speed} ${speedUnit}`;
    }

    // Function to show the error message
    function showError() {
        loadingSpinner.classList.add('hidden'); // Hide spinner on error
        weatherInfoDiv.classList.add('hidden');
        errorMessageDiv.classList.remove('hidden');
        lastCity = '';
        
        localStorage.removeItem('lastCity'); 
    }
});