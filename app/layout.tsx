import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ka" className="dark">
      <body className="bg-gray-950 text-gray-50 min-h-screen">
        {children}
      </body>
    </html>
  );
}
