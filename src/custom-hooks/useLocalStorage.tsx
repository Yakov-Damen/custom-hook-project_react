import { ChangeEvent, useState } from "react";

const useLocalStorage = (): [string, (e: ChangeEvent<HTMLInputElement>) => void, () => void] => {
  const [storageValue, setStorageValue] = useState(() => {
    const value = localStorage.getItem("input");
    return value || "";
  });
  const handleClick = () => {
    localStorage.removeItem("input");
    setStorageValue("");
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    localStorage.setItem("input", e.target.value);
    setStorageValue(e.target.value);
  };
  return [storageValue, handleChange, handleClick];
};
export default useLocalStorage;
