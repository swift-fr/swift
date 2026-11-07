import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'swift — tools, builds & more', description: 'An independent toolkit for the DonutSMP community.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
