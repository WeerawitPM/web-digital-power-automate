"use client"
import React, { useContext, useState } from "react";
import Image from "next/image";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Switch, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import { ThemeContext } from "@/context/ThemeContext";  // Import ThemeContext
import { MoonIcon } from "@/components/icons/MoonIcon"
import { SunIcon } from "@/components/icons/SunIcon"

export default function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useContext<any>(ThemeContext);
  return (
    <Navbar isBordered isBlurred={false} onMenuOpenChange={setIsMenuOpen}>
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden"
      />
      <NavbarBrand>
        <Image
          src={theme === 'dark' ? "/images/logo.png" : "/images/logo2.png"}
          alt="Vercel Logo"
          width={62}
          height={45}
          quality={100}
          priority
          unoptimized
        />
        <p className="ms-3 font-bold text-inherit">IT Center</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/">
            Home
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent as="div" justify="end">
        <Switch
          size="lg"
          color="secondary"
          isSelected={theme === 'dark'}
          onChange={toggleTheme}
          thumbIcon={({ isSelected, className }) =>
            isSelected ? (
              <MoonIcon className={className} />
            ) : (
              <SunIcon className={className} />
            )
          }
        >
        </Switch>
      </NavbarContent>
      <NavbarMenu>
        <NavbarMenuItem>
          <Link color="foreground" href="/">
            Home
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
