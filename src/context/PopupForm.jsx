// PrequalContext.jsx
import { createContext, useContext, useState } from "react";
import QuickPrequalForm from "../components/Form";

const PrequalContext = createContext(null);

export function PrequalProvider({ children }) {
  const [open, setOpen] = useState(false);

  const openPrequal = () => setOpen(true);
  const closePrequal = () => setOpen(false);

  return (
    <PrequalContext.Provider value={{ openPrequal, closePrequal }}>
      {children}
      <QuickPrequalForm isOpen={open} onClose={closePrequal} />
    </PrequalContext.Provider>
  );
}

export function usePrequal() {
  const ctx = useContext(PrequalContext);
  if (!ctx) throw new Error("usePrequal must be used inside PrequalProvider");
  return ctx;
}
