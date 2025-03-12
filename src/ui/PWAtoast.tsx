import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

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
      setIsVisible(true);
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
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{
            duration: 0.2,
            ease: "easeOut",
          }}
          className="fixed top-4 right-5 md:w-96 bg-[#202020] rounded-lg shadow-xl p-4 border border-zinc-800"
          dir="rtl"
        >
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-zinc-100 mb-1">
                نصب اپلیکیشن
              </h3>
              <p className="text-zinc-300 text-sm">
                شما می‌توانید این برنامه را روی دستگاه خود نصب کنید و به صورت یک
                اپلیکیشن مستقل از آن استفاده کنید.
              </p>
            </div>
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
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default PWAPrompt;
