import { useRef, useState } from "react";
import getBitcoinPrice from "../data/polygonCall";
import LineChart from "./lineChart";
import { Chart, CategoryScale } from "chart.js/auto";

interface PriceDataObjectState {
  labels: Array<Number>;
  datasets: Array<Object>;
}

export default function Bitcoin() {
  Chart.register(CategoryScale);
  const ref = useRef<Chart>();

  function updateChart() {
    if (ref && ref.current) {
      ref.current.update();
    }
  }

  const [formData, setFormData] = useState({
    priceStart: "",
    priceEnd: "",
  });

  const [priceData, setPriceData] = useState<PriceDataObjectState>({
    labels: [],
    datasets: [],
  });

  const [hasSubmitted, setHasSubmitted] = useState(false);

  const handleDateChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const rawPriceData = await getBitcoinPrice(
      formData.priceStart,
      formData.priceEnd
    );
    setPriceData((prev) => ({
      ...prev,
      labels: rawPriceData.results.map((_data, index) => index + 1),
      datasets: [
        {
          label: "Bitcoin Price",
          data: rawPriceData.results.map((data) => data.c),
          fill: false,
          borderColor: ["#FFFFFF"],
        },
      ],
    }));
    updateChart();
    setHasSubmitted(true);
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
      {hasSubmitted ? (
        <div style={{ width: 900, margin: "auto", marginTop: "1em" }}>
          <LineChart chartData={priceData} />
        </div>
      ) : null}
    </>
  );
}
