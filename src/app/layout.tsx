// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "School",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.className}>
      <body className="bg-[#0d1117] min-h-screen">{children}</body>
    </html>
  );
}
