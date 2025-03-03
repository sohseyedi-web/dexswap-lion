import { useState } from "react";
import { RiInformation2Line } from "react-icons/ri";
import { TbCopy } from "react-icons/tb";
import ModalWrapper from "@/ui/ModalWrapper";
import { useTokenStore } from "@/store/useTokenStore";
import { TokenInterFace } from "@/types";
import { useTranslation } from "react-i18next";
import { formatPrice } from "@/utils/formatPrice";
import { CopyToClipboard } from "react-copy-to-clipboard";
import toast from "react-hot-toast";
import { toPersianNumbers } from "@/utils/toPersianNumber";

const TokenPriceContent = ({ token }: { token: TokenInterFace }) => {
  const { token1Price, token2Price } = useTokenStore();
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const showToken =
    token?.address === token1Price?.tokenAddress ? token1Price : token2Price;

  const onShortAddress = (address?: string): string =>
    address && address.length > 6
      ? `${address.slice(0, 5)}...${address.slice(-5)}`
      : address || "نامشخص";

  const onCopyHandler = () => {
    toast.success("آدرس کپی شد");
  };

  return (
    <div className="flex items-center justify-between pt-2">
      <p className="text-sm text-zinc-400 transition-all">
        قیمت :
        <span className="font-semibold text-[#2cb67d] md:ml-2">
          {formatPrice(showToken?.usdPrice)} $
        </span>
      </p>
      <div className="flex items-center gap-x-2 text-[#2cb67d]">
        <span className="cursor-pointer text-sm">تومان</span>
        <RiInformation2Line
          size={20}
          className="cursor-pointer"
          onClick={() => setIsOpen(true)}
        />
      </div>
      <ModalWrapper
        title="اطلاعات ارز"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <div className="space-y-4 lg:text-base text-sm">
          <InfoRow label="نام ارز:" value={t(token?.name)} />
          <InfoRow
            label="شبکه:"
            value={token.chain === "eth" ? "اتریوم" : "بایننس اسمارت چین"}
          />
          <InfoRow
            label="قیمت به دلار:"
            value={`${formatPrice(showToken?.usdPrice)} $`}
          />
          <InfoRow
            label="قیمت به تومان:"
            value={`${formatPrice(showToken?.usdPrice * 90000)} تومان`}
          />
          <InfoRow
            label="تغییرات ۲۴ ساعت:"
            value={`${toPersianNumbers(
              String(showToken?.usdPrice24hrPercentChange).slice(0, 3)
            )} درصد`}
          />
          <div className="flex items-center justify-between">
            <InfoRow
              label="آدرس ارز:"
              value={onShortAddress(showToken?.tokenAddress)}
            />
            <CopyToClipboard
              text={showToken?.tokenAddress || ""}
              onCopy={onCopyHandler}
            >
              <TbCopy size={22} className="cursor-pointer text-zinc-300" />
            </CopyToClipboard>
          </div>
        </div>
      </ModalWrapper>
    </div>
  );
};

const InfoRow = ({ label, value }: { label: string; value: string }) => (
  <div className="flex items-center gap-x-3">
    <span className="font-semibold text-[#2cb674]">{label}</span>
    <span className="font-semibold">{value}</span>
  </div>
);

export default TokenPriceContent;
