import { toPersianNumbersWithComma } from "./toPersianNumber";

export function formatPrice(num: number): string {
  const integerPart = Math.floor(num);

  if (integerPart === 0) {
    return toPersianNumbersWithComma(num.toFixed(2));
  } else {
    return toPersianNumbersWithComma(integerPart.toString());
  }
}
