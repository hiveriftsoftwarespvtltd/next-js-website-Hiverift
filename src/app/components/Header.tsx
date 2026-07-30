"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Facebook, Instagram, Linkedin, Youtube, Phone, MessageSquare, Rocket } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = usePathname();
  const router = useRouter();
  const isHomePage = location === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogoClick = () => {
    router.push("/");
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-white/95 backdrop-blur-md shadow-lg"
        : "bg-white/90 backdrop-blur-sm shadow-md"
        }`}
    >
      {/* Top Bar - Hides on Scroll & Hidden on Mobile */}
      <div className={`bg-emerald-600 text-white transition-all duration-300 overflow-hidden hidden md:block ${isScrolled ? 'h-0' : 'h-12'}`}>
        <div className="container mx-auto px-4 lg:px-8 h-full flex items-center justify-between text-[10px] md:text-xs font-bold">
          {/* Left Side: Marketing Content (Swapped) */}
          <div className="hidden md:flex items-center gap-2 text-emerald-50">
            <Rocket size={14} />
            <span className="opacity-90 font-medium  bold">Helping Business grow online with smart strategies</span>
          </div>

          {/* Right Side: Social & Contact (Swapped) */}
          <div className="flex items-center gap-4 md:gap-6">

            {/* Follow Us Section */}
            <div className="flex items-center gap-3 border-r border-white/20 pr-4 md:pr-6">
              <span className="font-black text-white">Follow Us:</span>

              <a href="https://www.facebook.com/profile.php?id=61576054306888" target="_blank" className="hover:scale-110 transition-transform">
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg" alt="Facebook" className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/hiverift.global/" target="_blank" className="hover:scale-110 transition-transform">
                <img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" alt="Instagram" className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/hiverift-softwares" target="_blank" className="hover:scale-110 transition-transform">
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg" alt="LinkedIn" className="w-5 h-5" />
              </a>
              <a href="https://youtube.com/@hiveriftsoftwaresprivatelimite?si=BrcDEu0_4eVvgZbF" target="_blank" className="hover:scale-110 transition-transform">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg" alt="YouTube" className="w-5 h-5" />
              </a>
            </div>

            {/* Phone Section */}
            <a
              href="tel:+918814930229"
              className="flex items-center gap-2 text-white hover:text-emerald-100 transition-colors"
            >
              <Phone size={14} className="text-white" />
              <span className="font-black text-white">+91 8814930229</span>
            </a>

          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button onClick={handleLogoClick} className="flex items-center cursor-pointer focus:outline-none border-none outline-none bg-transparent p-0 m-0 shadow-none">
            <img src="/logo.png" alt="HiveRift" className="h-14 w-auto block border-none outline-none" />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-3 xl:space-x-5">
            <Link
              href="/"
              className="text-gray-700 hover:text-emerald-600 hover:underline underline-offset-8 decoration-2 decoration-emerald-500/30 transition-all font-bold text-sm xl:text-base whitespace-nowrap tracking-wide"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-emerald-600 hover:underline underline-offset-8 decoration-2 decoration-emerald-500/30 transition-all font-bold text-sm xl:text-base whitespace-nowrap tracking-wide"
            >
              About US
            </Link>
            <Link
              href="/services"
              className="text-gray-700 hover:text-emerald-600 hover:underline underline-offset-8 decoration-2 decoration-emerald-500/30 transition-all font-bold text-sm xl:text-base whitespace-nowrap tracking-wide"
            >
              Services
            </Link>
            <Link
              href="/solutions"
              className="text-gray-700 hover:text-emerald-600 hover:underline underline-offset-8 decoration-2 decoration-emerald-500/30 transition-all font-bold text-sm xl:text-base whitespace-nowrap tracking-wide"
            >
              Solutions
            </Link>
            <Link
              href="/industries"
              className="text-gray-700 hover:text-emerald-600 hover:underline underline-offset-8 decoration-2 decoration-emerald-500/30 transition-all font-bold text-sm xl:text-base whitespace-nowrap tracking-wide"
            >
              Industries
            </Link>
            <Link
              href="/case-studies"
              className="text-gray-700 hover:text-emerald-600 hover:underline underline-offset-8 decoration-2 decoration-emerald-500/30 transition-all font-bold text-sm xl:text-base whitespace-nowrap tracking-wide"
            >
              Case Studies
            </Link>
            <Link
              href="/pricing"
              className="text-gray-700 hover:text-emerald-600 hover:underline underline-offset-8 decoration-2 decoration-emerald-500/30 transition-all font-bold text-sm xl:text-base whitespace-nowrap tracking-wide"
            >
              Pricing
            </Link>
            <Link
              href="/blog"
              className="text-gray-700 hover:text-emerald-600 hover:underline underline-offset-8 decoration-2 decoration-emerald-500/30 transition-all font-bold text-sm xl:text-base whitespace-nowrap tracking-wide"
            >
              Blog
            </Link>
            <div className="relative group py-2">
              <Link
                href="/contact"
                className="text-gray-700 group-hover:text-emerald-600 group-hover:underline underline-offset-8 decoration-2 decoration-emerald-500/30 transition-all font-bold text-sm xl:text-base whitespace-nowrap flex items-center gap-1 tracking-wide"
              >
                Contact
                <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
              </Link>
              <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-gray-100 shadow-xl rounded-2xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-[100]">
                <Link
                  href="/contact"
                  className="block px-6 py-3 text-sm font-bold text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors tracking-wide"
                >
                  Contact Us
                </Link>
                <Link
                  href="/careers"
                  className="block px-6 py-3 text-sm font-bold text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors border-t border-gray-50 tracking-wide"
                >
                  Careers
                </Link>
              </div>
            </div>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/contact"
              className="flex items-center gap-2 bg-emerald-600 text-white px-2 py-3 rounded-full hover:bg-emerald-700 transition-all font-black text-xs shadow-lg shadow-emerald-200 whitespace-nowrap"
            >              
              <span className="font-black  tracking-tight ">Free Consultation</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-6 bg-white shadow-2xl border-t border-gray-100 animate-in fade-in slide-in-from-top-4 duration-300">
            <nav className="flex flex-col px-6 space-y-2 overflow-y-auto max-h-[80vh]">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Solutions", path: "/solutions" },
                { name: "Industries", path: "/industries" },
                { name: "Case Studies", path: "/case-studies" },
                { name: "Pricing", path: "/pricing" },
                { name: "Blog", path: "/blog" },
                { name: "Contact Us", path: "/contact" },
                { name: "Careers", path: "/careers" }
              ].map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-800 hover:text-emerald-600 transition-colors font-bold text-lg py-4 border-b border-gray-50 flex items-center justify-between group"
                >
                  {link.name}
                  <ChevronDown className="-rotate-90 text-gray-300 group-hover:text-emerald-500 transition-colors" size={16} />
                </Link>
              ))}

              <div className="pt-6 pb-4">
                <Button
                  onClick={() => {
                    router.push("/contact");
                    setIsMobileMenuOpen(false);
                  }}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white w-full py-5 rounded-full font-black text-lg shadow-lg"
                >
                  Get free consultation
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}