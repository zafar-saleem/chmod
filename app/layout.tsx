import type { Metadata } from "next";
import { Header } from "@/components/header";
import { GlobalStyles } from "@/theme/globals";
import Providers from "./styled-providers";

export const metadata: Metadata = {
  title: "Tool for 'chmod' command",
  description: "chmod is a popular command on unix/linux to change files & folders permission. Here is a cool tool to help you fnd exact permission numbers. Click to learn more.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">  
      <body>
        <Providers>
          <GlobalStyles />
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  )
}
