import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque } from "next/font/google";
import "@/styles/main.scss";
import { themeScript } from "@/lib/theme";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  weight: ["600"],
  display: "swap",
  subsets: ["latin"],
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${bricolageGrotesque.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
