"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
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
import { Download } from "lucide-react";

export function Navbar() {
  // const [isScrolled, setIsScrolled] = useState(false);
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // const [activeSection, setActiveSection] = useState("");

  // const navSections = [{ id: "features", label: "Features", offset: 100 }];

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollY = window.scrollY;
  //     setIsScrolled(scrollY > 20);

  //     // const scrollPosition = scrollY + 100;
  //     // navSections.forEach(({ id }) => {
  //     //   const element = document.getElementById(id);
  //     //   if (element) {
  //     //     const elementTop = element.offsetTop;
  //     //     const elementBottom = elementTop + element.offsetHeight;

  //     //     if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
  //     //       setActiveSection(id);
  //     //     }
  //     //   }
  //     // });
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  // const scrollToSection = (sectionId: string): void => {
  //   const element = document.getElementById(sectionId);
  //   if (element) {
  //     const navHeight = 80; // Adjust this value based on your navbar height
  //     element.scrollIntoView({ behavior: "smooth", block: "start" });
  //     window.scrollBy(0, -navHeight); // Adjust for navbar height
  //     setIsMobileMenuOpen(false);
  //   }
  // };

  return (
    <motion.div
      className="w-full flex justify-center px-4 py-4 sm:px-6 lg:px-8"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{ position: "fixed", top: 0, zIndex: 50 }}
    >
      <nav
        className={`
          transition-all duration-500 rounded-full w-full max-w-7xl
          border border-purple-500/20 hover:border-purple-500/30
        `}
      >
        <div className="px-4 sm:px-6 py-2 sm:py-3 flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="flex-shrink-0 w-1/3 sm:w-auto"
          >
            <Link href="/" className="flex items-center group">
              <Image
                src="/logo.svg"
                alt="Powermate Logo"
                width={140}
                height={28}
                className="transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110  duration-200 md:w-[220px] lg:w-[250px]"
              />
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-end justify-end space-x-2 flex-grow">
            {/* {navSections.map(({ id, label }) => (
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
            ))} */}
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
              <DialogContent className="bg-gray-950 backdrop-blur-md border-purple-500/20">
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
                <div className="h-20 mt-5 md:mt-5 w-100 overflow-hidden flex flex-col sm:flex-row gap-4 justify-center items-center lg:justify-start">
                  <a className="flex overflow-hidden justify-center items-center gap-2   font-bold  px-6  rounded-full text-base md:text-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
                    <Image
                      width={200}
                      height={20}
                      src="/googleplaybutton.svg"
                      alt="Google Play"
                    />
                  </a>
                  <a className="flex overflow-hidden items-center justify-center gap-2  font-bold  px-6  md:px-8 rounded-full text-base md:text-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
                    <Image
                      width={200}
                      height={20}
                      src="/appstorebutton.svg"
                      alt="App Store"
                    />
                  </a>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-1.5 rounded-full hover:bg-purple-500/10 ml-auto"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
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
              className="md:hidden absolute left-2 right-2 mt-2 p-3 bg-gray-950 border border-purple-500/20 rounded-2xl shadow-lg"
            >
              <div className="flex flex-col space-y-1">
                {/* {navSections.map(({ id, label }) => (
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
                ))} */}

                <Link href="/pricing" className="block" key="pricing">
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
                    <div className="h-20 mt-5 md:mt-5 w-100 overflow-hidden flex flex-col sm:flex-row gap-4 justify-center items-center lg:justify-start">
                      <a className="flex overflow-hidden justify-center items-center gap-2   font-bold  px-6  rounded-full text-base md:text-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
                        <Image
                          width={200}
                          height={20}
                          src="/googleplaybutton.svg"
                          alt="Google Play"
                        />
                      </a>
                      <a className="flex overflow-hidden items-center justify-center gap-2  font-bold  px-6  md:px-8 rounded-full text-base md:text-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
                        <Image
                          width={200}
                          height={20}
                          src="/appstorebutton.svg"
                          alt="App Store"
                        />
                      </a>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.div>
  );
}
