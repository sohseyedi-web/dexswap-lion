import axios from "axios";
import http from "./http";

export async function getPriceToken(token: string, chain: string) {
  try {
    const { data } = await http.get(`/erc20/${token}/price?chain=${chain}`);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getTOKENIRT(token: string) {
  try {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_IRT}/orderbook/${token}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
}
