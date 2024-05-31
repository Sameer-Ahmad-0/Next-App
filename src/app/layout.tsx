import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/Navbar";
import Background from "@/component/Background";
import { TypewriterEffectSmoothDemo } from "@/component/Typewriter";
import { LampDemo } from "@/component/Lamp";
import Musicapp from "@/component/Musicapp";
import { SpotlightPreview } from "@/component/SpotlightPreview";
import { CardHoverEffectDemo } from "@/component/CardHover";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Music App",
  description: "Music is a part of life",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ backgroundColor: 'black' }}>
        <Navbar/>
        <SpotlightPreview/>
        {/* <LampDemo/> */}
        <CardHoverEffectDemo/>
        {/* <TypewriterEffectSmoothDemo/> */}
        <Musicapp/>
        
        <Background/>
        
        {children}</body>
    </html>
  );
}
