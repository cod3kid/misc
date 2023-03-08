import { useRef } from "react";

export const useCustomEffect = (sideEffect, dep) => {
  const isFirstRender = useRef(true);

  if (isFirstRender.current) {
    sideEffect();
    isFirstRender.current = false;
    return;
  }
};
