import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [data, setData] = useState(() => {
    const storedValue = JSON.parse(localStorage.getItem(key));
    if (storedValue === null) {
      localStorage.setItem(key, JSON.stringify(initialValue));
      return initialValue;
    } else {
      return storedValue;
    }
  });
  const handleChange = (newValue) => {
    localStorage.setItem(key, JSON.stringify(newValue));
    setData(newValue);
  };
  return [data, handleChange];
};