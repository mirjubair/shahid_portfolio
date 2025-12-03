// app/layout.jsx
import "./globals.css";

export const metadata = {
  title: "Mohammad Shahid Mir — Graphic Designer",
  description: "Freelance Graphic Designer — branding, social creatives and web graphics for startups."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        {/* Load Inter from Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet" />
        {/* default to dark mode immediately */}
        <script dangerouslySetInnerHTML={{ __html: `(function(){ try{ document.documentElement.classList.add('dark'); }catch(e){} })();` }} />
      </head>
      <body>
        <div id="particle-root" className="particle-root" aria-hidden />
        <div className="content-root">{children}</div>
      </body>
    </html>
  );
}
