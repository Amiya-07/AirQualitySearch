# 🌿 AQI Search Application  
*A Full-Stack Air Quality Index Search App using Spring Boot (Backend) & React.js (Frontend)*

---

## 📌 Overview

AQI Search Application is a full-stack project that allows users to search real-time **Air Quality Index (AQI)** for any city.

- 🔧 **Backend:** Java + Spring Boot  
- 🎨 **Frontend:** React.js  
- ⚡ **Performance:** Caching enabled for faster responses  
- 🌍 Fetches live AQI data from external API (AQICN)

This project is suitable for:
- Internship assignment submissions  
- Portfolio showcase  
- Learning Spring Boot + React integration  
- Full-stack practice

---

## 🚀 Features

### 🟦 Frontend (React.js)
- Beautiful and modern UI  
- Search bar for city input  
- Dynamic AQI card with color coding  
- Fully responsive  
- Clear air quality indicators  
- Error message for invalid city searches  

### 🔧 Backend (Spring Boot)
- REST API endpoint: `/api/aqi/{city}`
- Calls external AQICN API  
- Uses `RestTemplate`  
- Implements **Spring Cache** for performance  
- Clean code structure (Controller → Service → Model → Config)  

---

## 📁 Project Structure

      AirQualitySearch/
    │── AirQualitySearch/ # Backend (Spring Boot)
    │ ├── src/main/java/com/aqi/
    │ │ ├── controller/
    │ │ ├── service/
    │ │ ├── config/
    │ │ ├── model/
    │ │ └── AirQualitySearchApplication.java
    │ └── src/main/resources/application.properties
    │
    │── AirQualitySearchUI/ # Frontend (React App)
    │ ├── src/
    │ │ ├── components/
    │ │ │ ├── SearchBar.jsx
    │ │ │ ├── AQICard.jsx
    │ │ └── App.js
    │ └── public/index.html



---

## 🔌 API Used

    **AQICN (World Air Quality Index API)**  
    Documentation: https://aqicn.org/api/
    

  private static final String TOKEN = "3eac61246f2d387ac0f9a1be53e1f4256dff6b23";

  ## 🔥 How to Run the Project

### 🟦 Backend (Spring Boot)

1. Navigate to backend folder
   
2. Run Spring Boot app


Backend runs at:

👉 http://localhost:9090

API Endpoint


### 🟩 Frontend (React.js)

1. Navigate to frontend folder

2. Install dependencies

3. Run app


Frontend runs at:

👉 http://localhost:3000


## 🛠 Tech Stack

### Backend
- Java 21  
- Spring Boot  
- Spring Web  
- Spring Cache  
- RestTemplate  
- Maven  

### Frontend
- React.js  
- JavaScript  
- CSS3  
- HTML5  


## ⚡ Performance

- Cached AQI responses for repeated city searches  
- Reduced external API calls  
- Fast and responsive UI  


