"use client";

import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBasket, ShoppingBag, User, LogOut, UtensilsCrossed } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/hooks/use-auth';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

interface NavbarProps {
  cartItemCount: number;
  onOpenCart: () => void;
}

const Navbar = ({ cartItemCount, onOpenCart }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = (e: React.MouseEvent) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollToMenu = () => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" onClick={handleLogoClick} className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
            <ShoppingBasket className="text-white" size={24} />
          </div>
          <span className={cn(
            "text-xl font-bold tracking-tight transition-colors",
            isScrolled ? "text-slate-900" : "text-white"
          )}>
            Mazaq Al Reef
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-amber-600",
                  isScrolled ? "text-slate-600" : "text-white/90"
                )}
              >
                {link.name}
              </a>
            ))}
          </div>
          
          <div className="flex items-center gap-4">
            <Button 
              onClick={scrollToMenu}
              className={cn(
                "rounded-full px-6 font-bold transition-all hover:scale-105 flex items-center gap-2",
                isScrolled 
                  ? "bg-amber-600 hover:bg-amber-700 text-white shadow-lg shadow-amber-600/20" 
                  : "bg-white text-slate-900 hover:bg-amber-50"
              )}
            >
              <UtensilsCrossed size={16} /> Order Now
            </Button>

            <button 
              onClick={onOpenCart}
              className={cn(
                "relative p-2 transition-colors hover:text-amber-600",
                isScrolled ? "text-slate-900" : "text-white"
              )}
            >
              <ShoppingBag size={24} />
              {cartItemCount > 0 && (
                <Badge className="absolute -top-1 -right-1 bg-amber-600 text-white border-none w-5 h-5 flex items-center justify-center p-0 text-[10px]">
                  {cartItemCount}
                </Badge>
              )}
            </button>
            
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="outline-none">
                    <Avatar className="w-10 h-10 border-2 border-amber-600/20">
                      <AvatarFallback className="bg-amber-50 text-amber-600 font-bold">
                        {user.name[0].toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 rounded-2xl p-2">
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-bold leading-none">{user.name}</p>
                      <p className="text-xs leading-none text-slate-500">{user.email}</p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem 
                    className="rounded-xl cursor-pointer"
                    onClick={() => navigate('/profile')}
                  >
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    className="rounded-xl cursor-pointer text-red-600 focus:text-red-600"
                    onClick={logout}
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Logout</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button asChild variant={isScrolled ? "outline" : "secondary"} className="rounded-full px-6">
                <Link to="/auth">Login</Link>
              </Button>
            )}
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button 
            onClick={onOpenCart}
            className={cn(
              "relative p-2",
              isScrolled ? "text-slate-900" : "text-white"
            )}
          >
            <ShoppingBag size={24} />
            {cartItemCount > 0 && (
              <Badge className="absolute -top-1 -right-1 bg-amber-600 text-white border-none w-5 h-5 flex items-center justify-center p-0 text-[10px]">
                {cartItemCount}
              </Badge>
            )}
          </button>
          <button
            className="p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled ? "text-slate-900" : "text-white"} />
            ) : (
              <Menu className={isScrolled ? "text-slate-900" : "text-white"} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t p-6 flex flex-col gap-4 shadow-xl animate-in slide-in-from-top duration-300">
          <Button onClick={scrollToMenu} className="w-full rounded-full py-7 text-lg font-bold bg-amber-600 hover:bg-amber-700">
            Order Now
          </Button>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-medium text-slate-900 hover:text-amber-600 px-4 py-2"
            >
              {link.name}
            </a>
          ))}
          <div className="h-px bg-slate-100 my-2" />
          {user ? (
            <>
              <Button variant="outline" onClick={() => { navigate('/profile'); setIsMobileMenuOpen(false); }} className="w-full rounded-full py-6">
                Profile
              </Button>
              <Button variant="outline" onClick={logout} className="w-full rounded-full py-6 text-red-600 border-red-100">
                Logout
              </Button>
            </>
          ) : (
            <Button asChild className="w-full rounded-full py-6">
              <Link to="/auth">Login</Link>
            </Button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;