"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Eye, HelpCircle, Search, Mail, Download } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"

export default function CustomersPage() {
  const { toast } = useToast()
  const [customers, setCustomers] = useState(initialCustomers)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCustomer, setSelectedCustomer] = useState(null)
  const [isCustomerDetailOpen, setIsCustomerDetailOpen] = useState(false)

  const handleShowHelp = () => {
    toast({
      title: "Hướng dẫn quản lý khách hàng",
      description: "Bạn có thể xem thông tin chi tiết và lịch sử mua hàng của khách hàng từ giao diện này.",
    })
  }

  const handleViewCustomerDetail = (customer) => {
    setSelectedCustomer(customer)
    setIsCustomerDetailOpen(true)
  }

  const filteredCustomers = customers.filter(
    (customer) =>
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.phone.includes(searchTerm),
  )

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">Quản Lý Khách Hàng</h1>
          <p className="text-muted-foreground">Xem và quản lý thông tin khách hàng</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={handleShowHelp}>
            <HelpCircle className="h-4 w-4 mr-2" />
            Trợ giúp
          </Button>
          <Button className="bg-amber-700 hover:bg-amber-800">
            <Download className="h-4 w-4 mr-2" />
            Xuất danh sách
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Tìm Kiếm Khách Hàng</CardTitle>
          <CardDescription>Tìm kiếm khách hàng theo tên, email hoặc số điện thoại</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Tìm kiếm khách hàng..."
              className="pl-8 w-full md:w-1/2"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Danh Sách Khách Hàng</CardTitle>
          <CardDescription>Quản lý tất cả khách hàng trong hệ thống</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Khách hàng</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Số điện thoại</TableHead>
                <TableHead>Số đơn hàng</TableHead>
                <TableHead>Tổng chi tiêu</TableHead>
                <TableHead className="text-right">Thao tác</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredCustomers.length > 0 ? (
                filteredCustomers.map((customer) => (
                  <TableRow key={customer.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={customer.avatar || "/placeholder-user.jpg"} alt={customer.name} />
                          <AvatarFallback>{customer.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <span className="font-medium">{customer.name}</span>
                      </div>
                    </TableCell>
                    <TableCell>{customer.email}</TableCell>
                    <TableCell>{customer.phone}</TableCell>
                    <TableCell>{customer.orders}</TableCell>
                    <TableCell>{customer.spent.toLocaleString("vi-VN")} VNĐ</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => (window.location.href = `mailto:${customer.email}`)}
                        >
                          <Mail className="h-4 w-4" />
                          <span className="sr-only">Email</span>
                        </Button>
                        <Button variant="ghost" size="sm" onClick={() => handleViewCustomerDetail(customer)}>
                          <Eye className="h-4 w-4 mr-1" />
                          Chi tiết
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={6} className="h-24 text-center">
                    Không tìm thấy khách hàng nào.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {selectedCustomer && (
        <Dialog open={isCustomerDetailOpen} onOpenChange={setIsCustomerDetailOpen}>
          <DialogContent className="sm:max-w-[800px]">
            <DialogHeader>
              <DialogTitle>Chi Tiết Khách Hàng</DialogTitle>
              <DialogDescription>Thông tin chi tiết về khách hàng {selectedCustomer.name}</DialogDescription>
            </DialogHeader>

            <Tabs defaultValue="info" className="mt-4">
              <TabsList className="grid grid-cols-3 w-full">
                <TabsTrigger value="info">Thông tin</TabsTrigger>
                <TabsTrigger value="orders">Đơn hàng</TabsTrigger>
                <TabsTrigger value="analytics">Phân tích</TabsTrigger>
              </TabsList>

              <TabsContent value="info" className="space-y-4 mt-4">
                <div className="flex items-center gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={selectedCustomer.avatar || "/placeholder-user.jpg"} alt={selectedCustomer.name} />
                    <AvatarFallback>{selectedCustomer.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-xl font-semibold">{selectedCustomer.name}</h3>
                    <p className="text-muted-foreground">Khách hàng từ {selectedCustomer.joinDate}</p>
                  </div>
                </div>

                <Separator />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-medium mb-2">Thông tin liên hệ</h3>
                    <div className="space-y-2">
                      <p>
                        <span className="text-muted-foreground">Email:</span> {selectedCustomer.email}
                      </p>
                      <p>
                        <span className="text-muted-foreground">Số điện thoại:</span> {selectedCustomer.phone}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">Địa chỉ</h3>
                    <p className="whitespace-pre-line">{selectedCustomer.address}</p>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="font-medium mb-2">Ghi chú</h3>
                  <p>{selectedCustomer.notes || "Không có ghi chú"}</p>
                </div>

                <div className="flex justify-end gap-2">
                  <Button variant="outline">Chỉnh sửa</Button>
                  <Button className="bg-amber-700 hover:bg-amber-800">
                    <Mail className="h-4 w-4 mr-2" />
                    Gửi email
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="orders" className="space-y-4 mt-4">
                <h3 className="font-medium mb-2">Lịch sử đơn hàng</h3>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Mã đơn</TableHead>
                      <TableHead>Ngày đặt</TableHead>
                      <TableHead>Tổng tiền</TableHead>
                      <TableHead>Trạng thái</TableHead>
                      <TableHead className="text-right">Thao tác</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {selectedCustomer.orderHistory.map((order) => (
                      <TableRow key={order.id}>
                        <TableCell className="font-medium">#{order.id}</TableCell>
                        <TableCell>{order.date}</TableCell>
                        <TableCell>{order.total.toLocaleString("vi-VN")} VNĐ</TableCell>
                        <TableCell>{order.status}</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4 mr-1" />
                            Chi tiết
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TabsContent>

              <TabsContent value="analytics" className="space-y-4 mt-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">Tổng chi tiêu</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{selectedCustomer.spent.toLocaleString("vi-VN")} VNĐ</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">Số đơn hàng</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{selectedCustomer.orders}</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">Giá trị trung bình</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">
                        {Math.round(selectedCustomer.spent / selectedCustomer.orders).toLocaleString("vi-VN")} VNĐ
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Sản phẩm yêu thích</CardTitle>
                    <CardDescription>Các sản phẩm được mua nhiều nhất</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Sản phẩm</TableHead>
                          <TableHead className="text-right">Số lần mua</TableHead>
                          <TableHead className="text-right">Tổng chi tiêu</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {selectedCustomer.favoriteProducts.map((product, index) => (
                          <TableRow key={index}>
                            <TableCell className="font-medium">{product.name}</TableCell>
                            <TableCell className="text-right">{product.count}</TableCell>
                            <TableCell className="text-right">{product.total.toLocaleString("vi-VN")} VNĐ</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}

const initialCustomers = [
  {
    id: "1",
    name: "Nguyễn Văn A",
    email: "nguyenvana@example.com",
    phone: "0901234567",
    orders: 12,
    spent: 3500000,
    joinDate: "01/01/2022",
    address: "123 Đường Nguyễn Huệ\nQuận 1\nTP. Hồ Chí Minh",
    notes: "Khách hàng thân thiết, thích cà phê đen và bánh ngọt",
    orderHistory: [
      { id: "3210", date: "15/04/2023", total: 235000, status: "Đã giao" },
      { id: "3180", date: "01/04/2023", total: 320000, status: "Đã giao" },
      { id: "3150", date: "15/03/2023", total: 275000, status: "Đã giao" },
    ],
    favoriteProducts: [
      { name: "Cà Phê Arabica Đặc Biệt", count: 8, total: 712000 },
      { name: "Bánh Tiramisu", count: 5, total: 275000 },
      { name: "Cappuccino Ý", count: 4, total: 260000 },
    ],
  },
  {
    id: "2",
    name: "Trần Thị B",
    email: "tranthib@example.com",
    phone: "0912345678",
    orders: 8,
    spent: 2100000,
    joinDate: "15/02/2022",
    address: "456 Đường Lê Lợi\nQuận 1\nTP. Hồ Chí Minh",
    notes: "Thích trà hơn cà phê",
    orderHistory: [
      { id: "3209", date: "14/04/2023", total: 180000, status: "Đang giao" },
      { id: "3170", date: "28/03/2023", total: 250000, status: "Đã giao" },
      { id: "3140", date: "10/03/2023", total: 195000, status: "Đã giao" },
    ],
    favoriteProducts: [
      { name: "Trà Ô Long Thượng Hạng", count: 6, total: 450000 },
      { name: "Bánh Croissant Bơ Pháp", count: 4, total: 180000 },
      { name: "Trà Đào Cam Sả", count: 3, total: 195000 },
    ],
  },
  {
    id: "3",
    name: "Lê Văn C",
    email: "levanc@example.com",
    phone: "0923456789",
    orders: 5,
    spent: 1800000,
    joinDate: "10/03/2022",
    address: "789 Đường Hai Bà Trưng\nQuận 3\nTP. Hồ Chí Minh",
    notes: "",
    orderHistory: [
      { id: "3208", date: "13/04/2023", total: 320000, status: "Đang xử lý" },
      { id: "3160", date: "20/03/2023", total: 280000, status: "Đã giao" },
      { id: "3130", date: "05/03/2023", total: 210000, status: "Đã giao" },
    ],
    favoriteProducts: [
      { name: "Cà Phê Arabica Đặc Biệt", count: 4, total: 356000 },
      { name: "Bánh Chocolate Lava", count: 3, total: 195000 },
      { name: "Americano", count: 2, total: 110000 },
    ],
  },
  {
    id: "4",
    name: "Phạm Thị D",
    email: "phamthid@example.com",
    phone: "0934567890",
    orders: 3,
    spent: 950000,
    joinDate: "05/04/2022",
    address: "101 Đường Võ Văn Tần\nQuận 3\nTP. Hồ Chí Minh",
    notes: "Mới đăng ký gần đây",
    orderHistory: [
      { id: "3207", date: "12/04/2023", total: 150000, status: "Đã hủy" },
      { id: "3190", date: "05/04/2023", total: 320000, status: "Đã giao" },
      { id: "3175", date: "30/03/2023", total: 480000, status: "Đã giao" },
    ],
    favoriteProducts: [
      { name: "Latte Macchiato", count: 3, total: 204000 },
      { name: "Bánh Mì Que Pate", count: 2, total: 70000 },
      { name: "Cappuccino Ý", count: 2, total: 130000 },
    ],
  },
  {
    id: "5",
    name: "Hoàng Văn E",
    email: "hoangvane@example.com",
    phone: "0945678901",
    orders: 7,
    spent: 2300000,
    joinDate: "20/02/2022",
    address: "202 Đường Cách Mạng Tháng 8\nQuận 10\nTP. Hồ Chí Minh",
    notes: "Thích đồ ăn nhẹ kèm cà phê",
    orderHistory: [
      { id: "3206", date: "11/04/2023", total: 275000, status: "Đã giao" },
      { id: "3165", date: "25/03/2023", total: 320000, status: "Đã giao" },
      { id: "3135", date: "08/03/2023", total: 195000, status: "Đã giao" },
    ],
    favoriteProducts: [
      { name: "Americano", count: 5, total: 275000 },
      { name: "Salad Trái Cây", count: 4, total: 260000 },
      { name: "Bánh Cheesecake Chanh Dây", count: 3, total: 180000 },
    ],
  },
]
