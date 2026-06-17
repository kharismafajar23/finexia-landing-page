import Header from "@/components/layout/Header";
import "./globals.css";
import { generateMetadata } from "@/lib/metadata";

export const metadata = generateMetadata({
  title: "Finexia",
  description:
    "Finexia menyatukan seluruh data bisnis Anda dalam satu platform terintegrasi. Real-time, sederhana, dan dipercaya 700+ organisasi di Indonesia.",
  type: "website",
  keywords: ["Finexia", "Aplikasi real time, sederhana dan terintegrasi"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
      </body>
    </html>
  );
}
