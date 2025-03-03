import http from "./http";

export async function getPriceToken(token: string, chain: string) {
  try {
    const { data } = await http.get(`/erc20/${token}/price?chain=${chain}`);
    return data;
  } catch (error) {
    console.log(error);
  }
}
