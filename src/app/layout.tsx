import "@/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Higher.AI - Career Growth Platform",
  description:
    "An AI-powered platform for career growth, learning, and job matching",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable}`}
      suppressHydrationWarning
    >
      <body
        className="min-h-screen bg-background font-sans antialiased"
        suppressHydrationWarning
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
