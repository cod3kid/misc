import { useCallback, useRef } from "react";

const useThrottle = (callback, delay) => {
  const lastCall = useRef(0);
  const timeout = useRef(null);

  return useCallback(
    (...args) => {
      const now = Date.now();

      if (now - lastCall.current >= delay) {
        if (timeout.current) {
          clearTimeout(timeout.current);
          timeout.current = null;
        }
        callback(...args);
        lastCall.current = now;
      } else {
        if (!timeout.current) {
          timeout.current = setTimeout(() => {
            callback(...args);
            lastCall.current = Date.now();
            timeout.current = null;
          }, delay - (now - lastCall.current));
        }
      }
    },
    [callback, delay]
  );
};

export default useThrottle;
