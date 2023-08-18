import "./globals.css";
import type { Metadata } from "next";
import { Fira_Mono } from "next/font/google";
import { Providers } from "./providers";

const font = Fira_Mono({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Remote Games",
  description: "Play games with people remotely.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
