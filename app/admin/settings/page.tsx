"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { useToast } from "@/components/ui/use-toast"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Upload } from "lucide-react"

export default function SettingsPage() {
  const { toast } = useToast()
  const [activeTab, setActiveTab] = useState("general")

  const handleSaveGeneral = (e) => {
    e.preventDefault()
    toast({
      title: "Cài đặt đã được lưu",
      description: "Thông tin cửa hàng đã được cập nhật thành công.",
    })
  }

  const handleSavePayment = (e) => {
    e.preventDefault()
    toast({
      title: "Cài đặt thanh toán đã được lưu",
      description: "Phương thức thanh toán đã được cập nhật thành công.",
    })
  }

  const handleSaveNotifications = (e) => {
    e.preventDefault()
    toast({
      title: "Cài đặt thông báo đã được lưu",
      description: "Tùy chọn thông báo đã được cập nhật thành công.",
    })
  }

  const handleSaveAccount = (e) => {
    e.preventDefault()
    toast({
      title: "Thông tin tài khoản đã được lưu",
      description: "Thông tin tài khoản của bạn đã được cập nhật thành công.",
    })
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Cài Đặt</h1>
        <p className="text-muted-foreground">Quản lý cài đặt hệ thống và tài khoản của bạn</p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
        <TabsList>
          <TabsTrigger value="general">Thông tin cửa hàng</TabsTrigger>
          <TabsTrigger value="payment">Thanh toán</TabsTrigger>
          <TabsTrigger value="notifications">Thông báo</TabsTrigger>
          <TabsTrigger value="account">Tài khoản</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Thông Tin Cửa Hàng</CardTitle>
              <CardDescription>Cập nhật thông tin cơ bản về cửa hàng của bạn</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSaveGeneral} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="store-name">Tên cửa hàng</Label>
                  <Input id="store-name" defaultValue="Café Elegance" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="store-description">Mô tả</Label>
                  <Textarea
                    id="store-description"
                    defaultValue="Café Elegance - Trải nghiệm hương vị cà phê thượng hạng trong không gian sang trọng và hiện đại"
                    rows={3}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="store-email">Email liên hệ</Label>
                    <Input id="store-email" type="email" defaultValue="info@cafeelegance.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="store-phone">Số điện thoại</Label>
                    <Input id="store-phone" defaultValue="+84 123 456 789" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="store-address">Địa chỉ</Label>
                  <Input id="store-address" defaultValue="123 Đường Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh" />
                </div>
                <div className="space-y-2">
                  <Label>Logo cửa hàng</Label>
                  <div className="flex items-center gap-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src="/placeholder.svg" alt="Logo" />
                      <AvatarFallback>CE</AvatarFallback>
                    </Avatar>
                    <Button type="button" variant="outline">
                      <Upload className="h-4 w-4 mr-2" />
                      Tải lên logo mới
                    </Button>
                  </div>
                </div>
                <Button type="submit" className="bg-amber-700 hover:bg-amber-800">
                  Lưu thay đổi
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Giờ Mở Cửa</CardTitle>
              <CardDescription>Cập nhật giờ mở cửa của cửa hàng</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-3 gap-4">
                  <div className="font-medium">Ngày</div>
                  <div className="font-medium">Giờ mở cửa</div>
                  <div className="font-medium">Giờ đóng cửa</div>
                </div>
                <div className="grid grid-cols-3 gap-4 items-center">
                  <div>Thứ Hai - Thứ Sáu</div>
                  <Input defaultValue="07:00" type="time" />
                  <Input defaultValue="22:00" type="time" />
                </div>
                <div className="grid grid-cols-3 gap-4 items-center">
                  <div>Thứ Bảy</div>
                  <Input defaultValue="08:00" type="time" />
                  <Input defaultValue="23:00" type="time" />
                </div>
                <div className="grid grid-cols-3 gap-4 items-center">
                  <div>Chủ Nhật</div>
                  <Input defaultValue="08:00" type="time" />
                  <Input defaultValue="21:00" type="time" />
                </div>
                <Button type="submit" className="bg-amber-700 hover:bg-amber-800">
                  Lưu thay đổi
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="payment" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Phương Thức Thanh Toán</CardTitle>
              <CardDescription>Quản lý các phương thức thanh toán được chấp nhận</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSavePayment} className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="cod">Thanh toán khi nhận hàng (COD)</Label>
                      <p className="text-sm text-muted-foreground">Cho phép khách hàng thanh toán khi nhận hàng</p>
                    </div>
                    <Switch id="cod" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="bank-transfer">Chuyển khoản ngân hàng</Label>
                      <p className="text-sm text-muted-foreground">Cho phép thanh toán qua chuyển khoản ngân hàng</p>
                    </div>
                    <Switch id="bank-transfer" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="momo">Ví MoMo</Label>
                      <p className="text-sm text-muted-foreground">Cho phép thanh toán qua ví điện tử MoMo</p>
                    </div>
                    <Switch id="momo" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="zalopay">ZaloPay</Label>
                      <p className="text-sm text-muted-foreground">Cho phép thanh toán qua ví điện tử ZaloPay</p>
                    </div>
                    <Switch id="zalopay" defaultChecked />
                  </div>
                </div>

                <div className="space-y-2 pt-4">
                  <Label htmlFor="bank-info">Thông tin tài khoản ngân hàng</Label>
                  <Textarea
                    id="bank-info"
                    defaultValue="Ngân hàng: Vietcombank
