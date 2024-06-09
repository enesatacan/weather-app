import React, { useState } from "react";

function SearchCity({ onCityChange }) {
  const [city, setCity] = useState("");

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCityChange(city);
  };

  return (
    <div
      style={{
        width: "60%",
        backgroundColor: "gray",
        borderRadius: "10px 10px 0px 0px",
      }}
    >
      <form
        style={{
          textAlign: "center",
          padding: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onSubmit={handleSubmit}
      >
        <input
          style={{
            border: "1px solid green",
            borderRadius: "4px",
            padding: "10px",
            marginRight: "10px",
          }}
          value={city}
          onChange={handleChange}
          type="text"
          placeholder="Şehir girin"
        />
        <input
          style={{
            border: "1px solid gray",
            borderRadius: "4px",
            padding: "10px",
            backgroundColor: "green",
            color: "white",
            cursor: "pointer",
          }}
          type="submit"
          value="SEND"
        />
      </form>
    </div>
  );
}

export default SearchCity;
