import "./globals.css";
import { Inter, Ubuntu, Mukta } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const ubuntu = Ubuntu({ weight: ["300","400", "500", "700"], subsets: ["latin"] });
const mukta = Mukta({ weight: ["400", "500", "600", "700"], subsets: ["latin"],display: "fallback" });

export const metadata = {
  title: "SOLIDUS D.O.O",
  description: "Vaš izbor za gradnju!",
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
      {/*<body className={mukta.className}>{children}</body>*/}
      {/*<body className={inter.className}>{children}</body>*/}
      <body className={ubuntu.className}>{children}</body>
      </html>
  );
}
