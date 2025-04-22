import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/common/header";
import { Metadata, Viewport } from "next";
import MotionProvider from "@/providers/motion-provider";

const pretendard = localFont({
  src: "../../public/fonts/PretendardVariable.woff2",
  variable: "--font-pretendard",
  weight: "45 920",
  display: "swap",
  preload: true,
});

const creato400 = localFont({
  src: "../../public/fonts/CreatoDisplay-RegularItalic.woff2",
  variable: "--font-creato-400",
  weight: "400",
  style: "italic",
  display: "swap",
  preload: true,
});

const creato500 = localFont({
  src: "../../public/fonts/CreatoDisplay-MediumItalic.woff2",
  variable: "--font-creato-500",
  weight: "500",
  style: "italic",
  display: "swap",
  preload: true,
});

const creato700 = localFont({
  src: "../../public/fonts/CreatoDisplay-BoldItalic.woff2",
  variable: "--font-creato-700",
  weight: "700",
  style: "italic",
  display: "swap",
  preload: true,
});

const creato800 = localFont({
  src: "../../public/fonts/CreatoDisplay-ExtraBoldItalic.woff2",
  variable: "--font-creato-800",
  weight: "800",
  style: "italic",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zaply-landing.vercel.app/"),
  title: "Zaply | Create Once, Spread with Zaply",
  description:
    "Zaply를 통해 콘텐츠를 한 번 만들고 여러 플랫폼에 쉽게 배포하세요. 당신의 디지털 콘텐츠 제작과 배포를 혁신적으로 바꿔드립니다.",
  keywords: ["Zaply", "콘텐츠 제작", "콘텐츠 배포", "디지털 마케팅"],
  icons: {
    icon: "/assets/images/ZaplyLanding.webp",
  },
  openGraph: {
    title: "Zaply | Create Once, Spread with Zaply",
    description: "Zaply를 통해 콘텐츠를 한 번 만들고 여러 플랫폼에 쉽게 배포하세요.",
    url: "https://zaply-landing.vercel.app/",
    siteName: "Zaply",
    images: [
      {
        url: "https://zaply-landing.vercel.app/assets/images/ZaplyLanding.webp",
        width: 800,
        height: 600,
        alt: "Zaply 서비스 이미지",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="bg-gray-200">
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="format-detection" content="telephone=no, data=no, email=no, address=no" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${pretendard.variable} ${creato400.variable} ${creato500.variable} ${creato700.variable} ${creato800.variable} relative font-pretendard max-w-[480px] mx-auto bg-grayscale-200 h-svh overflow-x-hidden overscroll-none`}>
        <MotionProvider>
          <Header />
          <main>{children}</main>
        </MotionProvider>
      </body>
    </html>
  );
}
