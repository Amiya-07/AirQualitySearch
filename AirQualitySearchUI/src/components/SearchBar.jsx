import { useState } from "react";

function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() === "") {
      alert("Please enter a city name!");
      return;
    }
    onSearch(city);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "20px",
        gap: "10px"
      }}
    >
      <input
        type="text"
        placeholder="Enter city name..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={{
          padding: "12px 15px",
          width: "320px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          fontSize: "16px",
          boxShadow: "0px 2px 6px rgba(0,0,0,0.1)"
        }}
      />

      <button
        type="submit"
        style={{
          padding: "12px 25px",
          backgroundColor: "#0066ff",
          color: "white",
          border: "none",
          borderRadius: "8px",
          fontSize: "16px",
          cursor: "pointer",
          transition: "0.3s",
          boxShadow: "0px 3px 10px rgba(0,0,0,0.2)"
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "#004ccc")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "#0066ff")}
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
