import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque } from "next/font/google";
import "@/app/globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AgentationLoader } from "@/components/AgentationLoader";
import { AgentationErrorBoundary } from "@/components/AgentationErrorBoundary";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Principal Design Systems | Portfolio",
  description:
    "Design systems that scale: AI-native foundations, measurable adoption, and clear ownership so teams deliver in weeks instead of months.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${bricolageGrotesque.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('portfolio-theme');if(t==='light'||t==='dark')document.documentElement.setAttribute('data-theme',t);else document.documentElement.setAttribute('data-theme',typeof window!=='undefined'&&window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');}catch(e){document.documentElement.setAttribute('data-theme','light');}})();`,
          }}
        />
      </head>
      <body className="min-h-screen bg-brand-bg text-brand-fg font-sans">
        <>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-space-4 focus:left-space-4 focus:z-50 focus:px-space-4 focus:py-space-2 focus:bg-brand-accent focus:text-white focus:rounded"
          >
            Skip to Content
          </a>
          <div className="flex flex-col min-h-screen max-w-content mx-auto w-full px-space-4 md:px-space-8">
            <Header />
            <main id="main-content" className="flex-1 min-h-0 pt-space-2" tabIndex={-1}>
              {children}
            </main>
            <Footer />
          </div>
          <AgentationErrorBoundary>
            <AgentationLoader />
          </AgentationErrorBoundary>
        </>
      </body>
    </html>
  );
}
