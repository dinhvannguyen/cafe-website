import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function GuidePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Hướng Dẫn Sử Dụng</h1>
        <p className="text-muted-foreground">Hướng dẫn chi tiết cách sử dụng hệ thống quản lý Café Elegance</p>
      </div>

      <Tabs defaultValue="getting-started" className="space-y-8">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full">
          <TabsTrigger value="getting-started">Bắt đầu</TabsTrigger>
          <TabsTrigger value="products">Sản phẩm</TabsTrigger>
          <TabsTrigger value="orders">Đơn hàng</TabsTrigger>
          <TabsTrigger value="website">Trang web</TabsTrigger>
        </TabsList>

        <TabsContent value="getting-started" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Chào mừng đến với Café Elegance</CardTitle>
              <CardDescription>Hướng dẫn cơ bản để bắt đầu sử dụng hệ thống</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Giới thiệu</h3>
                  <p className="text-muted-foreground mb-4">
                    Hệ thống quản lý Café Elegance được thiết kế để giúp bạn dễ dàng quản lý mọi hoạt động kinh doanh
                    của quán cafe. Từ quản lý sản phẩm, đơn hàng đến thông tin khách hàng, hệ thống cung cấp đầy đủ các
                    công cụ cần thiết.
                  </p>
                  <p className="text-muted-foreground">
                    Hướng dẫn này sẽ giúp bạn làm quen với các tính năng cơ bản và cách sử dụng hệ thống một cách hiệu
                    quả.
                  </p>
                </div>
                <div className="relative h-[200px] rounded-lg overflow-hidden">
                  <Image src="/placeholder.svg?height=400&width=600" alt="Dashboard" fill className="object-cover" />
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-semibold mb-4">Các tính năng chính</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Tổng Quan</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Xem tổng quan về doanh thu, đơn hàng, sản phẩm và khách hàng.
                      </p>
                      <Button variant="link" asChild className="px-0">
                        <Link href="/admin">
                          Xem tổng quan <ArrowRight className="h-4 w-4 ml-1" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Quản Lý Sản Phẩm</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Thêm, sửa, xóa và quản lý sản phẩm trong hệ thống.
                      </p>
                      <Button variant="link" asChild className="px-0">
                        <Link href="/admin/products">
                          Quản lý sản phẩm <ArrowRight className="h-4 w-4 ml-1" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Quản Lý Đơn Hàng</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Xem và quản lý đơn hàng, cập nhật trạng thái đơn hàng.
                      </p>
                      <Button variant="link" asChild className="px-0">
                        <Link href="/admin/orders">
                          Quản lý đơn hàng <ArrowRight className="h-4 w-4 ml-1" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Quản Lý Khách Hàng</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Xem thông tin và lịch sử mua hàng của khách hàng.
                      </p>
                      <Button variant="link" asChild className="px-0">
                        <Link href="/admin/customers">
                          Quản lý khách hàng <ArrowRight className="h-4 w-4 ml-1" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-semibold mb-4">Các bước bắt đầu</h3>
                <ol className="space-y-4 ml-6 list-decimal">
                  <li>
                    <p className="font-medium">Đăng nhập vào hệ thống</p>
                    <p className="text-muted-foreground">
                      Truy cập trang đăng nhập của hệ thống và sử dụng tài khoản quản trị để đăng nhập.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium">Thiết lập thông tin quán cafe</p>
                    <p className="text-muted-foreground">
                      Cập nhật thông tin cơ bản về quán cafe như tên, địa chỉ, số điện thoại và giờ mở cửa.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium">Quản lý sản phẩm</p>
                    <p className="text-muted-foreground">
                      Thêm các sản phẩm vào hệ thống, bao gồm tên, mô tả, giá và hình ảnh.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium">Quản lý đơn hàng</p>
                    <p className="text-muted-foreground">Theo dõi và xử lý các đơn hàng từ khách hàng.</p>
                  </li>
                </ol>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="products" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Quản lý sản phẩm</CardTitle>
              <CardDescription>Hướng dẫn quản lý sản phẩm trong hệ thống</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <p>Nội dung hướng dẫn quản lý sản phẩm sẽ được cập nhật sớm.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="orders" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Quản lý đơn hàng</CardTitle>
              <CardDescription>Hướng dẫn quản lý đơn hàng trong hệ thống</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <p>Nội dung hướng dẫn quản lý đơn hàng sẽ được cập nhật sớm.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="website" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Quản lý trang web</CardTitle>
              <CardDescription>Hướng dẫn quản lý và tùy chỉnh trang web</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <p>Nội dung hướng dẫn quản lý trang web sẽ được cập nhật sớm.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
