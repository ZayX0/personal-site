export default async function getBitcoinPrice(
  startDate: string,
  endDate: string
) {
  const response = await fetch(
    "https://api.polygon.io/v2/aggs/ticker/X:BTCUSD/range/1/day/" +
      startDate +
      "/" +
      endDate +
      "?adjusted=true&sort=asc&limit=120&apiKey=FIqoBDpeCscGfkRycpqzIzzeW762yDxw"
  );
  const data = await response.json();
  return data;
}
