"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Heart, Minus, Plus, Share2, ShoppingBag, Star } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

export default function ProductPage({ params }) {
  const { toast } = useToast()
  const [quantity, setQuantity] = useState(1)

  // Giả lập dữ liệu sản phẩm - trong thực tế sẽ lấy từ API dựa vào params.id
  const product = {
    id: params.id,
    name: "Cà Phê Arabica Đặc Biệt",
    description:
      "Hương vị đậm đà, hậu vị ngọt nhẹ với notes của chocolate và hạt dẻ. Được chọn lọc kỹ lưỡng từ những hạt cà phê Arabica thượng hạng từ vùng cao nguyên Đà Lạt.",
    price: 89000,
    rating: 4.8,
    reviews: 124,
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    details: {
      origin: "Đà Lạt, Việt Nam",
      roastLevel: "Medium",
      flavor: "Chocolate, Hạt dẻ, Caramel",
      weight: "250g",
    },
  }

  const relatedProducts = [
    {
      id: 2,
      name: "Cappuccino Ý",
      price: 65000,
      image: "/placeholder.svg?height=400&width=600",
      rating: 4.5,
    },
    {
      id: 3,
      name: "Latte Macchiato",
      price: 68000,
      image: "/placeholder.svg?height=400&width=600",
      rating: 4.3,
    },
    {
      id: 4,
      name: "Americano",
      price: 55000,
      image: "/placeholder.svg?height=400&width=600",
      rating: 4.7,
    },
  ]

  const handleAddToCart = () => {
    toast({
      title: "Đã thêm vào giỏ hàng!",
      description: `${quantity} ${product.name} đã được thêm vào giỏ hàng.`,
    })
  }

  return (
    <div className="container py-12 px-4 sm:px-6 lg:px-8">
      <Button variant="ghost" asChild className="mb-8">
        <Link href="/menu">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Quay lại thực đơn
        </Link>
      </Button>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div className="space-y-4">
          <div className="relative aspect-square overflow-hidden rounded-lg">
            <Image src={product.images[0] || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {product.images.map((image, index) => (
              <div key={index} className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} - Ảnh ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <div className="flex items-center gap-2 mb-4">
            <div className="flex">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${i < Math.floor(product.rating) ? "text-amber-500 fill-amber-500" : "text-gray-300"}`}
                  />
                ))}
            </div>
            <span className="text-amber-700 font-medium">{product.rating}</span>
            <span className="text-muted-foreground">({product.reviews} đánh giá)</span>
          </div>
          <div className="text-2xl font-bold text-amber-700 mb-6">{product.price.toLocaleString("vi-VN")}đ</div>
          <p className="text-gray-700 mb-8">{product.description}</p>

          <div className="space-y-6">
            <div>
              <h3 className="font-medium mb-2">Số lượng</h3>
              <div className="flex items-center">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-10 w-10 rounded-full"
                  onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                >
                  <Minus className="h-4 w-4" />
                  <span className="sr-only">Giảm</span>
                </Button>
                <span className="w-16 text-center text-lg">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-10 w-10 rounded-full"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="h-4 w-4" />
                  <span className="sr-only">Tăng</span>
                </Button>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button className="flex-1 bg-amber-700 hover:bg-amber-800" onClick={handleAddToCart}>
                <ShoppingBag className="mr-2 h-5 w-5" />
                Thêm vào giỏ hàng
              </Button>
              <Button variant="outline" size="icon" className="h-12 w-12">
                <Heart className="h-5 w-5" />
                <span className="sr-only">Yêu thích</span>
              </Button>
              <Button variant="outline" size="icon" className="h-12 w-12">
                <Share2 className="h-5 w-5" />
                <span className="sr-only">Chia sẻ</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Tabs defaultValue="details" className="mb-16">
        <TabsList className="w-full justify-start border-b rounded-none">
          <TabsTrigger value="details" className="rounded-none">
            Chi tiết sản phẩm
          </TabsTrigger>
          <TabsTrigger value="reviews" className="rounded-none">
            Đánh giá
          </TabsTrigger>
          <TabsTrigger value="shipping" className="rounded-none">
            Vận chuyển & Đổi trả
          </TabsTrigger>
        </TabsList>
        <TabsContent value="details" className="pt-6">
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">Thông tin sản phẩm</h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Xuất xứ:</span>
                  <span>{product.details.origin}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Mức độ rang:</span>
                  <span>{product.details.roastLevel}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Hương vị:</span>
                  <span>{product.details.flavor}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Khối lượng:</span>
                  <span>{product.details.weight}</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Mô tả</h3>
              <p className="text-gray-700">
                Cà phê Arabica Đặc Biệt của chúng tôi được chọn lọc kỹ lưỡng từ những hạt cà phê Arabica thượng hạng từ
                vùng cao nguyên Đà Lạt. Quy trình rang xay được kiểm soát chặt chẽ để đảm bảo chất lượng và hương vị đặc
                trưng.
              </p>
              <p className="text-gray-700 mt-2">
                Với hương vị đậm đà, hậu vị ngọt nhẹ với notes của chocolate và hạt dẻ, đây là lựa chọn hoàn hảo cho
                những người yêu thích cà phê thượng hạng.
              </p>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="reviews" className="pt-6">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="text-4xl font-bold">{product.rating}</div>
              <div>
                <div className="flex mb-1">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${i < Math.floor(product.rating) ? "text-amber-500 fill-amber-500" : "text-gray-300"}`}
                      />
                    ))}
                </div>
                <p className="text-muted-foreground">Dựa trên {product.reviews} đánh giá</p>
              </div>
            </div>

            <div className="space-y-4">
              {/* Giả lập đánh giá */}
              <div className="border-b pb-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < 5 ? "text-amber-500 fill-amber-500" : "text-gray-300"}`}
                        />
                      ))}
                  </div>
                  <span className="font-medium">Nguyễn Văn A</span>
                  <span className="text-muted-foreground text-sm">- 10/04/2023</span>
                </div>
                <p className="text-gray-700">
                  Cà phê thơm ngon, đóng gói cẩn thận. Hương vị đúng như mô tả, rất hài lòng với sản phẩm này!
                </p>
              </div>

              <div className="border-b pb-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < 4 ? "text-amber-500 fill-amber-500" : "text-gray-300"}`}
                        />
                      ))}
                  </div>
                  <span className="font-medium">Trần Thị B</span>
                  <span className="text-muted-foreground text-sm">- 05/04/2023</span>
                </div>
                <p className="text-gray-700">
                  Hương vị rất đặc biệt, có thể cảm nhận được notes chocolate và hạt dẻ như mô tả. Sẽ mua lại!
                </p>
              </div>

              <div className="border-b pb-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < 5 ? "text-amber-500 fill-amber-500" : "text-gray-300"}`}
                        />
                      ))}
                  </div>
                  <span className="font-medium">Lê Văn C</span>
                  <span className="text-muted-foreground text-sm">- 28/03/2023</span>
                </div>
                <p className="text-gray-700">
                  Một trong những loại cà phê ngon nhất mà tôi từng thử. Giao hàng nhanh, đóng gói cẩn thận.
                </p>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="shipping" className="pt-6">
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Chính sách vận chuyển</h3>
              <p className="text-gray-700">
                Chúng tôi giao hàng trong nội thành TP. Hồ Chí Minh trong vòng 2-3 giờ kể từ khi đặt hàng. Đối với các
                tỉnh thành khác, thời gian giao hàng từ 2-5 ngày tùy khu vực.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Chính sách đổi trả</h3>
              <p className="text-gray-700">
                Quý khách có thể đổi trả sản phẩm trong vòng 7 ngày kể từ ngày nhận hàng nếu sản phẩm bị lỗi do nhà sản
                xuất hoặc bị hư hỏng trong quá trình vận chuyển.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Phương thức thanh toán</h3>
              <p className="text-gray-700">
                Chúng tôi chấp nhận thanh toán qua chuyển khoản ngân hàng, ví điện tử (MoMo, ZaloPay) và thanh toán khi
                nhận hàng (COD).
              </p>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <div>
        <h2 className="text-2xl font-bold mb-6">Sản Phẩm Liên Quan</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden">
              <div className="relative h-48">
                <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-amber-700">{product.price.toLocaleString("vi-VN")}đ</span>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-amber-500 fill-amber-500 mr-1" />
                    <span>{product.rating}</span>
                  </div>
                </div>
                <Button className="w-full mt-4 bg-amber-700 hover:bg-amber-800">
                  <ShoppingBag className="mr-2 h-4 w-4" /> Thêm vào giỏ
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
