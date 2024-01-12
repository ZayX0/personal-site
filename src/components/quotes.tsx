import getKanye from "../kanyeCall"
import { useState } from "react";

const Quotes = () => {
    const [quote, setQuote] = useState("")

    return (
        <div>
            <p style={{color: "white"}}>Kanye says: {quote}</p>
            <div className="button-container">
                <button id="increase-counter-button" onClick={async () => setQuote(await getKanye())}>
                    Click get a Kanye quote
                </button>
            </div>
        </div>
    )
}

export default Quotes