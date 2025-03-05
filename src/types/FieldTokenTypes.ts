import { TokenInterFace } from "./TokenTypes";

export type FieldTokenTypes = {
  title: string;
  number: number;
  token: TokenInterFace;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children : React.ReactNode
};
