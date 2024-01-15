

async function getKanye() {
    const response = await fetch("https://api.kanye.rest/")
    const quote = await response.json();
    return quote.quote
}

export default getKanye