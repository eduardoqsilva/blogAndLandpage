import { LandingPage } from "@/templates/landing-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'site.set',
  description: 'Venda seus produtos como afiliado em um único lugar',
  robots: { index: true, follow: true },
  openGraph:  {
    title: 'site.set',
    description: 'Venda seus produtos como afiliado em um único lugar',
    url: 'https://blog-and-landpage.vercel.app/og-image.jpg',
    siteName: 'site.set',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: 'https://blog-and-landpage.vercel.app/og-image.jpg',
        width: 800,
        height: 600,
        alt: 'site.set'
      }
    ]
  }
}

export default function Page() {
  return <LandingPage />
}