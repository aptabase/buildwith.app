import "./globals.css";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "cal-sans";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const cal = localFont({
  src: "../../node_modules/cal-sans/fonts/webfonts/CalSans-SemiBold.woff2",
  display: "swap",
  variable: "--font-cal",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${cal.variable} font-sans`}>
        <svg
          className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
          />
        </svg>
        {children}
      </body>
    </html>
  );
}
