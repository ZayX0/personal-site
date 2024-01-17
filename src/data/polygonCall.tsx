export type Prices = {
  adjusted: boolean;
  count: number;
  queryCount: number;
  requestId: string;
  results: Array<Results>;
  resultsCount: number;
  status: string;
  ticker: string;
};

export type Results = {
  c: number;
  h: number;
  l: number;
  n: number;
  o: number;
  t: number;
  v: number;
  vw: number;
};

export default async function getBitcoinPrice(
  startDate: string,
  endDate: string
): Promise<Prices> {
  const response = await fetch(
    "https://api.polygon.io/v2/aggs/ticker/X:BTCUSD/range/1/day/" +
      startDate +
      "/" +
      endDate +
      "?adjusted=true&sort=asc&limit=120&apiKey=FIqoBDpeCscGfkRycpqzIzzeW762yDxw"
  );
  const data = await response.json();
  const priceInfo: Prices = {
    adjusted: data.adjusted,
    count: data.count,
    queryCount: data.queryCount,
    requestId: data.request_id,
    results: data.results,
    resultsCount: data.resultsCount,
    status: data.status,
    ticker: data.ticker,
  };
  return priceInfo;
}
