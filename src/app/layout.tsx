import type { Metadata } from "next";
import { Crimson_Pro, Montserrat } from "next/font/google";
import "@/styles/main.scss";
import { themeScript } from "@/lib/theme";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const crimsonPro = Crimson_Pro({
  variable: "--font-crimson",
  weight: ["400"],
  display: "swap",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Shivam Glotra",
  description: "Shivam Glotra's personal website",
  icons: {
    icon: "/favicon.ico",
  },
  // openGraph: {
  //   title: "Shivam Glotra",
  //   description: "Shivam Glotra's personal website",
  //   url: "https://shivamglotra.com",
  //   siteName: "Shivam Glotra",
  //   images: [
  //     {
  //       url: "/og-image.png",
  //       width: 1200,
  //       height: 630,
  //     },
  //   ],
  //   locale: "en-US",
  //   type: "website",
  // },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${crimsonPro.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
