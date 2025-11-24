import { useState } from "react";
import SearchBar from "./components/SearchBar";
import AQICard from "./components/AQICard";

function App() {
  const [aqiData, setAqiData] = useState(null);

  const handleSearch = async (city) => {
    try {
      const response = await fetch(
        `http://localhost:9090/api/air-quality/${city}`
      );

      if (!response.ok) {
        alert("City not found or server error!");
        return;
      }

      const data = await response.json();
      setAqiData(data);

    } catch (error) {
      alert("Error fetching data!");
      console.error(error);
    }
  };

  return (
    <div>
      <h2 style={{ textAlign: "center", marginTop: "40px" }}>
        Air Quality Index Search
      </h2>

      <SearchBar onSearch={handleSearch} />

      {/* Show AQI Card only when data exists */}
      <AQICard data={aqiData} />
    </div>
  );
}

export default App;