Số tài khoản: 1234567890
Chủ tài khoản: CÔNG TY TNHH CAFÉ ELEGANCE
Chi nhánh: TP. Hồ Chí Minh"
                    rows={4}
                  />
                </div>

                <Button type="submit" className="bg-amber-700 hover:bg-amber-800">
                  Lưu thay đổi
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Cài Đặt Vận Chuyển</CardTitle>
              <CardDescription>Quản lý các tùy chọn vận chuyển</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="free-shipping">Miễn phí vận chuyển</Label>
                      <p className="text-sm text-muted-foreground">
                        Miễn phí vận chuyển cho đơn hàng trên mức nhất định
                      </p>
                    </div>
                    <Switch id="free-shipping" defaultChecked />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="free-shipping-threshold">Mức tối thiểu để miễn phí vận chuyển (VNĐ)</Label>
                  <Input id="free-shipping-threshold" type="number" defaultValue="300000" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="shipping-fee">Phí vận chuyển mặc định (VNĐ)</Label>
                  <Input id="shipping-fee" type="number" defaultValue="30000" />
                </div>

                <Button type="submit" className="bg-amber-700 hover:bg-amber-800">
                  Lưu thay đổi
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Cài Đặt Thông Báo</CardTitle>
              <CardDescription>Quản lý các tùy chọn thông báo</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSaveNotifications} className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="new-order">Đơn hàng mới</Label>
                      <p className="text-sm text-muted-foreground">Nhận thông báo khi có đơn hàng mới</p>
                    </div>
                    <Switch id="new-order" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="order-status">Cập nhật trạng thái đơn hàng</Label>
                      <p className="text-sm text-muted-foreground">Nhận thông báo khi trạng thái đơn hàng thay đổi</p>
                    </div>
                    <Switch id="order-status" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="low-stock">Cảnh báo hết hàng</Label>
                      <p className="text-sm text-muted-foreground">Nhận thông báo khi sản phẩm sắp hết hàng</p>
                    </div>
                    <Switch id="low-stock" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="customer-review">Đánh giá mới</Label>
                      <p className="text-sm text-muted-foreground">Nhận thông báo khi có đánh giá mới từ khách hàng</p>
                    </div>
                    <Switch id="customer-review" defaultChecked />
                  </div>
                </div>

                <div className="space-y-2 pt-4">
                  <Label htmlFor="notification-email">Email nhận thông báo</Label>
                  <Input id="notification-email" type="email" defaultValue="admin@cafeelegance.com" />
                </div>

                <Button type="submit" className="bg-amber-700 hover:bg-amber-800">
                  Lưu thay đổi
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="account" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Thông Tin Tài Khoản</CardTitle>
              <CardDescription>Cập nhật thông tin cá nhân của bạn</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSaveAccount} className="space-y-6">
                <div className="space-y-2">
                  <Label>Ảnh đại diện</Label>
                  <div className="flex items-center gap-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
                      <AvatarFallback>AD</AvatarFallback>
                    </Avatar>
                    <Button type="button" variant="outline">
                      <Upload className="h-4 w-4 mr-2" />
                      Tải lên ảnh mới
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="account-name">Họ và tên</Label>
                    <Input id="account-name" defaultValue="Nguyễn Văn Admin" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="account-email">Email</Label>
                    <Input id="account-email" type="email" defaultValue="admin@cafeelegance.com" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="account-phone">Số điện thoại</Label>
                    <Input id="account-phone" defaultValue="+84 987 654 321" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="account-role">Vai trò</Label>
                    <Input id="account-role" defaultValue="Quản trị viên" disabled />
                  </div>
                </div>

                <Button type="submit" className="bg-amber-700 hover:bg-amber-800">
                  Lưu thay đổi
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Đổi Mật Khẩu</CardTitle>
              <CardDescription>Cập nhật mật khẩu của bạn</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="current-password">Mật khẩu hiện tại</Label>
                  <Input id="current-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="new-password">Mật khẩu mới</Label>
                  <Input id="new-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Xác nhận mật khẩu mới</Label>
                  <Input id="confirm-password" type="password" />
                </div>
                <Button type="submit" className="bg-amber-700 hover:bg-amber-800">
                  Cập nhật mật khẩu
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
