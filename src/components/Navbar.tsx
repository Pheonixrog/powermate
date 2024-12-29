"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Download, Menu, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [navPosition, setNavPosition] = useState(24);

  const navSections = [{ id: "features", label: "Features", offset: 100 }];

  const INITIAL_POSITION = 24;
  const FLOAT_POSITION = 80;
  const STOP_POSITION = 800;

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);

      if (scrollY <= FLOAT_POSITION) {
        setNavPosition(INITIAL_POSITION);
      } else if (scrollY <= STOP_POSITION) {
        setNavPosition(FLOAT_POSITION);
      } else {
        const pushUpAmount = Math.min(
          FLOAT_POSITION,
          FLOAT_POSITION - (scrollY - STOP_POSITION)
        );
        setNavPosition(Math.max(0, pushUpAmount));
      }

      const scrollPosition = scrollY + 100;
      navSections.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          const elementTop = element.offsetTop;
          const elementBottom = elementTop + element.offsetHeight;

          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 200;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.div
    className="w-full md:container md:mx-auto md:max-w-screen-xl"
    initial={{ y: -100, opacity: 0 }}
    animate={{ y: navPosition, opacity: 1 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
      <nav
          className={`
            mx-2 md:mx-6 lg:mx-10
            transition-all duration-500 rounded-full
            ${
              isScrolled
                ? "bg-gradient-to-b from-gray-950 to-gray-900 backdrop-blur-md shadow-lg shadow-purple-500/10"
                : "bg-gradient-to-b from-gray-950 to-gray-950 backdrop-blur-sm"
            }
            border border-purple-500/20 hover:border-purple-500/30 
          `}
        >
        <div className="px-3 md:px-6 py-2 md:py-3">
          <div className="flex items-center justify-between">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              className="flex-shrink-0"
            >
              <Link href="/" className="flex items-center group">
                <img
                  src="/logo.svg"
                  alt="Powermate Logo"
                  width={140}
                  height={28}
                  className="group-hover:rotate-12 transition-transform duration-300 md:w-[220px] lg:w-[250px]"
                />
              </Link>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-2">
              {navSections.map(({ id, label }) => (
                <motion.button
                  key={id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(id)}
                  className={`
                    px-4 py-2 text-lg lg:text-xl rounded-full transition-all duration-300
                    ${
                      activeSection === id
                        ? "text-white bg-purple-500/20"
                        : "text-gray-300 hover:text-white hover:bg-purple-500/10"
                    }
                  `}
                >
                  {label}
                </motion.button>
              ))}

              <Link href="/pricing">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`
                    px-4 py-2 text-lg lg:text-xl rounded-full transition-all duration-300
                    text-gray-300 hover:text-white hover:bg-purple-500/10
                  `}
                >
                  Pricing
                </motion.button>
              </Link>

              <Dialog open={isDownloadOpen} onOpenChange={setIsDownloadOpen}>
                <DialogTrigger asChild>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="ghost"
                      className="text-gray-300 hover:text-white hover:bg-purple-500/10 text-lg lg:text-xl rounded-full"
                    >
                      <Download className="mr-2 h-4 w-4" /> Download
                    </Button>
                  </motion.div>
                </DialogTrigger>
                <DialogContent className="bg-gray-900/95 backdrop-blur-md border-purple-500/20">
                  <DialogHeader>
                    <DialogTitle className="text-white">
                      Download Powermate
                    </DialogTitle>
                    <DialogDescription className="text-gray-400">
                      Scan the QR code with your phone
                    </DialogDescription>
                  </DialogHeader>
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="flex justify-center p-4 bg-gray-950 rounded-lg"
                  >
                    <Image
                      src="/qrcode.png"
                      alt="QR Code"
                      width={300}
                      height={300}
                    />
                  </motion.div>
                </DialogContent>
              </Dialog>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-1.5 rounded-full hover:bg-purple-500/10"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5 text-gray-300" />
              ) : (
                <Menu className="h-5 w-5 text-gray-300" />
              )}
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                className="md:hidden absolute left-0 right-0 mt-2 mx-2 p-3 bg-gray-900 border border-purple-500/20 rounded-2xl shadow-lg"
              >
                <div className="flex flex-col space-y-1">
                  {navSections.map(({ id, label }) => (
                    <motion.button
                      key={id}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => scrollToSection(id)}
                      className={`
                        w-full px-4 py-2.5 text-base font-medium rounded-xl transition-all duration-300
                        ${
                          activeSection === id
                            ? "text-white bg-purple-500/20"
                            : "text-gray-300 hover:text-white hover:bg-purple-500/10"
                        }
                      `}
                    >
                      {label}
                    </motion.button>
                  ))}

                  <Link href="/pricing" className="block">
                    <motion.button
                      whileTap={{ scale: 0.98 }}
                      className="w-full px-4 py-2.5 text-base font-medium rounded-xl transition-all duration-300 text-gray-300 hover:text-white hover:bg-purple-500/10"
                    >
                      Pricing
                    </motion.button>
                  </Link>

                  <Dialog open={isDownloadOpen} onOpenChange={setIsDownloadOpen}>
                    <DialogTrigger asChild>
                      <motion.button
                        whileTap={{ scale: 0.98 }}
                        className="w-full px-4 py-2.5 text-base font-medium rounded-xl transition-all duration-300 text-gray-300 hover:text-white hover:bg-purple-500/10 flex items-center justify-center"
                      >
                        <Download className="mr-2 h-4 w-4" /> Download
                      </motion.button>
                    </DialogTrigger>
                    <DialogContent className="bg-gray-900/95 backdrop-blur-md border-purple-500/20">
                      <DialogHeader>
                        <DialogTitle className="text-white">
                          Download Powermate
                        </DialogTitle>
                        <DialogDescription className="text-gray-400">
                          Scan the QR code with your phone
                        </DialogDescription>
                      </DialogHeader>
                      <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="flex justify-center p-4 bg-gray-950 rounded-lg"
                      >
                        <Image
                          src="/qrcode.png"
                          alt="QR Code"
                          width={300}
                          height={300}
                        />
                      </motion.div>
                    </DialogContent>
                  </Dialog>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </motion.div>
  );
}