import { useConnect, useAccount, useDisconnect } from "wagmi";
import ButtonAction from "@/ui/ButtonAction";
import toast from "react-hot-toast";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";
import { HiWallet } from "react-icons/hi2";
import { TbWallet, TbLogout2 } from "react-icons/tb";
import ModalWrapper from "@/ui/ModalWrapper";

const ConnectButton = () => {
  const { address, isConnected, connector } = useAccount();
  const { disconnect } = useDisconnect();
  const isMobile = window.innerWidth > 768;
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const { connect, connectors, isPending } = useConnect({
    mutation: {
      onSuccess() {
        toast.success("با موفقیت به کیف پول متصل شدید");
      },
      onError(error) {
        if (error.message.includes("Connector not found")) {
          toast.error("متامسک پیدا نشد. لطفاً آن را نصب کنید.");
          window.open("https://metamask.io/download/", "_blank");
        } else if (error.message.includes("User rejected")) {
          toast.error("شما درخواست اتصال را رد کردید.");
        } else {
          toast.error(`خطا در اتصال: ${error.message}`);
        }
        console.error("خطا در اتصال به کیف پول:", error);
      },
    },
  });

  const handleConnect = async () => {
    const metamaskConnector = connectors.find((c) => c.name === "MetaMask");

    if (!metamaskConnector) {
      toast.error("متامسک پیدا نشد. لطفاً آن را نصب کنید.");
      window.open("https://metamask.io/download/", "_blank");
      return;
    }

    try {
      await connect({ connector: metamaskConnector });
    } catch (err: any) {
      console.error("خطا در اتصال:", err);
    }
  };

  const shortenAddress = (address?: string) => {
    if (!address) return "";
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  const handleCopy = () => {
    setCopied(true);
    toast.success("آدرس کپی شد!");

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const handleDisconnect = () => {
    disconnect();
    toast.success("با موفقیت از کیف پول خارج شدید");
  };

  if (isConnected && address) {
    return (
      <div className="flex items-center gap-2">
        <CopyToClipboard text={address} onCopy={handleCopy}>
          <ButtonAction
            className={`md:w-[180px] ${
              copied ? "border-zinc-600" : " border-zinc-800"
            } w-[45px] md:h-[50px] h-[45px] md:block flex items-center justify-center bg-transparent hover:bg-zinc-900 text-[#2cb67d]`}
            loading={isPending}
            child={
              isMobile ? (
                <div className="flex items-center justify-center gap-x-2">
                  <span className="lg:text-base md:text-sm">
                    {shortenAddress(address)}
                  </span>
                  <img
                    src="/images/metamask.png"
                    alt={connector?.name}
                    className="size-6 object-cover"
                  />
                </div>
              ) : (
                <HiWallet size={30} />
              )
            }
          />
        </CopyToClipboard>
        <TbLogout2
          size={30}
          className="text-red-500 cursor-pointer"
          onClick={handleDisconnect}
        />
      </div>
    );
  }

  return (
    <>
      <ButtonAction
        className="w-[180px] h-[50px] md:block hidden"
        child={isPending ? "در حال اتصال..." : "اتصال به کیف پول"}
        loading={isPending}
        onClick={() => setIsOpen(true)}
      />
      <ButtonAction
        className="w-[45px] h-[45px] md:hidden flex items-center justify-center"
        child={<TbWallet size={30} />}
        loading={false}
        onClick={() => setIsOpen(true)}
      />
      <ModalWrapper
        isOpen={isOpen}
        title="اتصال به کیف پول"
        onClose={() => setIsOpen(false)}
      >
        <div className="rounded-2xl bg-zinc-800 p-3 flex items-center justify-evenly">
          <div
            onClick={handleConnect}
            className="flex items-center py-1 flex-col justify-center bg-zinc-900 rounded-2xl w-[20%] border-zinc-800 cursor-pointer"
          >
            <img
              src="/images/metamask.png"
              alt="metamask"
              className="size-12 object-cover"
            />
            <p className="text-white font-semibold mt-2">متامسک</p>
          </div>
        </div>
      </ModalWrapper>
    </>
  );
};

export default ConnectButton;
