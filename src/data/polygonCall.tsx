export default function getBitcoinPrice(startDate: Date, endDate: Date) {
  const currentPrice = fetch(
    "https://api.polygon.io/v2/aggs/ticker/X:BTCUSD/range/1/day/}" +
      { startDate } +
      "/" +
      { endDate } +
      "?adjusted=true&sort=asc&limit=120&apiKey=FIqoBDpeCscGfkRycpqzIzzeW762yDxw"
  );
}
