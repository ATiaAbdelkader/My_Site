import type { Metadata } from "next";
import { Inter, Cairo } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/lib/language-context";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abdelkader Atia | PhD Researcher & Agricultural Innovator",
  description:
    "Abdelkader Atia — PhD Researcher, Agricultural Trainer, and Digital Innovation Expert. Specializing in semen quality and sustainable livestock production.",
  keywords: [
    "smart agriculture",
    "PhD researcher",
    "agricultural training",
    "digital innovation",
    "livestock production",
    "Abdelkader Atia",
  ],
  authors: [{ name: "Abdelkader Atia" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Abdelkader Atia | PhD Researcher & Agricultural Innovator",
    description:
      "Professional specializing in scientific research, training, and digital innovation in agriculture",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdelkader Atia | PhD Researcher & Agricultural Innovator",
    description:
      "Professional specializing in scientific research, training, and digital innovation in agriculture",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${cairo.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <LanguageProvider>
            {children}
            <Toaster />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
