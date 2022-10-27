import Navbar from "./nav-bar";

export default function RootLayout({ children }) {
  return (
    <html>
      <head></head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
