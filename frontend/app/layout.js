import "./globals.css";

export const metadata = {
  title: "OWMS",
  description: "Operations Workflow Management System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-zinc-950 text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}