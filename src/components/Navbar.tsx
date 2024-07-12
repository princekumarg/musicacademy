"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
  return (
    <div
        className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
        <Menu setActive={setActive}>
            <Link href={"/"}>
                <MenuItem setActive={setActive} active={active} item="Home">
                </MenuItem>
            </Link>
            <MenuItem setActive={setActive} active={active} item="Items">
            <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/items">All Items</HoveredLink>
                <HoveredLink href="/items">Basic Music Therory</HoveredLink>
                <HoveredLink href="/items">Advanced Composition</HoveredLink>
                <HoveredLink href="/items">Song Writing</HoveredLink>
                <HoveredLink href="/items">Music Production</HoveredLink>
            </div>
            
            </MenuItem>
            <Link href={'/contact'}>
            <MenuItem setActive={setActive} active={active} item="Contact Us"></MenuItem>
            </Link>
            
        </Menu>
    </div>
  )
}

export default Navbar

