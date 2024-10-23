import NavBar from "@/components/Navbar";
import { AuthProvider } from "@/context/auth";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <div>
        <NavBar />
        <Component {...pageProps} />
      </div>
    </AuthProvider>
  );
}
