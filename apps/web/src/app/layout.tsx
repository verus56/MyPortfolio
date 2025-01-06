import type { Metadata } from "next";
import { GoogleAnalytics, GoogleTagManager } from "@/components/google";
import Hello from "@/components/hello";
import NavBar from "@/components/nav-bar";
import SideBar from "@/components/side-bar";
import config from "@/config";
import { roboto } from "./font";
import { WebVitals } from "@/components/web-vitals";
import { ProgressBar } from "@/components/progress-bar";

import "./globals.css";

const {
  title, description,
  author, keywords,
  googleAnalyticId, googleTagManagerId,
  openGraph, about, avatar
} = config;
const {
  firstName,
  lastName,
  middleName,
  preferredName
} = about;

export const metadata: Metadata = {
  title: title,
  description: description,
  authors: [{ name: author }],
  creator: author,
  keywords: keywords,
  openGraph: {
    url: openGraph.url,
    type: "website",
    siteName: openGraph.siteName,
    title: openGraph.title,
    description: openGraph.description,
   
  },
  manifest: '/manifest.webmanifest',
  twitter: {
    card: "summary_large_image",
    title: "Hamzaoui Thameur | Visual Computing Engineer ",
    description:
      "i, I’m Hamzaoui Thameur, a Visual Computing Engineer with a passion for AI 🤖, Computer Vision 👁️, and Machine Learning 📊. I focus on developing innovative AI models, intelligent agents, and AI-powered mobile applications 📱 that solve real-world problems. With a strong engineering background and a curiosity for deep learning and automation 🔧, I strive to push the boundaries of technology. I’m also an open-source contributor 🌐, mentor, and lifelong learner 📚.Outside of work, I enjoy basketball 🏀, gaming 🎮, photography 📸, and storytelling 🎤. Let’s connect to explore my work!.",
   
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/logo.png',
    apple: [
      {
        url: '/logo.png',
        sizes: '192x192',
        type: 'image/png'
      }
    ],
  },
};

type RootLayoutProps = {
  children: React.ReactNode
}

function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${roboto.className}`}>
      <WebVitals gaId={googleAnalyticId} />
      <body>
        <ProgressBar className="fixed top-0 h-1 bg-yellow-500" >
          <Hello />
          <main>
            <SideBar
              avatar={avatar}
              firstName={firstName}
              lastName={lastName}
              middleName={middleName}
              preferredName={preferredName}
            />
            <div className="main-content">
              <NavBar />
              {children}
            </div>
          </main>
        </ProgressBar>
      </body>
      <GoogleAnalytics gaId={googleAnalyticId} />
      <GoogleTagManager gtmId={googleTagManagerId} />
    </html>
  );
}

export default RootLayout
