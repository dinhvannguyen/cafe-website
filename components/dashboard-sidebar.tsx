"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart, Package, ShoppingCart, Users, Settings, HelpCircle, Home, LogOut } from "lucide-react"

import { cn } from "@/lib/utils"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function DashboardSidebar() {
  const pathname = usePathname()

  const routes = [
    {
      href: "/admin",
      icon: BarChart,
      label: "Tổng Quan",
      exact: true,
    },
    {
      href: "/admin/products",
      icon: Package,
      label: "Sản Phẩm",
    },
    {
      href: "/admin/orders",
      icon: ShoppingCart,
      label: "Đơn Hàng",
    },
    {
      href: "/admin/customers",
      icon: Users,
      label: "Khách Hàng",
    },
    {
      href: "/admin/settings",
      icon: Settings,
      label: "Cài Đặt",
    },
  ]

  return (
    <div className="hidden border-r bg-muted/40 lg:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-[60px] items-center border-b px-6">
          <Link href="/admin" className="flex items-center gap-2 font-semibold">
            <Package className="h-6 w-6 text-amber-700" />
            <span className="">Quản Lý Café Elegance</span>
          </Link>
        </div>
        <ScrollArea className="flex-1 py-4">
          <nav className="grid items-start px-4 text-sm font-medium">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn("flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary", {
                  "bg-muted text-primary": route.exact ? pathname === route.href : pathname.startsWith(route.href),
                  "text-muted-foreground": !(route.exact ? pathname === route.href : pathname.startsWith(route.href)),
                })}
              >
                <route.icon className="h-4 w-4" />
                {route.label}
              </Link>
            ))}
            <div className="mt-8">
              <div className="text-xs font-semibold text-muted-foreground/70 mb-2 px-3">Liên kết nhanh</div>
              <Link
                href="/"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <Home className="h-4 w-4" />
                Xem trang web
              </Link>
              <Link
                href="/admin/help"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <HelpCircle className="h-4 w-4" />
                Trợ giúp
              </Link>
              <Link
                href="/logout"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <LogOut className="h-4 w-4" />
                Đăng xuất
              </Link>
            </div>
          </nav>
        </ScrollArea>
      </div>
    </div>
  )
}
