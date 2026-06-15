import { cn } from "@/lib/utils";
import { Inter, PT_Sans_Caption } from "next/font/google";
import { Footer } from "./footer";
import { Header } from "./header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const ptSansCaption = PT_Sans_Caption({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-pt-sans-caption",
});

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => (
  <div
    className={cn(
      "relative flex min-h-screen flex-col font-inter dark",
      inter.variable,
      ptSansCaption.variable,
    )}
  >
    <Header />
    <main className="mb-12 flex flex-1 flex-col">{children}</main>
    <Footer />
  </div>
);
