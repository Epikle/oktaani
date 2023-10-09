import { cn } from "@/utils/utils";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "oktaani",
  description:
    "This is a portfolio page showcasing all of my oktaani-branded web applications.",
  metadataBase: new URL("https://oktaani.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "grainy grid min-h-screen")}>
        {children}
      </body>
    </html>
  );
}
