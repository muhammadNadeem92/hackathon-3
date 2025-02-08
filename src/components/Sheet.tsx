"use client"

import Link from "next/link"
import { Button } from './ui/button'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export function MobileNav() {
  return (
    <div className="sm:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">
            <Menu className="w-6 h-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-4">
          <nav className="flex flex-col gap-4 text-lg font-medium">
            <Link href="/shop" className="hover:text-blue-500">Shop</Link>
            <Link href="/new-arrivals" className="hover:text-blue-500">New Arrivals</Link>
            <Link href="/on-sale" className="hover:text-blue-500">On Sale</Link>
            <Link href="/login" className="hover:text-blue-500">Login</Link>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  )
}
