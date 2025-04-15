import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ShoppingBag, Star } from "lucide-react"
import Image from "next/image"

export default function MenuPage() {
  return (
    <div className="container py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Thực Đơn</h1>
        <p className="text-lg text-muted-foreground">
          Khám phá các loại cà phê thượng hạng và đồ ăn nhẹ tại Café Elegance
        </p>
      </div>

      <Tabs defaultValue="coffee" className="max-w-5xl mx-auto">
        <TabsList className="grid grid-cols-4 mb-8">
          <TabsTrigger value="coffee">Cà Phê</TabsTrigger>
          <TabsTrigger value="tea">Trà</TabsTrigger>
          <TabsTrigger value="pastries">Bánh Ngọt</TabsTrigger>
          <TabsTrigger value="snacks">Đồ Ăn Nhẹ</TabsTrigger>
        </TabsList>

        <TabsContent value="coffee" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coffeeProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="tea" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {teaProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="pastries" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pastryProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="snacks" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {snackProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function ProductCard({ product }) {
  return (
    <Card className="overflow-hidden">
      <div className="md:flex">
        <div className="relative h-48 md:h-auto md:w-1/3">
          <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
        </div>
        <CardContent className="p-6 md:w-2/3">
          <div className="flex items-center mb-2">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${i < product.rating ? "text-amber-500 fill-amber-500" : "text-gray-300"}`}
                />
              ))}
            <span className="text-sm text-gray-500 ml-2">{product.reviews} đánh giá</span>
          </div>
          <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold text-amber-700">{product.price.toLocaleString("vi-VN")}đ</span>
            <Button size="sm" className="bg-amber-700 hover:bg-amber-800">
              <ShoppingBag className="h-4 w-4 mr-2" /> Thêm vào giỏ
            </Button>
          </div>
        </CardContent>
      </div>
    </Card>
  )
}

const coffeeProducts = [
  {
    id: 1,
    name: "Cà Phê Arabica Đặc Biệt",
    description: "Hương vị đậm đà, hậu vị ngọt nhẹ với notes của chocolate và hạt dẻ",
    price: 89000,
    image: "/placeholder.svg?height=400&width=600",
    rating: 5,
    reviews: 124,
  },
  {
    id: 2,
    name: "Cappuccino Ý",
    description: "Cà phê espresso truyền thống kết hợp với sữa tươi và bọt sữa mịn",
    price: 65000,
    image: "/placeholder.svg?height=400&width=600",
    rating: 4,
    reviews: 98,
  },
  {
    id: 3,
    name: "Latte Macchiato",
    description: "Sữa nóng với một lớp espresso đậm đà phía trên",
    price: 68000,
    image: "/placeholder.svg?height=400&width=600",
    rating: 4,
    reviews: 87,
  },
  {
    id: 4,
    name: "Americano",
    description: "Espresso pha với nước nóng tạo nên hương vị đậm đà nhưng nhẹ nhàng",
    price: 55000,
    image: "/placeholder.svg?height=400&width=600",
    rating: 5,
    reviews: 112,
  },
]

const teaProducts = [
  {
    id: 5,
    name: "Trà Ô Long Thượng Hạng",
    description: "Trà Ô Long cao cấp với hương thơm đặc trưng và vị ngọt tự nhiên",
    price: 75000,
    image: "/placeholder.svg?height=400&width=600",
    rating: 5,
    reviews: 76,
  },
  {
    id: 6,
    name: "Trà Xanh Matcha",
    description: "Trà xanh Nhật Bản với hương vị đậm đà và nhiều lợi ích sức khỏe",
    price: 70000,
    image: "/placeholder.svg?height=400&width=600",
    rating: 4,
    reviews: 65,
  },
  {
    id: 7,
    name: "Trà Hoa Cúc Mật Ong",
    description: "Trà hoa cúc kết hợp với mật ong nguyên chất, giúp thư giãn và ngủ ngon",
    price: 60000,
    image: "/placeholder.svg?height=400&width=600",
    rating: 5,
    reviews: 92,
  },
  {
    id: 8,
    name: "Trà Đào Cam Sả",
    description: "Trà đen kết hợp với đào, cam và sả tạo nên hương vị thanh mát, sảng khoái",
    price: 65000,
    image: "/placeholder.svg?height=400&width=600",
    rating: 5,
    reviews: 108,
  },
]

const pastryProducts = [
  {
    id: 9,
    name: "Bánh Tiramisu",
    description: "Bánh tiramisu truyền thống với lớp kem mascarpone mềm mịn",
    price: 55000,
    image: "/placeholder.svg?height=400&width=600",
    rating: 5,
    reviews: 76,
  },
  {
    id: 10,
    name: "Bánh Croissant Bơ Pháp",
    description: "Bánh croissant truyền thống làm từ bơ Pháp cao cấp, giòn xốp và thơm béo",
    price: 45000,
    image: "/placeholder.svg?height=400&width=600",
    rating: 5,
    reviews: 84,
  },
  {
    id: 11,
    name: "Bánh Cheesecake Chanh Dây",
    description: "Bánh cheesecake mềm mịn với lớp sốt chanh dây chua ngọt",
    price: 60000,
    image: "/placeholder.svg?height=400&width=600",
    rating: 4,
    reviews: 67,
  },
  {
    id: 12,
    name: "Bánh Chocolate Lava",
    description: "Bánh chocolate với lớp vỏ ngoài mềm và phần nhân chocolate chảy bên trong",
    price: 65000,
    image: "/placeholder.svg?height=400&width=600",
    rating: 5,
    reviews: 95,
  },
]

const snackProducts = [
  {
    id: 13,
    name: "Sandwich Gà Nướng",
    description: "Bánh mì sandwich với nhân gà nướng, rau xà lách và sốt đặc biệt",
    price: 75000,
    image: "/placeholder.svg?height=400&width=600",
    rating: 4,
    reviews: 56,
  },
  {
    id: 14,
    name: "Salad Trái Cây",
    description: "Salad với các loại trái cây tươi theo mùa và sốt mật ong chanh",
    price: 65000,
    image: "/placeholder.svg?height=400&width=600",
    rating: 5,
    reviews: 72,
  },
  {
    id: 15,
    name: "Bánh Mì Que Pate",
    description: "Bánh mì que giòn với pate gan thơm ngon",
    price: 35000,
    image: "/placeholder.svg?height=400&width=600",
    rating: 4,
    reviews: 63,
  },
  {
    id: 16,
    name: "Khoai Tây Chiên Trứng Muối",
    description: "Khoai tây chiên giòn phủ lớp bột trứng muối thơm béo",
    price: 55000,
    image: "/placeholder.svg?height=400&width=600",
    rating: 5,
    reviews: 88,
  },
]
