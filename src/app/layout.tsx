import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/components/AuthProvider";
import ClientLayout from "@/components/ClientLayout";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Admin - CFYY",
  description: "Admin Dashboard For Caring For You and Yours",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <html lang="en" className={openSans.variable}>
        <body>
          <ClientLayout>{children}</ClientLayout>
        </body>
      </html>
    </AuthProvider>
  );
}
