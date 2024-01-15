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
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const priceData = await getBitcoinPrice(
      formData.priceStart,
      formData.priceEnd
    );
    return priceData.results;
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
