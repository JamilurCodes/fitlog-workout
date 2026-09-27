import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import { Toaster } from "react-hot-toast";
import Navbar from "@/src/components/layout/Navbar";
import Footer from "@/src/components/layout/Footer";
import { FitLogProvider } from "@/src/components/providers/FitLogProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const oswald = Oswald({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-oswald",
});

export const metadata: Metadata = {
  title: "FitLog — Workout Library",
  description: "Train with intent. Log every set.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable}`}>
      <body className="font-sans antialiased">
        <FitLogProvider>
          <Navbar />
          {children}
          <Footer />
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 2800,
              style: {
                background: "#242424",
                color: "#ffffff",
                border: "1px solid #3a3a3a",
                borderRadius: "14px",
              },
              success: {
                iconTheme: {
                  primary: "#ccff00",
                  secondary: "#171717",
                },
              },
            }}
          />
        </FitLogProvider>
      </body>
    </html>
  );
}
