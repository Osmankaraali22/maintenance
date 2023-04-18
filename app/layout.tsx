import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "kachfi scout shop",
  description:
    "kachfi is a scout shop in Lebanon that sells scout uniforms, equipment, and accessories. We also provide embroidery services for scout uniforms. We are located in Tripoli, Lebanon. We are open 24/24, Monday to Saturday. We also deliver to all Lebanese cities. We are the #1",
  authors: [
    { name: "osman karaali", url: "" },
    {
      name: "omar tabboush",
      url: "https://www.linkedin.com/in/omar-tabboush-25095b217/",
    },
    {
      name: "ahmad sarraj",
      url: "https://www.linkedin.com/in/ahmad-sarraj-b12a5420a/",
    },
  ],
  category: "scout shop",
  keywords: [
    "scout shop",
    "scout",
    "uniform",
    "equipment",
    "accessories",
    "embroidery",
    "lebanon",
    "tripoli",
    "delivery",
    "kachfi",
    "outdoor",
    "camping",
    "hiking",
    "climbing",
    "backpacking",
    "camping gear",
    "camping equipment",
    "camping supplies",
    "camping store",
    "camping store near me",
    "camping store online",
    "camping store online",
    "camping store",
    "camping store near me",
    "camping store online",
    "camping store online",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
