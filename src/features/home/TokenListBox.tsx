import tokens from "@/constant/tokenList";
import { RiSearchLine } from "react-icons/ri";
import TokenItem from "./TokenItem";
import { useTokenStore } from "@/store/useTokenStore";
import { useState } from "react";
import { TokenInterFace } from "@/types";

const TokenListBox = ({ onClose }: { onClose: () => void }) => {
  const { updateItemData } = useTokenStore();
  const [search, setSearch] = useState("");

  const onChoiceToken = (value: TokenInterFace) => {
    updateItemData(value);
    onClose();
  };

  const filterTokens = tokens.filter(
    (token) => token.name.includes(search) || token.symbol.includes(search)
  );

  return (
    <section className="space-y-4">
      <div className="relative w-full">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="جستجوی ارز ..."
          className="w-full pr-12 placeholder:text-zinc-500 outline-none h-[50px] rounded-2xl bg-transparent border border-zinc-700"
        />
        <RiSearchLine
          size={28}
          className="absolute text-emerald-700 top-3 right-2 rotate-90"
        />
      </div>
      <hr className="border-zinc-700" />
      {/* tokens list */}
      <div className="h-[200px] overflow-y-auto scroll">
        {filterTokens.map((token) => (
          <TokenItem key={token._id} token={token} onChoice={onChoiceToken} />
        ))}
      </div>
    </section>
  );
};

export default TokenListBox;
