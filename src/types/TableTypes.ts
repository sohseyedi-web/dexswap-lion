export interface TableInterface {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: string;
  market_cap_rank: number;
  high_24h: number;
  low_24h: number;
  price_change_percentage_24h: number;
  last_updated: string;
}
