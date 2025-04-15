import Image from "next/image"
import { Coffee, Award, Users, Clock } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container py-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Về Chúng Tôi</h1>
        <p className="text-lg text-muted-foreground">Khám phá câu chuyện và triết lý kinh doanh của Café Elegance</p>
      </div>

      {/* Story Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
          <Image src="/placeholder.svg?height=800&width=600" alt="Quán cafe Elegance" fill className="object-cover" />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Câu Chuyện Của Chúng Tôi</h2>
          <p className="text-gray-700 mb-4">
            Café Elegance được thành lập vào năm 2015 bởi những người đam mê cà phê với mong muốn mang đến cho khách
            hàng trải nghiệm cà phê thượng hạng trong một không gian sang trọng và hiện đại.
          </p>
          <p className="text-gray-700 mb-4">
            Chúng tôi bắt đầu từ một cửa hàng nhỏ tại Quận 1, TP. Hồ Chí Minh và dần phát triển thành một thương hiệu cà
            phê cao cấp được nhiều người yêu thích. Điều khiến chúng tôi tự hào nhất là sự tận tâm với chất lượng và
            dịch vụ khách hàng.
          </p>
          <p className="text-gray-700">
            Mỗi tách cà phê tại Café Elegance đều được pha chế từ những hạt cà phê được chọn lọc kỹ lưỡng từ các vùng
            trồng nổi tiếng trên thế giới và rang xay theo công thức độc đáo của chúng tôi.
          </p>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-stone-50 rounded-lg p-8 mb-16">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-2xl font-bold mb-4">Giá Trị Cốt Lõi</h2>
          <p className="text-gray-700">Những giá trị định hướng mọi hoạt động kinh doanh của chúng tôi</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Coffee className="h-8 w-8 text-amber-700" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Chất Lượng</h3>
            <p className="text-gray-600">
              Chúng tôi cam kết mang đến những sản phẩm chất lượng cao nhất cho khách hàng.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-amber-700" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Đẳng Cấp</h3>
            <p className="text-gray-600">
              Mọi chi tiết từ không gian đến dịch vụ đều được chăm chút tỉ mỉ để tạo nên sự đẳng cấp.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-amber-700" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Cộng Đồng</h3>
            <p className="text-gray-600">
              Chúng tôi xây dựng một cộng đồng yêu cà phê và đóng góp tích cực cho xã hội.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-amber-700" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Bền Vững</h3>
            <p className="text-gray-600">
              Chúng tôi cam kết phát triển bền vững và bảo vệ môi trường trong mọi hoạt động.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-16">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-2xl font-bold mb-4">Đội Ngũ Của Chúng Tôi</h2>
          <p className="text-gray-700">Những con người tài năng và đam mê đứng sau thành công của Café Elegance</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-amber-700 mb-2">{member.position}</p>
              <p className="text-gray-600">{member.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-amber-700 text-white rounded-lg p-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold mb-2">5+</div>
            <div className="text-white/80">Năm Kinh Nghiệm</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">3</div>
            <div className="text-white/80">Chi Nhánh</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">20k+</div>
            <div className="text-white/80">Khách Hàng Hài Lòng</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">50+</div>
            <div className="text-white/80">Sản Phẩm Độc Đáo</div>
          </div>
        </div>
      </div>
    </div>
  )
}

const teamMembers = [
  {
    id: 1,
    name: "Nguyễn Văn An",
    position: "Nhà Sáng Lập & CEO",
    description:
      "Với hơn 15 năm kinh nghiệm trong ngành F&B, anh An là người đặt nền móng cho triết lý kinh doanh của Café Elegance.",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 2,
    name: "Trần Thị Bình",
    position: "Bếp Trưởng",
    description:
      "Chị Bình tốt nghiệp từ Học viện Ẩm thực Le Cordon Bleu và mang đến những công thức bánh ngọt độc đáo cho quán.",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 3,
    name: "Lê Văn Cường",
    position: "Chuyên Gia Cà Phê",
    description:
      "Anh Cường là Q-Grader được chứng nhận quốc tế, người chịu trách nhiệm về chất lượng cà phê tại Café Elegance.",
    image: "/placeholder.svg?height=400&width=400",
  },
]
