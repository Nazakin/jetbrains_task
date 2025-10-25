import { useMemo } from "react";

export const useCleanName = (name: string): string => {
  return useMemo(() => {
    if (!name) return "";

    const index = name.indexOf(":");
    if (index !== -1) {
      return name.slice(index + 1).trim();
    }

    return name.trim();
  }, [name]);
};
