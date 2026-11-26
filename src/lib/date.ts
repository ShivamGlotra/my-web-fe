import { cacheLife } from "next/cache";

// The current year, refreshed daily
export const getCurrentYear = (): Promise<number> => {
  "use cache";
  cacheLife("days");
  return Promise.resolve(new Date().getFullYear());
};
