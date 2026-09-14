import './globals.css';

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html suppressHydrationWarning>
      <body className="bg-background text-foreground type-body font-sans">{children}</body>
    </html>
  );
}
