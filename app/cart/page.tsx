"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Minus, Plus, ShoppingBag, Trash } from "lucide-react"

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Cà Phê Arabica Đặc Biệt",
      price: 89000,
      quantity: 2,
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 3,
      name: "Bánh Tiramisu",
      price: 55000,
      quantity: 1,
      image: "/placeholder.svg?height=400&width=600",
    },
  ])

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return
    setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  const shipping = 30000
  const total = subtotal + shipping

  return (
    <div className="container py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">Giỏ Hàng</h1>
        <p className="text-lg text-muted-foreground">Xem lại và điều chỉnh các sản phẩm trong giỏ hàng của bạn</p>
      </div>

      {cartItems.length > 0 ? (
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            {cartItems.map((item) => (
              <Card key={item.id}>
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="relative w-full sm:w-24 h-24 rounded-md overflow-hidden">
                      <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-1">{item.name}</h3>
                      <p className="text-amber-700 font-medium mb-4">{item.price.toLocaleString("vi-VN")}đ</p>
                      <div className="flex items-center">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 rounded-full"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-3 w-3" />
                          <span className="sr-only">Giảm</span>
                        </Button>
                        <span className="w-12 text-center">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 rounded-full"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                          <span className="sr-only">Tăng</span>
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="ml-auto text-red-500 hover:text-red-700 hover:bg-red-50"
                          onClick={() => removeItem(item.id)}
                        >
                          <Trash className="h-4 w-4 mr-1" />
                          Xóa
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <div className="flex items-center justify-between">
              <Button variant="outline" asChild>
                <Link href="/menu">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Tiếp tục mua sắm
                </Link>
              </Button>
              <Button variant="outline" onClick={() => setCartItems([])}>
                <Trash className="mr-2 h-4 w-4" />
                Xóa giỏ hàng
              </Button>
            </div>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle>Tóm Tắt Đơn Hàng</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tạm tính</span>
                  <span>{subtotal.toLocaleString("vi-VN")}đ</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Phí vận chuyển</span>
                  <span>{shipping.toLocaleString("vi-VN")}đ</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Giảm giá</span>
                  <span>0đ</span>
                </div>
                <Separator />
                <div className="flex justify-between font-medium">
                  <span>Tổng cộng</span>
                  <span className="text-lg">{total.toLocaleString("vi-VN")}đ</span>
                </div>

                <div className="pt-4">
                  <Label htmlFor="coupon">Mã giảm giá</Label>
                  <div className="flex mt-1">
                    <Input id="coupon" placeholder="Nhập mã giảm giá" className="rounded-r-none" />
                    <Button className="rounded-l-none">Áp dụng</Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-amber-700 hover:bg-amber-800">
                  <ShoppingBag className="mr-2 h-4 w-4" />
                  Thanh Toán
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      ) : (
        <div className="text-center py-12">
          <ShoppingBag className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Giỏ hàng trống</h2>
          <p className="text-muted-foreground mb-8">Bạn chưa có sản phẩm nào trong giỏ hàng</p>
          <Button asChild className="bg-amber-700 hover:bg-amber-800">
            <Link href="/menu">Khám phá sản phẩm</Link>
          </Button>
        </div>
      )}
    </div>
  )
}
