"use client";
import { useState, useEffect } from "react";
import "./globals.css";
import Navbar from "./components/Navbar";
import SocialIcons from "./components/SocialIcons";
import EmailBar from "./components/EmailBar";
import Preloader from "./components/Preloader";

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);

  return (
    <html lang="en">
      <body>
        {loading ? (
          <Preloader onComplete={() => setLoading(false)} />
        ) : (
          <>
            <Navbar />
            {children}
            <SocialIcons />
            <EmailBar />
          </>
        )}
      </body>
    </html>
  );
}
