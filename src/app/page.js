"use client";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import OtherProjects from "./components/OtherProjects";
import Projects from "./components/Projects";
import SocialIcons from "./components/SocialIcons";

export default function Home() {
  return (
    <main className="relative">
      {/* Hero Section */}
      <Hero/>
      <About/>
      <Experience/>
      <Projects/>
      <OtherProjects/>
      <Contact/>
      <Footer/>
      {/* Social Sidebar */}
      <SocialIcons/>
    </main>
  );
}
