import { createContext, useContext, useEffect, useState } from "react";

const DarkModeContext = createContext({
  isDarkMode: false,
  toggleDarkMode: () => {},
});

export function DarkModeProvider({ children }: { children: React.ReactNode }){
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("darkmode") === "true";
  });
  useEffect(() => {
    document.body.style.transition = "background-color 0.3s ease-in-out, color 0.3s ease-in-out";
    document.body.className = isDarkMode ? "bg-dark text-light" : "bg-light text-dark";
    localStorage.setItem("darkmode", String(isDarkMode));
  }, [isDarkMode]);
  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);
  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  )
}
export function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (!context) throw new Error("useDarkMode must be used within a DarkModeProvider");
  return context;
}
