import "@styles/index.scss";
import "@styles/globals.scss";
import { Navbar, Footer } from "@components";

export const metadata = {
  title: "Car Hub",
  description: "Discover the best cars in the world.",
  name: "viewport",
  content: "initial-scale=1.0, width=device-width",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Navbar />
      <body>{children}</body>
      <Footer />
    </html>
  );
}
