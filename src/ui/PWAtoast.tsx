import { useEffect, useState } from "react";
import ModalWrapper from "./ModalWrapper";

function PWAPrompt() {
  const [isVisible, setIsVisible] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  useEffect(() => {
    const hasUserDismissed = localStorage.getItem("pwa-prompt-dismissed");
    const isPWAInstalled = window.matchMedia(
      "(display-mode: standalone)"
    ).matches;

    if (hasUserDismissed || isPWAInstalled) {
      return;
    }

    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setTimeout(() => {
        setIsVisible(true);
      }, 1000);
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();

    const { outcome } = await deferredPrompt.userChoice;

    setDeferredPrompt(null);
    setIsVisible(false);

    if (outcome === "accepted") {
      console.log("کاربر PWA را نصب کرد");
    } else {
      console.log("کاربر PWA را نصب نکرد");
    }
  };

  const handleDismiss = () => {
    localStorage.setItem("pwa-prompt-dismissed", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <ModalWrapper
      isOpen={isVisible}
      onClose={handleDismiss}
      title="نصب اپلیکیشن"
      className="w-[85%] md:w-[50%] lg:w-[30%]"
    >
      <div dir="rtl">
        <div className="flex-1">
          <p className="text-zinc-300 text-sm">
            شما می‌توانید این برنامه را روی دستگاه خود نصب کنید و به صورت یک
            اپلیکیشن مستقل از آن استفاده کنید.
          </p>
        </div>
        <div className="mt-4 flex space-x-3 space-x-reverse">
          <button
            onClick={handleInstall}
            className="flex-1 bg-[#2cb67d] text-white px-4 py-2 rounded-md hover:bg-emerald-500 transition-colors"
          >
            نصب برنامه
          </button>
          <button
            onClick={handleDismiss}
            className="flex-1 bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200 transition-colors"
          >
            فعلاً نه
          </button>
        </div>
      </div>
    </ModalWrapper>
  );
}

export default PWAPrompt;
