import { notFound } from "next/navigation";

export const metadata = { robots: { index: false } };

const ShowcasePage = async () => {
  if (process.env.NODE_ENV === "production") notFound();

  return <div></div>;
};

export default ShowcasePage;
