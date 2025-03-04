import { RiSearchLine } from "react-icons/ri";
import TokenItem from "./TokenItem";
import { useTokenStore } from "@/store/useTokenStore";
import { useState } from "react";
import { TokenInterFace } from "@/types";
import { useTranslation } from "react-i18next";
import tokens from "@/constant/tokenList";
import { getPriceToken } from "@/service/tokenService";

const TokenListBox = ({ onClose }: { onClose: () => void }) => {
  const { updateItemData, setTokenPrice, selectedChain } = useTokenStore();
  const { t } = useTranslation();
  const [search, setSearch] = useState("");
  const [loadingTokens, setLoadingTokens] = useState<{
    [key: string]: boolean;
  }>({});

  const onChoiceToken = async (value: TokenInterFace) => {
    setLoadingTokens((prev) => ({ ...prev, [value._id]: true }));
    try {
      updateItemData(value);
      const data = await getPriceToken(value?.address, selectedChain);
      setTokenPrice(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingTokens((prev) => ({ ...prev, [value._id]: false }));
      onClose();
    }
  };

  const filterTokens = tokens
    .filter((token) => token.chain === selectedChain)
    .filter((token) => {
      const translatedName = t(token.name);
      const searchLower = search.toLowerCase();

      return translatedName.includes(searchLower);
    });

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
        {filterTokens?.length ? (
          filterTokens.map((token) => (
            <TokenItem
              key={token._id}
              token={token}
              loading={!!loadingTokens[token._id]}
              onChoice={onChoiceToken}
            />
          ))
        ) : (
          <div className="text-center text-lg text-[#2cb67d]">
            ارزی یافت نشد
          </div>
        )}
      </div>
    </section>
  );
};

export default TokenListBox;
