import "./globals.css";

import { cn } from "@/lib/utils";
import { geistSans, geistMono } from "./fonts/fonts";
import { constructMetadata } from "@/lib/metadata";
import {ThemeProvider} from "@/context/ThemeContext";
export const metadata = constructMetadata();
import { SkillFilterProvider } from "@/context/SkillFilterContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SkillFilterProvider>
      <html lang="en">
        <body
          className={cn("antialiased", geistSans.variable, geistMono.variable)}
        >
        <ThemeProvider>
          {children}
        </ThemeProvider>
        </body>
      </html>
    </SkillFilterProvider>
  );
}
