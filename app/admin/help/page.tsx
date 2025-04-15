import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { HelpCircle, Mail, Phone } from "lucide-react"
import Link from "next/link"

export default function HelpPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Trung Tâm Trợ Giúp</h1>
        <p className="text-muted-foreground">Hướng dẫn sử dụng hệ thống quản lý Café Elegance</p>
      </div>

      <Tabs defaultValue="general" className="space-y-8">
        <TabsList>
          <TabsTrigger value="general">Tổng quan</TabsTrigger>
          <TabsTrigger value="products">Sản phẩm</TabsTrigger>
          <TabsTrigger value="orders">Đơn hàng</TabsTrigger>
          <TabsTrigger value="customers">Khách hàng</TabsTrigger>
          <TabsTrigger value="contact">Liên hệ hỗ trợ</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Giới thiệu hệ thống quản lý</CardTitle>
              <CardDescription>Tổng quan về hệ thống quản lý Café Elegance</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Hệ thống quản lý Café Elegance được thiết kế để giúp bạn dễ dàng quản lý mọi hoạt động kinh doanh của
                quán cafe. Từ quản lý sản phẩm, đơn hàng đến thông tin khách hàng, hệ thống cung cấp đầy đủ các công cụ
                cần thiết.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Trang Tổng Quan</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Hiển thị thông tin tổng quan về doanh thu, đơn hàng, sản phẩm và khách hàng. Bạn có thể xem các
                      biểu đồ và số liệu thống kê để nắm bắt tình hình kinh doanh.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Quản Lý Sản Phẩm</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Cho phép bạn thêm, sửa, xóa sản phẩm. Bạn có thể quản lý thông tin chi tiết, hình ảnh và giá cả
                      của từng sản phẩm.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Quản Lý Đơn Hàng</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Theo dõi và quản lý tất cả đơn hàng. Bạn có thể xem chi tiết đơn hàng, cập nhật trạng thái và xử
                      lý các đơn hàng mới.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Quản Lý Khách Hàng</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Quản lý thông tin khách hàng, xem lịch sử mua hàng và phân tích hành vi khách hàng để cải thiện
                      dịch vụ.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Các câu hỏi thường gặp</CardTitle>
              <CardDescription>Giải đáp những thắc mắc phổ biến khi sử dụng hệ thống</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Làm thế nào để đăng nhập vào hệ thống?</AccordionTrigger>
                  <AccordionContent>
                    Để đăng nhập vào hệ thống, bạn cần truy cập vào trang đăng nhập và nhập tên đăng nhập và mật khẩu đã
                    được cung cấp. Nếu bạn quên mật khẩu, bạn có thể sử dụng chức năng "Quên mật khẩu" để đặt lại mật
                    khẩu.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Làm thế nào để thêm sản phẩm mới?</AccordionTrigger>
                  <AccordionContent>
                    Để thêm sản phẩm mới, bạn cần truy cập vào mục "Sản Phẩm" và nhấn vào nút "Thêm Sản Phẩm". Sau đó,
                    điền đầy đủ thông tin sản phẩm vào form và nhấn "Lưu" để hoàn tất.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Làm thế nào để xem và quản lý đơn hàng?</AccordionTrigger>
                  <AccordionContent>
                    Để xem và quản lý đơn hàng, bạn cần truy cập vào mục "Đơn Hàng". Tại đây, bạn có thể xem danh sách
                    tất cả đơn hàng, tìm kiếm đơn hàng cụ thể, và cập nhật trạng thái đơn hàng.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Làm thế nào để xuất báo cáo doanh thu?</AccordionTrigger>
                  <AccordionContent>
                    Để xuất báo cáo doanh thu, bạn cần truy cập vào mục "Tổng Quan" và nhấn vào nút "Tạo báo cáo". Sau
                    đó, chọn loại báo cáo, khoảng thời gian và nhấn "Xuất báo cáo" để tải xuống báo cáo dưới dạng PDF
                    hoặc Excel.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>Làm thế nào để thay đổi thông tin cá nhân?</AccordionTrigger>
                  <AccordionContent>
                    Để thay đổi thông tin cá nhân, bạn cần nhấn vào avatar ở góc trên bên phải, chọn "Hồ sơ" và cập nhật
                    thông tin cần thiết. Sau khi hoàn tất, nhấn "Lưu thay đổi" để cập nhật thông tin.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="products" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Hướng dẫn quản lý sản phẩm</CardTitle>
              <CardDescription>Cách thêm, sửa, xóa và quản lý sản phẩm</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <h3 className="text-lg font-semibold">Thêm sản phẩm mới</h3>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>Truy cập vào mục "Sản Phẩm" từ menu bên trái</li>
                <li>Nhấn vào nút "Thêm Sản Phẩm" ở góc trên bên phải</li>
                <li>Điền đầy đủ thông tin sản phẩm vào form (các trường có dấu * là bắt buộc)</li>
                <li>Tải lên hình ảnh sản phẩm bằng cách nhấn vào khu vực "Kéo và thả hình ảnh vào đây"</li>
                <li>Nhấn "Thêm Sản Phẩm" để hoàn tất</li>
              </ol>

              <h3 className="text-lg font-semibold mt-6">Chỉnh sửa sản phẩm</h3>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>Tìm sản phẩm cần chỉnh sửa trong danh sách sản phẩm</li>
                <li>Nhấn vào biểu tượng bút (chỉnh sửa) bên phải sản phẩm</li>
                <li>Chọn "Chỉnh sửa" từ menu</li>
                <li>Cập nhật thông tin sản phẩm</li>
                <li>Nhấn "Lưu thay đổi" để hoàn tất</li>
              </ol>

              <h3 className="text-lg font-semibold mt-6">Xóa sản phẩm</h3>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>Tìm sản phẩm cần xóa trong danh sách sản phẩm</li>
                <li>Nhấn vào biểu tượng bút (chỉnh sửa) bên phải sản phẩm</li>
                <li>Chọn "Xóa" từ menu</li>
                <li>Xác nhận việc xóa sản phẩm</li>
              </ol>

              <div className="bg-amber-50 p-4 rounded-md mt-6 border border-amber-200">
                <h4 className="text-amber-800 font-medium flex items-center">
                  <HelpCircle className="h-4 w-4 mr-2" />
                  Mẹo hữu ích
                </h4>
                <ul className="list-disc list-inside space-y-1 ml-4 text-amber-800 mt-2">
                  <li>Sử dụng chức năng tìm kiếm để nhanh chóng tìm sản phẩm cần quản lý</li>
                  <li>Sử dụng bộ lọc danh mục để xem sản phẩm theo từng danh mục</li>
                  <li>
                    Thay vì xóa sản phẩm, bạn có thể đặt trạng thái "Ẩn" nếu muốn tạm thời không hiển thị sản phẩm
                  </li>
                  <li>
                    Hình ảnh sản phẩm nên có kích thước đồng đều và chất lượng tốt để trang web trông chuyên nghiệp
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="orders" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Hướng dẫn quản lý đơn hàng</CardTitle>
              <CardDescription>Cách xem, cập nhật và xử lý đơn hàng</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <h3 className="text-lg font-semibold">Xem danh sách đơn hàng</h3>
              <p>
                Truy cập vào mục "Đơn Hàng" từ menu bên trái để xem danh sách tất cả đơn hàng. Bạn có thể sử dụng chức
                năng tìm kiếm và bộ lọc để tìm đơn hàng cụ thể.
              </p>

              <h3 className="text-lg font-semibold mt-6">Xem chi tiết đơn hàng</h3>
              <p>
                Nhấn vào nút "Chi tiết" bên phải đơn hàng để xem thông tin chi tiết về đơn hàng, bao gồm sản phẩm, thông
                tin khách hàng và lịch sử trạng thái.
              </p>

              <h3 className="text-lg font-semibold mt-6">Cập nhật trạng thái đơn hàng</h3>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>Mở chi tiết đơn hàng</li>
                <li>Nhấn vào nút "Cập nhật trạng thái"</li>
                <li>Chọn trạng thái mới từ danh sách (Đang xử lý, Đang giao hàng, Đã giao, Đã hủy)</li>
                <li>Thêm ghi chú nếu cần thiết</li>
                <li>Nhấn "Lưu" để cập nhật trạng thái</li>
              </ol>

              <h3 className="text-lg font-semibold mt-6">In hóa đơn</h3>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>Mở chi tiết đơn hàng</li>
                <li>Nhấn vào nút "In hóa đơn"</li>
                <li>Xem trước hóa đơn và điều chỉnh nếu cần</li>
                <li>Nhấn "In" để in hóa đơn hoặc "Tải xuống PDF" để lưu hóa đơn dưới dạng PDF</li>
              </ol>

              <div className="bg-amber-50 p-4 rounded-md mt-6 border border-amber-200">
                <h4 className="text-amber-800 font-medium flex items-center">
                  <HelpCircle className="h-4 w-4 mr-2" />
                  Mẹo hữu ích
                </h4>
                <ul className="list-disc list-inside space-y-1 ml-4 text-amber-800 mt-2">
                  <li>Kiểm tra đơn hàng mới thường xuyên để xử lý kịp thời</li>
                  <li>Sử dụng bộ lọc trạng thái để xem các đơn hàng cần xử lý</li>
                  <li>Luôn cập nhật trạng thái đơn hàng để khách hàng có thể theo dõi</li>
                  <li>Thêm ghi chú cho mỗi cập nhật trạng thái để dễ dàng theo dõi lịch sử xử lý</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="customers" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Hướng dẫn quản lý khách hàng</CardTitle>
              <CardDescription>Cách xem và quản lý thông tin khách hàng</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <h3 className="text-lg font-semibold">Xem danh sách khách hàng</h3>
              <p>
                Truy cập vào mục "Khách Hàng" từ menu bên trái để xem danh sách tất cả khách hàng. Bạn có thể sử dụng
                chức năng tìm kiếm để tìm khách hàng cụ thể.
              </p>

              <h3 className="text-lg font-semibold mt-6">Xem chi tiết khách hàng</h3>
              <p>
                Nhấn vào nút "Chi tiết" bên phải thông tin khách hàng để xem thông tin chi tiết, bao gồm thông tin cá
                nhân, lịch sử mua hàng và ghi chú.
              </p>

              <h3 className="text-lg font-semibold mt-6">Thêm ghi chú cho khách hàng</h3>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>Mở chi tiết khách hàng</li>
                <li>Nhấn vào nút "Thêm ghi chú"</li>
                <li>Nhập nội dung ghi chú</li>
                <li>Nhấn "Lưu" để thêm ghi chú</li>
              </ol>

              <h3 className="text-lg font-semibold mt-6">Phân tích hành vi khách hàng</h3>
              <p>
                Trong chi tiết khách hàng, bạn có thể xem các thống kê về hành vi mua hàng, bao gồm tổng số đơn hàng,
                tổng chi tiêu và sản phẩm yêu thích. Sử dụng thông tin này để cá nhân hóa dịch vụ và tăng cường trải
                nghiệm khách hàng.
              </p>

              <div className="bg-amber-50 p-4 rounded-md mt-6 border border-amber-200">
                <h4 className="text-amber-800 font-medium flex items-center">
                  <HelpCircle className="h-4 w-4 mr-2" />
                  Mẹo hữu ích
                </h4>
                <ul className="list-disc list-inside space-y-1 ml-4 text-amber-800 mt-2">
                  <li>Sử dụng thông tin khách hàng để tạo các chương trình khuyến mãi cá nhân hóa</li>
                  <li>Theo dõi khách hàng thân thiết để cung cấp ưu đãi đặc biệt</li>
                  <li>Ghi chú các sở thích và yêu cầu đặc biệt của khách hàng để cải thiện dịch vụ</li>
                  <li>Bảo mật thông tin khách hàng và tuân thủ các quy định về bảo vệ dữ liệu</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="contact" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Liên hệ hỗ trợ</CardTitle>
              <CardDescription>Các kênh liên hệ khi bạn cần hỗ trợ</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base flex items-center">
                      <Mail className="h-4 w-4 mr-2" />
                      Email hỗ trợ
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-2">
                      Gửi email cho chúng tôi để được hỗ trợ. Chúng tôi sẽ phản hồi trong vòng 24 giờ.
                    </p>
                    <Button variant="outline" asChild>
                      <Link href="mailto:support@cafeelegance.com">support@cafeelegance.com</Link>
                    </Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base flex items-center">
                      <Phone className="h-4 w-4 mr-2" />
                      Hotline hỗ trợ
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-2">
                      Gọi cho chúng tôi trong giờ làm việc (8:00 - 17:00, Thứ Hai - Thứ Sáu).
                    </p>
                    <Button variant="outline" asChild>
                      <Link href="tel:+84123456789">+84 123 456 789</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Gửi yêu cầu hỗ trợ</CardTitle>
                  <CardDescription>Điền thông tin dưới đây để gửi yêu cầu hỗ trợ</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Họ và tên</Label>
                        <Input id="name" placeholder="Nhập họ và tên của bạn" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="Nhập email của bạn" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Tiêu đề</Label>
                      <Input id="subject" placeholder="Nhập tiêu đề yêu cầu hỗ trợ" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Nội dung</Label>
                      <Textarea id="message" placeholder="Mô tả chi tiết vấn đề bạn đang gặp phải" rows={5} />
                    </div>
                    <Button className="bg-amber-700 hover:bg-amber-800">Gửi yêu cầu</Button>
                  </form>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
