import { DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { ThemeProvider } from "next-themes";
import ScrollToTop from "@/components/ScrollToTop";
import Aoscompo from "@/utils/aos";

const font = DM_Sans({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-dm-sans',
});

export const metadata = {
  title: 'MindCrypto',
  description: 'Next.js Crypto Trading Platform',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={font.variable}>
      <body className={`${font.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          enableSystem={true}
          defaultTheme="dark"
        >
          <Aoscompo>
            <Header />
            <main>{children}</main>
            <Footer />
          </Aoscompo>
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
