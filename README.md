## 🚀 30-Day Coding Challenge: Day 2

This project is the second entry in my 30-day coding challenge. Today's focus was on interacting with third-party APIs to fetch and display live data, a cornerstone of modern web development.

### 📖 Project Overview

This is a clean, modern weather dashboard that provides real-time weather information for any city in the world. The user can search for a city, and the application fetches data from the OpenWeatherMap API to display the current temperature, conditions, humidity, and wind speed.

This project demonstrates proficiency in making asynchronous API calls, handling responses, and dynamically updating the user interface.

### ✨ Live Demo & Screenshot
![Jun-09-2025 22-04-15](https://github.com/user-attachments/assets/2d27aedb-693a-4bd4-9890-444272ec013a)


### 🌟 Key Features

* **Live Weather Data:** Fetches real-time weather information from the OpenWeatherMap API.
* **Dynamic City Search:** Users can search for any city globally to get instant weather updates.
* **Unit Toggling:** Seamlessly switch between Celsius and Fahrenheit. The display updates automatically without requiring a new search.
* **Loading State:** A loading spinner provides a professional user experience, indicating that data is being fetched in the background.
* **Error Handling:** Displays a user-friendly error message if the city cannot be found or if there is a network issue.
* **Persistent Memory:** The application uses `localStorage` to remember the last successfully searched city, automatically loading it when the user revisits the page.
* **Responsive Design:** The UI is fully responsive and looks great on both mobile and desktop screens.

### 💻 Technologies Used

This project leverages fundamental front-end technologies and demonstrates the ability to integrate with external services.

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![API](https://img.shields.io/badge/API-%23000000.svg?style=for-the-badge&logo=databricks&logoColor=white)

* **OpenWeatherMap API:** Used as the source for all weather data.

### 🛠️ How to Run Locally

To run this project on your local machine, please follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/timothy-agboada/weather-dashboard.git](https://github.com/timothy-agboada/weather-dashboard.git)
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd weather-dashboard
    ```
3.  **Get a free API Key** from [OpenWeatherMap](https://openweathermap.org/appid).
4.  **Add your API Key:**
    * Open the `script.js` file.
    * Replace the placeholder `'YOUR_API_KEY'` with your actual key.
    ```javascript
    const apiKey = 'YOUR_API_KEY'; // Replace with your key
    ```
5.  **Open the `index.html` file in your browser.**

### 🎯 Learning Objectives

This project was a valuable exercise in several key areas of web development:

* **Asynchronous JavaScript:** Deepened understanding of `async/await` for handling promises and managing asynchronous operations gracefully.
* **API Integration:** Gained practical experience with the `fetch()` API to request data from a third-party service.
* **JSON Data Handling:** Practiced parsing and manipulating JSON data objects to extract the necessary information.
* **DOM Manipulation:** Reinforced skills in dynamically creating, updating, and showing/hiding elements based on application state.
* **Local Storage:** Learned to use `localStorage` to persist data across user sessions, enhancing the user experience.
* **UX Improvement:** Implemented loading states and clear error messages to create a more intuitive and professional-feeling application.
