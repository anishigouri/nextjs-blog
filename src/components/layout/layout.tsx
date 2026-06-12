import { cn } from "@/lib/utils";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import { Footer } from "../footer";
import { Header } from "../header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => (
  <div
    className={cn(
      "relative flex min-h-screen flex-col font-sans dark",
      inter.className,
    )}
  >
    <Header />
    <main className="mb-12 flex flex-1 flex-col">{children}</main>
    <Footer />
  </div>
);
