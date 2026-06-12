import { cn } from "@/lib/utils";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "../footer";
import { Header } from "../header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => (
  <div
    className={cn(
      "relative flex min-h-screen flex-col font-sans dark",
      geistSans.variable,
      geistMono.variable,
    )}
  >
    <Header />
    <main className="mb-12 flex flex-1 flex-col">{children}</main>
    <Footer />
  </div>
);
