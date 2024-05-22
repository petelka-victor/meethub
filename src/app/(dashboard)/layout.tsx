import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Meethub',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full from-[#26212F] to-[#3E2843]">{children}</body>
    </html>
  );
}
