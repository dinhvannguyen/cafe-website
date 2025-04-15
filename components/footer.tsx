import Link from "next/link"
import { Coffee, Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-white">
      <div className="container py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Coffee className="h-6 w-6 text-amber-500" />
              <span className="text-xl font-bold">Café Elegance</span>
            </div>
            <p className="text-gray-400 mb-6">
              Trải nghiệm hương vị cà phê thượng hạng trong không gian sang trọng và hiện đại
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-400 hover:text-amber-500">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-amber-500">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-amber-500">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Liên Kết Nhanh</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-amber-500">
                  Trang Chủ
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-gray-400 hover:text-amber-500">
                  Thực Đơn
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-amber-500">
                  Về Chúng Tôi
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-amber-500">
                  Liên Hệ
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-amber-500">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Thông Tin Liên Hệ</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                <span className="text-gray-400">123 Đường Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-amber-500 shrink-0" />
                <span className="text-gray-400">+84 123 456 789</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-amber-500 shrink-0" />
                <span className="text-gray-400">info@cafeelegance.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Giờ Mở Cửa</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex justify-between">
                <span>Thứ Hai - Thứ Sáu:</span>
                <span>7:00 - 22:00</span>
              </li>
              <li className="flex justify-between">
                <span>Thứ Bảy:</span>
                <span>8:00 - 23:00</span>
              </li>
              <li className="flex justify-between">
                <span>Chủ Nhật:</span>
                <span>8:00 - 21:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Café Elegance. Tất cả các quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  )
}
