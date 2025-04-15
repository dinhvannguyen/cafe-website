"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Coffee, Menu, ShoppingBag, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"

export default function Header() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const routes = [
    { href: "/", label: "Trang Chủ" },
    { href: "/menu", label: "Thực Đơn" },
    { href: "/about", label: "Về Chúng Tôi" },
    { href: "/contact", label: "Liên Hệ" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" aria-label="Menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <div className="flex items-center gap-2 mb-8">
                <Coffee className="h-6 w-6 text-amber-700" />
                <span className="text-xl font-bold">Café Elegance</span>
              </div>
              <nav className="flex flex-col gap-4">
                {routes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    className={`text-lg ${
                      pathname === route.href ? "text-amber-700 font-medium" : "text-muted-foreground"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {route.label}
                  </Link>
                ))}
                <Link href="/admin" className="text-lg text-muted-foreground" onClick={() => setIsOpen(false)}>
                  Quản Lý
                </Link>
              </nav>
            </SheetContent>
          </Sheet>

          <Link href="/" className="flex items-center gap-2">
            <Coffee className="h-6 w-6 text-amber-700" />
            <span className="text-xl font-bold hidden md:inline-block">Café Elegance</span>
          </Link>
        </div>

        <nav className="hidden lg:flex items-center gap-6">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={`text-sm font-medium ${
                pathname === route.href ? "text-amber-700" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {route.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/cart" className="relative">
            <Button variant="ghost" size="icon" aria-label="Giỏ hàng">
              <ShoppingBag className="h-5 w-5" />
              <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-amber-700">
                3
              </Badge>
            </Button>
          </Link>
          <Link href="/account">
            <Button variant="ghost" size="icon" aria-label="Tài khoản">
              <User className="h-5 w-5" />
            </Button>
          </Link>
          <Link href="/admin" className="hidden md:block">
            <Button variant="outline" size="sm">
              Quản Lý
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
