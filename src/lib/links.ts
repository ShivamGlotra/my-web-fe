export const isWebUrl = (href: string): boolean => /^https?:\/\//i.test(href);

export const isAppFile = (href: string): boolean => {
  // if (!href.startsWith("/") && !href.startsWith("#")) return false;
  // const path = href.split(/[?#]/)[0];
  // return !/\.[a-z0-9]+$/i.test(path);
  if (!href.startsWith("/")) return false;
  const path = href.split(/[?#]/)[0];
  return !/\.[a-z0-9]+$/i.test(path);
};
