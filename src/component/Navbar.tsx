"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
      <p className="text-black dark:text-white">
        The Navbar will show on top of the page
      </p>
    </div>
  );
}
interface NavbarProps {
  className?: string;
}


const Navbar = ({ className }: { className?: string }) => {
    const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 ", className)}
    >
      <Menu setActive={setActive}>
        
        <MenuItem setActive={setActive} active={active} item="Services">
        <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/Hip Pop Music">Hip Pop Music</HoveredLink>
            <HoveredLink href="https://en.wikipedia.org/wiki/Classical_music">Classical Music</HoveredLink>
            <HoveredLink href="/Sufi Music">Sufi Music</HoveredLink>
            <HoveredLink href="/Slowed Reverb Music">Slowed Reverb Music</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Courses">
        <div className="flex flex-col space-y-4 text-sm">
        <HoveredLink href="/Music Theory">Music Theory</HoveredLink>
        <HoveredLink href="/Music History">Music History</HoveredLink>
        <HoveredLink href="/Ear Training">Ear Training</HoveredLink>
        <HoveredLink href="/Composition">Composition</HoveredLink>
        <HoveredLink href="/Performance">Performance</HoveredLink>
        </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Pricing">
        <div className="flex flex-col space-y-4 text-sm">
          <HoveredLink href="/pricing">10M$</HoveredLink>
          <HoveredLink href="/pricing">15M$</HoveredLink>
          <HoveredLink href="/pricing">20M$</HoveredLink>
          <HoveredLink href="/pricing">25M$</HoveredLink>
          <HoveredLink href="/pricing">30B$</HoveredLink>
          </div>
        </MenuItem>
        
      </Menu>
    </div>
  )
}

export default Navbar
