import { Inter } from "next/font/google";
import "./globals.css";
import { UsersContextProvider } from "@/contexts/users";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hemakes",
  description: "Hemakes tech challenge by Yohan L.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR" data-theme="cupcake">
            <UsersContextProvider>
                <body className={inter.className}>{children}</body>
            </UsersContextProvider>
        </html>
    );
}
