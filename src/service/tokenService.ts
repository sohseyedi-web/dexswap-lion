import http from "./http";

export async function getPriceToken(token: string) {
  try {
    const { data } = await http.get(`/erc20/${token}/price?chain=eth`);
    return data;
  } catch (error) {
    console.log(error);
  }
}
