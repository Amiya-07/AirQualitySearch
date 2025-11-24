function AQICard({ data }) {
  if (!data) return null; // If no data, hide the card

  const getAQIColor = (aqi) => {
    if (aqi <= 50) return "#4CAF50";     // Good
    if (aqi <= 100) return "#FFEB3B";    // Moderate
    if (aqi <= 200) return "#FF9800";    // Unhealthy for Sensitive Groups
    return "#F44336";                    // Unhealthy
  };

  return (
    <>
      {/* Fade-in animation */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>

      <div
        style={{
          width: "420px",
          margin: "30px auto",
          padding: "25px",
          borderRadius: "16px",
          backgroundColor: "#ffffff",
          boxShadow: "0px 10px 25px rgba(0,0,0,0.15)",
          animation: "fadeIn 0.4s",
        }}
      >
        <h3 style={{ textAlign: "center", marginBottom: "15px", fontSize: "20px" }}>
          {data.cityName}
        </h3>

        <div
          style={{
            backgroundColor: getAQIColor(data.aqi),
            padding: "20px",
            borderRadius: "12px",
            color: "#ffffff",
            textAlign: "center",
            fontSize: "30px",
            fontWeight: "bold",
            marginBottom: "20px"
          }}
        >
          AQI: {data.aqi}
        </div>

        <p style={{ margin: "10px 0", fontSize: "16px" }}>
          <strong>Status:</strong> {data.airQualityStatus}
        </p>

        <p style={{ margin: "10px 0", fontSize: "16px" }}>
          <strong>Dominant Pollutant:</strong> {data.dominantPollutant}
        </p>

        <p style={{ margin: "10px 0", fontSize: "16px" }}>
          <strong>Last Updated:</strong> {data.lastUpdated}
        </p>
      </div>
    </>
  );
}

export default AQICard;
