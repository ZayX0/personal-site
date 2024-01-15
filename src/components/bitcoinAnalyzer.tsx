import { useState } from "react";
import getBitcoinPrice from "../data/polygonCall";

export default function Bitcoin() {
  const [formData, setFormData] = useState({
    priceStart: "",
    priceEnd: "",
  });
  const handleDateChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData.priceStart);
    console.log(formData.priceEnd);
  };
  return (
    <>
      <form id="bitcoinDates" onSubmit={handleSubmit}>
        <div id="startDate-picker">
          <label>Start Date:</label>
          <input
            type="date"
            id="start"
            name="priceStart"
            value={formData.priceStart}
            min="2020-08-29"
            max={new Date().toISOString().split("T")[0]}
            onChange={handleDateChange}
          />
        </div>
        <div id="endDate-picker">
          <label>End Date:</label>
          <input
            type="date"
            id="end"
            name="priceEnd"
            value={formData.priceEnd}
            min="2020-08-29"
            max={new Date().toISOString().split("T")[0]}
            onChange={handleDateChange}
          />
        </div>
        <button type="submit" className="mid-page-button">
          Submit
        </button>
      </form>
    </>
  );
}
// Make API call to Polygon.io to get bitcoin price over past week
// Look at World News API for getting bitcoin news for each day over week
// new Date().toISOString().split("T")[0]
