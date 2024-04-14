import type { Metadata } from "next";
import { Inter, Titillium_Web, DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import { dark, shadesOfPurple } from "@clerk/themes";

const titillium_Web = Titillium_Web({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Fuzzie",
  description: "Automate your work with Fuzzie",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
      appearance={{
        baseTheme: shadesOfPurple,
        variables: {
          colorPrimary: "#c8c7ff",
          colorBackground: "#030308",
          colorText: "white",
          colorTextSecondary: "#c8c7ff",
        },
      }}
    >
      <html lang="en">
        <head />
        <body className={titillium_Web.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
