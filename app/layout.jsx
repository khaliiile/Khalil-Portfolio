
import { JetBrains_Mono } from 'next/font/google';
import "./globals.css";
import Header from "@/components/Header";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';

const jetbrainsMono = JetBrains_Mono({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
    variable: '--font-JetBrains-Mono',
});

export const metadata = {
    title: " Portfolio",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body className={jetbrainsMono.variable}>
       <main>
           <Header />
           {children}
           <SpeedInsights />
           <Analytics />
       </main>
        </body>
        </html>
    );
}
