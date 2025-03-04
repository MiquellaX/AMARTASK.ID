import { Assistant } from "next/font/google";
import "./globals.css";
import HomeWrapper from "../Components/HomeWrapper";
import Loading from "../Components/Loading";

const assistantFont = Assistant({
    variable: "--font-assistant",
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
    title: "TEST PROJECT",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${assistantFont.variable} antialiased`}
            >
                    <main className="relative">
                        <HomeWrapper>
                            <Loading>
                                {children}
                            </Loading>
                        </HomeWrapper>
                    </main>
            </body>
        </html>
    );
}