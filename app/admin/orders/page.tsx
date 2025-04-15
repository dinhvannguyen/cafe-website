"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Eye, Filter, HelpCircle, Search, Download, Printer } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"

export default function OrdersPage() {
  const { toast } = useToast()
  const [orders, setOrders] = useState(initialOrders)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [selectedOrder, setSelectedOrder] = useState(null)
  const [isOrderDetailOpen, setIsOrderDetailOpen] = useState(false)

  const handleShowHelp = () => {
    toast({
      title: "Hướng dẫn quản lý đơn hàng",
      description: "Bạn có thể xem, cập nhật trạng thái và quản lý tất cả đơn hàng từ giao diện này.",
    })
  }

  const handleViewOrderDetail = (order) => {
    setSelectedOrder(order)
    setIsOrderDetailOpen(true)
  }

  const handleUpdateOrderStatus = (id, newStatus) => {
    setOrders(
      orders.map((order) =>
        order.id === id
          ? {
              ...order,
              status: newStatus,
              updatedAt: new Date().toLocaleDateString("vi-VN"),
            }
          : order,
      ),
    )
    setIsOrderDetailOpen(false)
    toast({
      title: "Cập nhật trạng thái đơn hàng",
      description: `Đơn hàng #${id} đã được cập nhật thành "${newStatus}".`,
    })
  }

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.id.toString().includes(searchTerm) || order.customer.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || order.status === statusFilter
    return matchesSearch && matchesStatus
  })

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">Quản Lý Đơn Hàng</h1>
          <p className="text-muted-foreground">Xem và quản lý tất cả đơn hàng</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={handleShowHelp}>
            <HelpCircle className="h-4 w-4 mr-2" />
            Trợ giúp
          </Button>
          <Button className="bg-amber-700 hover:bg-amber-800">
            <Download className="h-4 w-4 mr-2" />
            Xuất báo cáo
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Tìm Kiếm và Lọc</CardTitle>
          <CardDescription>Tìm kiếm và lọc đơn hàng theo trạng thái</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Tìm kiếm theo mã đơn hoặc tên khách hàng..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Lọc theo trạng thái" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tất cả trạng thái</SelectItem>
                  <SelectItem value="Đang xử lý">Đang xử lý</SelectItem>
                  <SelectItem value="Đang giao">Đang giao</SelectItem>
                  <SelectItem value="Đã giao">Đã giao</SelectItem>
                  <SelectItem value="Đã hủy">Đã hủy</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Danh Sách Đơn Hàng</CardTitle>
          <CardDescription>Quản lý tất cả đơn hàng trong hệ thống</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Mã đơn</TableHead>
                <TableHead>Khách hàng</TableHead>
                <TableHead>Ngày đặt</TableHead>
                <TableHead>Cập nhật</TableHead>
                <TableHead>Tổng tiền</TableHead>
                <TableHead>Trạng thái</TableHead>
                <TableHead className="text-right">Thao tác</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredOrders.length > 0 ? (
                filteredOrders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell className="font-medium">#{order.id}</TableCell>
                    <TableCell>{order.customer}</TableCell>
                    <TableCell>{order.date}</TableCell>
                    <TableCell>{order.updatedAt || order.date}</TableCell>
                    <TableCell>{order.total.toLocaleString("vi-VN")} VNĐ</TableCell>
                    <TableCell>
                      <OrderStatusBadge status={order.status} />
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm" onClick={() => handleViewOrderDetail(order)}>
                        <Eye className="h-4 w-4 mr-1" />
                        Chi tiết
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={7} className="h-24 text-center">
                    Không tìm thấy đơn hàng nào.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {selectedOrder && (
        <Dialog open={isOrderDetailOpen} onOpenChange={setIsOrderDetailOpen}>
          <DialogContent className="sm:max-w-[800px]">
            <DialogHeader>
              <DialogTitle>Chi Tiết Đơn Hàng #{selectedOrder.id}</DialogTitle>
              <DialogDescription>
                Đặt ngày {selectedOrder.date} bởi {selectedOrder.customer}
              </DialogDescription>
            </DialogHeader>

            <Tabs defaultValue="details" className="mt-4">
              <TabsList className="grid grid-cols-3 w-full">
                <TabsTrigger value="details">Chi tiết</TabsTrigger>
                <TabsTrigger value="customer">Khách hàng</TabsTrigger>
                <TabsTrigger value="history">Lịch sử</TabsTrigger>
              </TabsList>

              <TabsContent value="details" className="space-y-4 mt-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium">Trạng thái đơn hàng</h3>
                    <OrderStatusBadge status={selectedOrder.status} className="mt-1" />
                  </div>
                  <div className="flex gap-2">
                    <Select
                      defaultValue={selectedOrder.status}
                      onValueChange={(value) => handleUpdateOrderStatus(selectedOrder.id, value)}
                    >
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Cập nhật trạng thái" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Đang xử lý">Đang xử lý</SelectItem>
                        <SelectItem value="Đang giao">Đang giao</SelectItem>
                        <SelectItem value="Đã giao">Đã giao</SelectItem>
                        <SelectItem value="Đã hủy">Đã hủy</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button variant="outline" size="icon">
                      <Printer className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="font-medium mb-2">Sản phẩm</h3>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Sản phẩm</TableHead>
                        <TableHead className="text-right">Số lượng</TableHead>
                        <TableHead className="text-right">Đơn giá</TableHead>
                        <TableHead className="text-right">Thành tiền</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {selectedOrder.items.map((item, index) => (
                        <TableRow key={index}>
                          <TableCell>{item.name}</TableCell>
                          <TableCell className="text-right">{item.quantity}</TableCell>
                          <TableCell className="text-right">{item.price.toLocaleString("vi-VN")} VNĐ</TableCell>
                          <TableCell className="text-right">
                            {(item.price * item.quantity).toLocaleString("vi-VN")} VNĐ
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>

                <div className="bg-muted/50 p-4 rounded-md">
                  <div className="flex justify-between mb-2">
                    <span>Tạm tính</span>
                    <span>{selectedOrder.subtotal.toLocaleString("vi-VN")} VNĐ</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Phí vận chuyển</span>
                    <span>{selectedOrder.shipping.toLocaleString("vi-VN")} VNĐ</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Giảm giá</span>
                    <span>-{selectedOrder.discount.toLocaleString("vi-VN")} VNĐ</span>
                  </div>
                  <Separator className="my-2" />
                  <div className="flex justify-between font-medium">
                    <span>Tổng cộng</span>
                    <span>{selectedOrder.total.toLocaleString("vi-VN")} VNĐ</span>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Phương thức thanh toán</h3>
                  <p>{selectedOrder.paymentMethod}</p>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Ghi chú</h3>
                  <p>{selectedOrder.note || "Không có ghi chú"}</p>
                </div>
              </TabsContent>

              <TabsContent value="customer" className="space-y-4 mt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-medium mb-2">Thông tin khách hàng</h3>
                    <div className="space-y-2">
                      <p>
                        <span className="text-muted-foreground">Họ tên:</span> {selectedOrder.customerInfo.name}
                      </p>
                      <p>
                        <span className="text-muted-foreground">Email:</span> {selectedOrder.customerInfo.email}
                      </p>
                      <p>
                        <span className="text-muted-foreground">Số điện thoại:</span> {selectedOrder.customerInfo.phone}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">Địa chỉ giao hàng</h3>
                    <p className="whitespace-pre-line">{selectedOrder.customerInfo.address}</p>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="font-medium mb-2">Lịch sử mua hàng</h3>
                  <p className="text-muted-foreground mb-2">
                    Khách hàng đã đặt {selectedOrder.customerInfo.orderCount} đơn hàng
                  </p>
                  <Button variant="outline" size="sm">
                    Xem tất cả đơn hàng
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="history" className="space-y-4 mt-4">
                <div>
                  <h3 className="font-medium mb-2">Lịch sử đơn hàng</h3>
                  <div className="space-y-4">
                    {selectedOrder.history.map((event, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="w-32 text-muted-foreground">{event.date}</div>
                        <div>
                          <p className="font-medium">{event.status}</p>
                          <p className="text-sm text-muted-foreground">{event.note}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}

function OrderStatusBadge({ status, className = "" }) {
  let badgeClass = ""

  switch (status) {
    case "Đã giao":
      badgeClass = "bg-green-100 text-green-800 hover:bg-green-100"
      break
    case "Đang xử lý":
      badgeClass = "bg-amber-100 text-amber-800 hover:bg-amber-100"
      break
    case "Đang giao":
      badgeClass = "bg-blue-100 text-blue-800 hover:bg-blue-100"
      break
    case "Đã hủy":
      badgeClass = "bg-red-100 text-red-800 hover:bg-red-100"
      break
    default:
      badgeClass = "bg-gray-100 text-gray-800 hover:bg-gray-100"
  }

  return (
    <Badge variant="outline" className={`${badgeClass} ${className}`}>
      {status}
    </Badge>
  )
}

const initialOrders = [
  {
    id: "3210",
    customer: "Nguyễn Văn A",
    date: "15/04/2023",
    updatedAt: "16/04/2023",
    subtotal: 205000,
    shipping: 30000,
    discount: 0,
    total: 235000,
    status: "Đã giao",
    paymentMethod: "Thanh toán khi nhận hàng (COD)",
    note: "",
    items: [
      { name: "Cà Phê Arabica Đặc Biệt", quantity: 2, price: 89000 },
      { name: "Bánh Tiramisu", quantity: 1, price: 55000 },
    ],
    customerInfo: {
      name: "Nguyễn Văn A",
      email: "nguyenvana@example.com",
      phone: "0901234567",
      address: "123 Đường Nguyễn Huệ\nQuận 1\nTP. Hồ Chí Minh",
      orderCount: 12,
    },
    history: [
      { date: "15/04/2023 08:30", status: "Đơn hàng đã đặt", note: "Khách hàng đã đặt đơn hàng thành công" },
      { date: "15/04/2023 09:15", status: "Đang xử lý", note: "Đơn hàng đang được xử lý" },
      { date: "15/04/2023 14:20", status: "Đang giao", note: "Đơn hàng đã được giao cho đơn vị vận chuyển" },
      { date: "16/04/2023 10:45", status: "Đã giao", note: "Đơn hàng đã được giao thành công" },
    ],
  },
  {
    id: "3209",
    customer: "Trần Thị B",
    date: "14/04/2023",
    subtotal: 150000,
    shipping: 30000,
    discount: 0,
    total: 180000,
    status: "Đang giao",
    paymentMethod: "Chuyển khoản ngân hàng",
    note: "Giao vào buổi chiều",
    items: [
      { name: "Cappuccino Ý", quantity: 2, price: 65000 },
      { name: "Bánh Croissant Bơ Pháp", quantity: 1, price: 45000 },
    ],
    customerInfo: {
      name: "Trần Thị B",
      email: "tranthib@example.com",
      phone: "0912345678",
      address: "456 Đường Lê Lợi\nQuận 1\nTP. Hồ Chí Minh",
      orderCount: 8,
    },
    history: [
      { date: "14/04/2023 10:20", status: "Đơn hàng đã đặt", note: "Khách hàng đã đặt đơn hàng thành công" },
      { date: "14/04/2023 11:05", status: "Đang xử lý", note: "Đơn hàng đang được xử lý" },
      { date: "14/04/2023 15:30", status: "Đang giao", note: "Đơn hàng đã được giao cho đơn vị vận chuyển" },
    ],
  },
  {
    id: "3208",
    customer: "Lê Văn C",
    date: "13/04/2023",
    subtotal: 290000,
    shipping: 30000,
    discount: 0,
    total: 320000,
    status: "Đang xử lý",
    paymentMethod: "Ví MoMo",
    note: "",
    items: [
      { name: "Cà Phê Arabica Đặc Biệt", quantity: 2, price: 89000 },
      { name: "Trà Ô Long Thượng Hạng", quantity: 1, price: 75000 },
      { name: "Bánh Chocolate Lava", quantity: 1, price: 65000 },
    ],
    customerInfo: {
      name: "Lê Văn C",
      email: "levanc@example.com",
      phone: "0923456789",
      address: "789 Đường Hai Bà Trưng\nQuận 3\nTP. Hồ Chí Minh",
      orderCount: 5,
    },
    history: [
      { date: "13/04/2023 14:45", status: "Đơn hàng đã đặt", note: "Khách hàng đã đặt đơn hàng thành công" },
      { date: "13/04/2023 15:30", status: "Đang xử lý", note: "Đơn hàng đang được xử lý" },
    ],
  },
  {
    id: "3207",
    customer: "Phạm Thị D",
    date: "12/04/2023",
    subtotal: 120000,
    shipping: 30000,
    discount: 0,
    total: 150000,
    status: "Đã hủy",
    paymentMethod: "Thanh toán khi nhận hàng (COD)",
    note: "",
    items: [
      { name: "Latte Macchiato", quantity: 2, price: 68000 },
      { name: "Bánh Mì Que Pate", quantity: 1, price: 35000 },
    ],
    customerInfo: {
      name: "Phạm Thị D",
      email: "phamthid@example.com",
      phone: "0934567890",
      address: "101 Đường Võ Văn Tần\nQuận 3\nTP. Hồ Chí Minh",
      orderCount: 3,
    },
    history: [
      { date: "12/04/2023 09:15", status: "Đơn hàng đã đặt", note: "Khách hàng đã đặt đơn hàng thành công" },
      { date: "12/04/2023 10:00", status: "Đang xử lý", note: "Đơn hàng đang được xử lý" },
      { date: "12/04/2023 14:30", status: "Đã hủy", note: "Khách hàng yêu cầu hủy đơn hàng" },
    ],
  },
  {
    id: "3206",
    customer: "Hoàng Văn E",
    date: "11/04/2023",
    subtotal: 245000,
    shipping: 30000,
    discount: 0,
    total: 275000,
    status: "Đã giao",
    paymentMethod: "ZaloPay",
    note: "Giao vào buổi sáng",
    items: [
      { name: "Americano", quantity: 3, price: 55000 },
      { name: "Bánh Cheesecake Chanh Dây", quantity: 1, price: 60000 },
      { name: "Salad Trái Cây", quantity: 1, price: 65000 },
    ],
    customerInfo: {
      name: "Hoàng Văn E",
      email: "hoangvane@example.com",
      phone: "0945678901",
      address: "202 Đường Cách Mạng Tháng 8\nQuận 10\nTP. Hồ Chí Minh",
      orderCount: 7,
    },
    history: [
      { date: "11/04/2023 08:30", status: "Đơn hàng đã đặt", note: "Khách hàng đã đặt đơn hàng thành công" },
      { date: "11/04/2023 09:15", status: "Đang xử lý", note: "Đơn hàng đang được xử lý" },
      { date: "11/04/2023 11:20", status: "Đang giao", note: "Đơn hàng đã được giao cho đơn vị vận chuyển" },
      { date: "11/04/2023 15:45", status: "Đã giao", note: "Đơn hàng đã được giao thành công" },
    ],
  },
]
