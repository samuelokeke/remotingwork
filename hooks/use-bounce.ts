import { useEffect, useState } from "react";

export function useDebounce<T>(value: T, delay: number = 500) {
  const [debounceValue, setDebounceValue] = useState<T>();

  useEffect(() => {
    const timeout: NodeJS.Timeout = setTimeout(() => setDebounceValue(value), delay);

    return () => clearTimeout(timeout);
  }, [value]);

	return debounceValue;
}
