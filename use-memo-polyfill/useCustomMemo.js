import { useEffect, useRef } from "react";

const useCustomMemo = (cb, dep) => {
  const cache = useRef(null);

  if (
    !cache.current ||
    JSON.stringify(cache.current.prevDep) !== JSON.stringify(dep)
  ) {
    cache.current = {
      value: cb(),
      prevDep: dep,
    };
  }

  return cache.current.value;
};

export default useCustomMemo;
