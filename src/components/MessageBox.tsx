import clsx from "clsx";
import checkIcon from "../assets/check-icon.svg";
import { useEffect, useState } from "react";

type MessageBoxProp = { isSent: boolean; onReset: () => void };

function MessageBox({ isSent, onReset }: MessageBoxProp) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!isSent) return;

    setVisible(true);

    const timer = setTimeout(() => setVisible(false), 4500);

    return () => clearTimeout(timer);
  }, [isSent]);

  useEffect(() => {
    if (!visible && isSent) {
      const timer = setTimeout(onReset, 3000);

      return () => clearTimeout(timer);
    }
  }, [visible, isSent, onReset]);

  if (!isSent) return null;

  return (
    <div
      className={clsx(
        "absolute bg-gray-900 p-6 m-6 top-0 rounded-xl max-w-81.75",
        "transform transition-all duration-3000 ease-out",
        visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2",
        "sm:max-w-112.5",
      )}
    >
      <p className="text-white flex gap-2 font-semibold text-lg mb-2">
        <img src={checkIcon} alt="circle icon with checked symbol inside." />
        <span>Message Sent!</span>
      </p>
      <p className="text-green-200 font-light">
        Thanks for completing the form. We’ll be in touch soon!
      </p>
    </div>
  );
}

export default MessageBox;
