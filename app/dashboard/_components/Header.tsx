// components/Header.tsx
"use client";

import { useState, useRef, useEffect } from "react";
import { Search, Menu, X } from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import SideNav from "./SideNav"; 

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const menuRef = useRef<HTMLDivElement>(null);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header>
      {/* Desktop View */}
      <div className="p-5 shadow-sm border-b-2 flex justify-between items-center bg-white">
        {/* Search Section */}
        <div className="hidden md:flex gap-2 items-center p-2 border rounded-md max-w-lg bg-white">
          <Search className="h-5 w-5 text-gray-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search..."
            className="outline-none w-full"
          />
        </div>

        {/* Right Section */}
        <div className="flex gap-5 items-center">
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>

      {/* Mobile Menu with SideNav */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40">
          <div 
            ref={menuRef}
            className={cn(
              "fixed inset-y-0 left-0 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50",
              mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            )}
          >
            <div className="p-4">
              <SideNav />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;