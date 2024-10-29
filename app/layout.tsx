import "./globals.css";
import NavBar from "./Navbar/page";
import { AuthProvider } from "@/context/auth";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <html lang="ja">
        <body>
          <NavBar />
          {children}
        </body>
      </html>
    </AuthProvider>
  );
}