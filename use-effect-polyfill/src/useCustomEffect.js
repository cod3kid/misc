import { useRef } from "react";

export const useCustomEffect = (sideEffect, dep) => {
  const isFirstRender = useRef(true);
  const prevDeps = useRef([]);

  if (isFirstRender.current) {
    sideEffect();
    isFirstRender.current = false;
    return;
  }

  const depsChanged = dep
    ? JSON.stringify(dep) !== JSON.stringify(prevDeps.current)
    : true;

  if (depsChanged) {
    sideEffect();
  }

  prevDeps.current = dep || [];
};
