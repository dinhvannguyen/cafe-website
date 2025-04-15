"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, DollarSign, Package, ShoppingBag, Users, TrendingUp, ArrowUpRight } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

export default function AdminDashboard() {
  const { toast } = useToast()
  const [activeTab, setActiveTab] = useState("overview")

  const showHelpToast = () => {
    toast({
      title: "Trợ giúp nhanh",
      description:
        "Bạn có thể xem hướng dẫn chi tiết trong mục Trợ giúp hoặc liên hệ với chúng tôi qua email support@cafeelegance.com",
    })
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">Tổng Quan</h1>
          <p className="text-muted-foreground">Xem tổng quan về hoạt động kinh doanh của bạn</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={showHelpToast}>
            Trợ giúp
          </Button>
          <Button className="bg-amber-700 hover:bg-amber-800">Tạo báo cáo</Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
        <TabsList className="grid grid-cols-2 md:w-[400px]">
          <TabsTrigger value="overview">Tổng quan</TabsTrigger>
          <TabsTrigger value="analytics">Phân tích</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-8">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Doanh Thu</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12.5M VNĐ</div>
                <div className="flex items-center text-xs text-muted-foreground mt-1">
                  <ArrowUpRight className="h-3 w-3 text-green-500 mr-1" />
                  <span className="text-green-500 font-medium">+20.1%</span>
                  <span className="ml-1">so với tháng trước</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Đơn Hàng</CardTitle>
                <ShoppingBag className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+573</div>
                <div className="flex items-center text-xs text-muted-foreground mt-1">
                  <ArrowUpRight className="h-3 w-3 text-green-500 mr-1" />
                  <span className="text-green-500 font-medium">+12.2%</span>
                  <span className="ml-1">so với tháng trước</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Sản Phẩm</CardTitle>
                <Package className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24</div>
                <div className="flex items-center text-xs text-muted-foreground mt-1">
                  <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
                  <span>+2 sản phẩm mới</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Khách Hàng</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+2350</div>
                <div className="flex items-center text-xs text-muted-foreground mt-1">
                  <ArrowUpRight className="h-3 w-3 text-green-500 mr-1" />
                  <span className="text-green-500 font-medium">+18.1%</span>
                  <span className="ml-1">so với tháng trước</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Tổng Quan Doanh Thu</CardTitle>
                <CardDescription>Biểu đồ doanh thu theo tháng</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <RevenueChart />
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Đơn Hàng Gần Đây</CardTitle>
                <CardDescription>10 đơn hàng mới nhất cần xử lý</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {recentOrders.map((order) => (
                    <div key={order.id} className="flex items-center">
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">#{order.id}</p>
                        <p className="text-sm text-muted-foreground">{order.customer}</p>
                      </div>
                      <div className="ml-auto font-medium">
                        {order.status === "Đã giao" ? (
                          <span className="text-green-500">{order.status}</span>
                        ) : order.status === "Đang xử lý" ? (
                          <span className="text-amber-500">{order.status}</span>
                        ) : (
                          <span className="text-red-500">{order.status}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Sản Phẩm Bán Chạy</CardTitle>
                <CardDescription>Top 5 sản phẩm bán chạy nhất</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topProducts.map((product, index) => (
                    <div key={product.id} className="flex items-center">
                      <div className="font-medium w-6 text-muted-foreground">{index + 1}.</div>
                      <div className="ml-2">
                        <p className="text-sm font-medium leading-none">{product.name}</p>
                        <p className="text-sm text-muted-foreground">{product.sold} đã bán</p>
                      </div>
                      <div className="ml-auto font-medium">{product.revenue.toLocaleString("vi-VN")}đ</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Khách Hàng Thân Thiết</CardTitle>
                <CardDescription>Top 5 khách hàng có giá trị đơn hàng cao nhất</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topCustomers.map((customer, index) => (
                    <div key={customer.id} className="flex items-center">
                      <div className="font-medium w-6 text-muted-foreground">{index + 1}.</div>
                      <div className="ml-2">
                        <p className="text-sm font-medium leading-none">{customer.name}</p>
                        <p className="text-sm text-muted-foreground">{customer.orders} đơn hàng</p>
                      </div>
                      <div className="ml-auto font-medium">{customer.spent.toLocaleString("vi-VN")}đ</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Hoạt Động Gần Đây</CardTitle>
                <CardDescription>Các hoạt động mới nhất trên hệ thống</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity) => (
                    <div key={activity.id} className="flex items-start">
                      <div className="mr-2 mt-0.5">
                        <activity.icon className="h-4 w-4 text-muted-foreground" />
                      </div>
                      <div>
                        <p className="text-sm">{activity.description}</p>
                        <p className="text-xs text-muted-foreground">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Phân Tích Chi Tiết</CardTitle>
              <CardDescription>Xem phân tích chi tiết về hoạt động kinh doanh</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-md">
                <BarChart className="h-16 w-16 text-muted" />
                <span className="ml-2 text-muted-foreground">Biểu đồ phân tích chi tiết</span>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function RevenueChart() {
  return (
    <div className="h-[200px] flex items-center justify-center bg-muted/20 rounded-md">
      <BarChart className="h-16 w-16 text-muted" />
      <span className="ml-2 text-muted-foreground">Biểu đồ doanh thu</span>
    </div>
  )
}

const recentOrders = [
  { id: "3210", customer: "Nguyễn Văn A", status: "Đã giao" },
  { id: "3209", customer: "Trần Thị B", status: "Đang xử lý" },
  { id: "3208", customer: "Lê Văn C", status: "Đang xử lý" },
  { id: "3207", customer: "Phạm Thị D", status: "Đã hủy" },
  { id: "3206", customer: "Hoàng Văn E", status: "Đã giao" },
]

const topProducts = [
  { id: 1, name: "Cà Phê Arabica Đặc Biệt", sold: 124, revenue: 11036000 },
  { id: 2, name: "Cappuccino Ý", sold: 98, revenue: 6370000 },
  { id: 3, name: "Bánh Tiramisu", sold: 76, revenue: 4180000 },
  { id: 4, name: "Trà Ô Long Thượng Hạng", sold: 65, revenue: 4875000 },
  { id: 5, name: "Americano", sold: 62, revenue: 3410000 },
]

const topCustomers = [
  { id: 1, name: "Nguyễn Văn A", orders: 12, spent: 3500000 },
  { id: 2, name: "Trần Thị B", orders: 8, spent: 2100000 },
  { id: 3, name: "Lê Văn C", orders: 5, spent: 1800000 },
  { id: 4, name: "Bùi Thị H", orders: 9, spent: 2700000 },
  { id: 5, name: "Hoàng Văn E", orders: 7, spent: 2300000 },
]

const recentActivities = [
  { id: 1, icon: Package, description: "Sản phẩm mới 'Latte Caramel' đã được thêm vào hệ thống", time: "5 phút trước" },
  { id: 2, icon: ShoppingBag, description: "Đơn hàng #3210 đã được xác nhận", time: "15 phút trước" },
  { id: 3, icon: Users, description: "Khách hàng mới Trần Văn F đã đăng ký", time: "30 phút trước" },
  {
    id: 4,
    icon: DollarSign,
    description: "Thanh toán 350.000đ đã được xác nhận cho đơn hàng #3209",
    time: "1 giờ trước",
  },
  { id: 5, icon: ShoppingBag, description: "Đơn hàng #3208 đã được giao thành công", time: "2 giờ trước" },
]
