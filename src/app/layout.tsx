import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Ahmed Kamal | AI Engineer",
    description: "AI Engineer focused on depth, clarity, and calm engineering.",
    authors: [{ name: "Ahmed Kamal" }],
    creator: "Ahmed Kamal",
    publisher: "Ahmed Kamal",
    applicationName: "Ahmed Kamal Portfolio",
    keywords: ["AI Engineer", "Software Engineer", "Portfolio", "Ahmed Kamal"],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="antialiased selection:bg-accent/30 selection:text-accent-foreground">
                {children}
            </body>
        </html>
    );
}
