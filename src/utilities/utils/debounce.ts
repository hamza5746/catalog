import { MutableRefObject } from 'react';

export const debounce = (
  debounceTimeoutRef: MutableRefObject<NodeJS.Timeout | null>,
  func: () => void,
  delay: number
) => {
  if (debounceTimeoutRef.current) {
    clearTimeout(debounceTimeoutRef.current);
  }

  debounceTimeoutRef.current = setTimeout(func, delay);
};
