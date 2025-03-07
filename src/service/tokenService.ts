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
export async function getUsdtPriceOk() {
  try {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_OK}?symbol=USDT-IRT`
    );
    return data?.ticker;
  } catch (error) {
    console.log(error);
  }
}
export async function getUsdtPriceExir() {
  try {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_EXIR}?symbol=usdt-irt`
    );
    return data?.results?.symbols?.USDTTMN?.stats;
  } catch (error) {
    console.log(error);
  }
}
export async function getUsdtPriceWallex() {
  try {
    const { data } = await axios.get(`${import.meta.env.VITE_API_WALLEX}`);
    return data;
  } catch (error) {
    console.log(error);
  }
}
