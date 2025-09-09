'use client';

import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from 'next-themes';
import Header from '@/components/Header';
import Lines from '@/components/Lines';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en' suppressHydrationWarning>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <ThemeProvider
                    enableSystem={false}
                    attribute='class'
                    defaultTheme='light'>
                    <Lines />

                    <Header />
                    {children}
                    <Footer />
                    <ScrollToTop />
                </ThemeProvider>
            </body>
        </html>
    );
}
