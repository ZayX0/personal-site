import getKanye from "../data/kanyeCall";
import { useState } from "react";

const Quotes = () => {
  const [quote, setQuote] = useState("");

  return (
    <div id="quote">
      <p>Kanye says: {quote}</p>
      <div className="button-container">
        <button
          id="increase-counter-button"
          onClick={async () => setQuote(await getKanye())}
        >
          Click to get a Kanye quote
        </button>
      </div>
    </div>
  );
};

export default Quotes;
