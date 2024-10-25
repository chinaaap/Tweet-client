import "./globals.css";
import NavBar from "./Navbar/page";
import { AuthProvider } from "@/context/auth";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <AuthProvider>
        <body>
          <NavBar />
          {children}
        </body>
      </AuthProvider>
    </html>
  );
}