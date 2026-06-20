import "./globals.css";
import Nav from "./components/Nav";

export const metadata = {
  title: "Karibu Kitchen | Authentic Kenyan Dining",
  description: "Experience the finest traditional Kenyan flavors, crafted with modern elegance.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <footer style={{ marginTop: "3rem", textAlign: "center", color: "#888" }}>
          Built with Next.js 💙
        </footer>
      </body>
    </html>
  );
}