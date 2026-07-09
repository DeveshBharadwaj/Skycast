# 🌦️ Skycast - Weather Application

Skycast is a full-stack web application that delivers real-time weather information and updates. The application utilizes a robust backend built with **Java** and **Spring Boot**.

---

## 🚀 Key Features

* **Real-Time Data Fetching**: Retrieves live climate and weather statistics via external Weather REST APIs.
* **City Search**: Users can lookup current weather conditions for any major global city.
* **Responsive Dashboard**: Beautiful, mobile-friendly interface mimicking modern weather tracking platforms.

---

## 🛠️ Tech Stack

### Backend
* **Language**: Java
* **Framework**: Spring Boot (Spring Web, Spring Data JPA)
* **Build Tool**: Maven

### Frontend
* **Markup & Structure**: HTML5
* **Styling & Layout**: CSS3 (with responsive Flexbox/Grid layouts)
* **Interactivity & API Requests**: JavaScript (Fetch API / Async-Await)

---

## 📋 Prerequisites

Ensure you have the following installed on your local machine before starting setup:
* **Java Development Kit (JDK)** (Version 17 or higher recommended)
* **MySQL Server** (Version 8.0 or higher)
* **An IDE** (IntelliJ IDEA, Eclipse, or VS Code)
* **An External Weather API Key** (e.g., OpenWeatherMap or WeatherAPI)

---

## ⚙️ Installation & Setup

Follow these straightforward phases to get your development environment running.

### Phase 1: Configuration
Navigate to `src/main/resources/application.properties` in your backend source files and configure your external API tokens:

```properties
# Server configuration
server.port=8080

# External Weather API configuration
weather.api.key=YOUR_API_KEY_HERE
weather.api.base-url=https://openweathermap.org
```

### Phase 2: Building and Running the Backend
1. Open your terminal in the root directory of the `Weather-App` project.
2. Build and run the project using Maven:
   ```bash
   # Using Maven wrapper
   ./mvnw spring-boot:run
   ```

### Phase 3: Launching the Frontend
Since the frontend uses standard HTML, CSS, and JS:
1. Navigate to your frontend file directory (usually inside  `UI` directory).
2. Open `index.html` directly in any modern web browser or serve it using a local live-reload server extension (like VS Code Live Server).

---

## 🛣️ API Endpoints

The backend exposes the following primary REST endpoints:

| HTTP Method | Endpoint | Description |
| :--- | :--- | :--- |
| **GET** | `/api/weather?city={cityName}` | Fetches live weather conditions for the specified city. |
| **POST** | `/api/weather/favorites` | Adds a city to the persistent favorites catalog. |
---


