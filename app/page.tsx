import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Coffee, ShoppingBag, Star } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[80vh]">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Quán cafe sang trọng"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">Café Elegance</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mb-8">
            Trải nghiệm hương vị cà phê thượng hạng trong không gian sang trọng và hiện đại
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-amber-700 hover:bg-amber-800">
              <Link href="/menu">
                Xem Thực Đơn <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              <Link href="/about">Về Chúng Tôi</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-stone-800">Sản Phẩm Nổi Bật</h2>
            <Link href="/menu" className="text-amber-700 hover:text-amber-800 flex items-center">
              Xem tất cả <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-64">
                  <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                </div>
                <div className="p-6">
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-stone-100">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-stone-800 mb-6">Về Café Elegance</h2>
            <p className="text-lg text-gray-700 mb-6">
              Café Elegance là điểm đến lý tưởng cho những người yêu thích cà phê thượng hạng. Chúng tôi tự hào mang đến
              cho khách hàng những hạt cà phê được chọn lọc kỹ lưỡng từ các vùng trồng nổi tiếng trên thế giới.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Với không gian sang trọng, hiện đại và ấm cúng, Café Elegance là nơi hoàn hảo để thưởng thức cà phê, gặp
              gỡ bạn bè hoặc làm việc trong một môi trường yên tĩnh và đẳng cấp.
            </p>
            <Button asChild className="bg-amber-700 hover:bg-amber-800">
              <Link href="/about">Tìm Hiểu Thêm</Link>
            </Button>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/placeholder.svg?height=800&width=600"
              alt="Không gian quán cafe"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-amber-700 text-white">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Khách Hàng Nói Gì Về Chúng Tôi</h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Sự hài lòng của khách hàng là niềm tự hào và động lực để chúng tôi không ngừng hoàn thiện
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="flex items-center mb-4">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-amber-300 fill-amber-300" />
                  ))}
              </div>
              <p className="text-white/90 mb-6 italic">"{testimonial.comment}"</p>
              <div className="flex items-center">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-white/70 text-sm">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-stone-50">
        <div className="max-w-3xl mx-auto text-center">
          <Coffee className="h-12 w-12 text-amber-700 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-stone-800 mb-4">Đăng Ký Nhận Thông Tin</h2>
          <p className="text-lg text-gray-600 mb-8">
            Đăng ký để nhận thông tin về sản phẩm mới, khuyến mãi đặc biệt và các sự kiện sắp tới
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Email của bạn"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1"
              required
            />
            <Button type="submit" className="bg-amber-700 hover:bg-amber-800">
              Đăng Ký
            </Button>
          </form>
        </div>
      </section>
    </div>
  )
}

const featuredProducts = [
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
    name: "Bánh Tiramisu",
    description: "Bánh tiramisu truyền thống với lớp kem mascarpone mềm mịn",
    price: 55000,
    image: "/placeholder.svg?height=400&width=600",
    rating: 5,
    reviews: 76,
  },
]

const testimonials = [
  {
    name: "Nguyễn Văn A",
    title: "Khách hàng thường xuyên",
    comment:
      "Cà phê ở đây thực sự tuyệt vời! Không gian sang trọng và nhân viên rất thân thiện. Tôi đến đây mỗi sáng trước khi đi làm.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Trần Thị B",
    title: "Blogger Ẩm Thực",
    comment:
      "Một trong những quán cà phê ngon nhất mà tôi từng đến. Đồ uống chất lượng cao và bánh ngọt tự làm rất ngon.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Lê Văn C",
    title: "Doanh nhân",
    comment:
      "Đây là nơi hoàn hảo để tổ chức các cuộc họp không chính thức. Wifi mạnh, không gian yên tĩnh và cà phê tuyệt vời.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
]
