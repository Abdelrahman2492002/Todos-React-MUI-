import { createContext, useContext } from "react";
import { useState } from "react";

const ToastMessage = createContext({});

const ToastContext = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("success");

  const showHideToast = (actionMessage, severityState) => {
    setSeverity(severityState);
    setMessage(actionMessage);
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 2000);
  };

  const value = { open, showHideToast, message, severity };
  return (
    <ToastMessage.Provider value={value}>{children}</ToastMessage.Provider>
  );
};

export const useToast = () => useContext(ToastMessage);

export default ToastContext;
