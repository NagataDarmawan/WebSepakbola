'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X } from 'lucide-react';
import { siteConfig } from '@/constants/siteConfig';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const checkActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href));

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full bg-white text-black z-50 shadow-sm">
      {/* Top Bar Merah */}
      <div 
        className={`bg-primary text-center transition-all duration-300 overflow-hidden ${
          isScrolled ? 'max-h-0 py-0 opacity-0' : 'max-h-10 py-1 opacity-100'
        } px-4`}
      >
        <span className="text-[10px] font-bold tracking-widest text-white uppercase">
          WEBSITE NON RESMI {siteConfig.name}
        </span>
      </div>

      {/* Main Navbar */}
      <div className="border-b border-neutral-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14 md:h-16">
          
          {/* Logo & Nama Klub */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
            {siteConfig.logo && (
              <img 
                src={siteConfig.logo} 
                alt={siteConfig.name} 
                className="w-9 h-9 md:w-11 md:h-11 object-contain group-hover:scale-105 transition-transform shrink-0" 
              />
            )}
            <span className="font-extrabold text-xs md:text-base uppercase tracking-wider text-black group-hover:text-primary transition-colors">
              {siteConfig.name}
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {siteConfig.navMenu.map((item) => {
              const active = checkActive(item.href) || item.children?.some((c) => checkActive(c.href));
              const linkBase = `relative px-2.5 py-1 text-xs font-semibold uppercase tracking-wider transition-colors block after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 after:origin-left ${
                active ? 'text-primary after:w-full' : 'text-neutral-800 hover:text-primary after:w-0 hover:after:w-full'
              }`;

              return item.children?.length ? (
                <div key={item.title} className="relative group">
                  <button className={`${linkBase} flex items-center gap-1`}>
                    {item.title}
                    <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
                  </button>
                  <div className="absolute top-full left-0 w-44 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="bg-white border border-neutral-200 rounded-md shadow-xl overflow-hidden py-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.title}
                          href={child.href}
                          className={`block px-3.5 py-2 text-xs font-medium transition-colors ${
                            checkActive(child.href) ? 'bg-primary text-white' : 'text-neutral-700 hover:text-white hover:bg-primary'
                          }`}
                        >
                          {child.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link key={item.title} href={item.href} className={linkBase}>
                  {item.title}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Button Toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-1.5 text-black" aria-label="Toggle Menu">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-neutral-200 px-4 py-3 space-y-1">
            {siteConfig.navMenu.map((item) => {
              const active = checkActive(item.href) || item.children?.some((c) => checkActive(c.href));
              const isDropdownOpen = openMobileDropdown === item.title;

              return (
                <div key={item.title} className="border-b border-neutral-100 last:border-none pb-1">
                  {item.children?.length ? (
                    <div>
                      <button
                        onClick={() => setOpenMobileDropdown(isDropdownOpen ? null : item.title)}
                        className={`w-full flex items-center justify-between py-2 px-2 text-xs font-bold uppercase ${
                          active ? 'text-primary' : 'text-black'
                        }`}
                      >
                        <span>{item.title}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180 text-primary' : 'text-neutral-500'}`} />
                      </button>

                      {isDropdownOpen && (
                        <div className="pl-4 pr-2 py-1 space-y-1 bg-neutral-50 rounded-md my-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.title}
                              href={child.href}
                              onClick={() => setIsOpen(false)}
                              className={`block py-2 px-2 text-xs font-medium rounded-md transition-colors ${
                                checkActive(child.href) ? 'bg-primary text-white' : 'text-neutral-700 hover:text-primary'
                              }`}
                            >
                              {child.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`block py-2 px-2 text-xs font-bold uppercase ${
                        active ? 'text-primary' : 'text-black'
                      }`}
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </header>
  );
}