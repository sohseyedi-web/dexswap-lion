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

// export async function getTOKENIRT(token: string) {
//   try {
//     const { data } = await axios.get(
//       `${import.meta.env.VITE_API_NOBITEX}/orderbook/${token}`
//     );
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// }

export async function getUsdtPrice() {
  try {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_TETHERLAND}/currencies`
    );
    return data?.data?.currencies;
  } catch (error) {
    console.log(error);
  }
}
