import { useEffect, useState } from "react";

export default function useDebouncer(value,otherValueToWatch) {

    
  const [debounceValue, setDebounceValue] = useState(null);

  const MIN_LENGHT = 0;

  const DELAY = 1000;

  useEffect(() => {
    const searchText = value;

    if (searchText?.length < MIN_LENGHT) return;

    const debounceTimeout = setTimeout(() => {
      setDebounceValue(searchText);
    }, DELAY);

    return () => {
      clearTimeout(debounceTimeout);
    };
  }, [value, otherValueToWatch]);

  return debounceValue;
}
