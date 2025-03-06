import { useTokenStore } from "@/store/useTokenStore";
import { TokenPriceInterFace } from "@/types";
import { formatPrice } from "@/utils/formatPrice";
import { toPersianNumbers } from "@/utils/toPersianNumber";
import CopyToClipboard from "react-copy-to-clipboard";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { TbCopy, TbObjectScan } from "react-icons/tb";

type TokenInfoModalType = {
  showToken: TokenPriceInterFace;
  chain: string;
};

const TokenInfoModal = ({ showToken, chain }: TokenInfoModalType) => {
  const { t } = useTranslation();
  const { toman } = useTokenStore();

  const onShortAddress = (address?: string): string =>
    address && address.length > 6
      ? `${address.slice(0, 5)}...${address.slice(-5)}`
      : address || "نامشخص";

  const onCopyHandler = () => {
    toast.success("آدرس کپی شد");
  };

  const dynamicLinkScan =
    chain === "bsc"
      ? `https://bscscan.com/address/${showToken?.tokenAddress}`
      : `https://etherscan.io/token/${showToken?.tokenAddress}`;

  return (
    <div className="space-y-4 lg:text-base text-sm">
      <div className="flex items-center justify-between">
        <InfoRow label="نام ارز:" value={t(showToken?.tokenName)} />
        <a href={dynamicLinkScan} target="_blank">
          <TbObjectScan size={22} className="cursor-pointer text-zinc-300" />
        </a>
      </div>
      <InfoRow
        label="شبکه:"
        value={chain === "eth" ? "اتریوم" : "بایننس اسمارت چین"}
      />
      <InfoRow
        label="قیمت هر واحد به دلار:"
        value={`${formatPrice(showToken?.usdPrice)} $`}
      />
      <InfoRow
        label="قیمت هر واحد به تومان:"
        value={`${formatPrice(showToken?.usdPrice * toman)} تومان`}
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
  );
};

const InfoRow = ({ label, value }: { label: string; value: string }) => (
  <div className="flex items-center gap-x-3">
    <span className="font-semibold text-[#2cb674]">{label}</span>
    <span className="font-semibold">{value}</span>
  </div>
);

export default TokenInfoModal;
