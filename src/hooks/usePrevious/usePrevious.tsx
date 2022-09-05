import { useEffect, useRef } from 'preact/hooks';

// from: https://usehooks.com/usePrevious/
function usePrevious<Type>(value: Type) {
  const ref = useRef(value);

  // Only re-run if value changes
  useEffect(() => {
    ref.current = value;
  }, [value]);

  // Return previous value (happens before update in useEffect above)
  return ref.current;
}

export { usePrevious };
