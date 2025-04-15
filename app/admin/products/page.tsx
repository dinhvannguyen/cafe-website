"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { PenSquare, Plus, Search, Trash, Upload, HelpCircle, Filter } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

export default function ProductsPage() {
  const { toast } = useToast()
  const [products, setProducts] = useState(initialProducts)
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [isAddProductOpen, setIsAddProductOpen] = useState(false)
  const [newProduct, setNewProduct] = useState({
    id: "",
    name: "",
    description: "",
    price: "",
    category: "",
    image: "/placeholder.svg?height=400&width=600",
    status: "active",
  })

  const handleProductChange = (e) => {
    const { name, value } = e.target
    setNewProduct((prev) => ({ ...prev, [name]: value }))
  }

  const handleAddProduct = (e) => {
    e.preventDefault()
    const productToAdd = {
      ...newProduct,
      id: Date.now().toString(),
      price: Number.parseFloat(newProduct.price),
      rating: 0,
      reviews: 0,
    }
    setProducts([...products, productToAdd])
    setNewProduct({
      id: "",
      name: "",
      description: "",
      price: "",
      category: "",
      image: "/placeholder.svg?height=400&width=600",
      status: "active",
    })
    setIsAddProductOpen(false)
    toast({
      title: "Sản phẩm đã được thêm",
      description: `Sản phẩm "${productToAdd.name}" đã được thêm thành công.`,
    })
  }

  const handleDeleteProduct = (id) => {
    const productToDelete = products.find((product) => product.id === id)
    setProducts(products.filter((product) => product.id !== id))
    toast({
      title: "Sản phẩm đã được xóa",
      description: `Sản phẩm "${productToDelete.name}" đã được xóa thành công.`,
    })
  }

  const handleShowHelp = () => {
    toast({
      title: "Hướng dẫn quản lý sản phẩm",
      description:
        "Bạn có thể thêm, sửa, xóa sản phẩm từ giao diện này. Để thêm sản phẩm mới, nhấn vào nút 'Thêm sản phẩm'.",
    })
  }

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = categoryFilter === "all" || product.category === categoryFilter
    return matchesSearch && matchesCategory
  })

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">Quản Lý Sản Phẩm</h1>
          <p className="text-muted-foreground">Thêm, sửa, xóa và quản lý sản phẩm của bạn</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={handleShowHelp}>
            <HelpCircle className="h-4 w-4 mr-2" />
            Trợ giúp
          </Button>
          <Dialog open={isAddProductOpen} onOpenChange={setIsAddProductOpen}>
            <DialogTrigger asChild>
              <Button className="bg-amber-700 hover:bg-amber-800">
                <Plus className="mr-2 h-4 w-4" /> Thêm Sản Phẩm
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>Thêm Sản Phẩm Mới</DialogTitle>
                <DialogDescription>Điền thông tin sản phẩm mới vào form dưới đây.</DialogDescription>
              </DialogHeader>
              <form onSubmit={handleAddProduct} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">
                      Tên sản phẩm <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={newProduct.name}
                      onChange={handleProductChange}
                      placeholder="Nhập tên sản phẩm"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="price">
                      Giá (VNĐ) <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="price"
                      name="price"
                      type="number"
                      value={newProduct.price}
                      onChange={handleProductChange}
                      placeholder="Nhập giá sản phẩm"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">
                    Mô tả <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    id="description"
                    name="description"
                    value={newProduct.description}
                    onChange={handleProductChange}
                    placeholder="Nhập mô tả sản phẩm"
                    required
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="category">
                      Danh mục <span className="text-red-500">*</span>
                    </Label>
                    <Select
                      name="category"
                      value={newProduct.category}
                      onValueChange={(value) => setNewProduct({ ...newProduct, category: value })}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Chọn danh mục" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="coffee">Cà Phê</SelectItem>
                        <SelectItem value="tea">Trà</SelectItem>
                        <SelectItem value="pastries">Bánh Ngọt</SelectItem>
                        <SelectItem value="snacks">Đồ Ăn Nhẹ</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="status">Trạng thái</Label>
                    <Select
                      name="status"
                      value={newProduct.status}
                      onValueChange={(value) => setNewProduct({ ...newProduct, status: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Chọn trạng thái" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="active">Đang bán</SelectItem>
                        <SelectItem value="outOfStock">Hết hàng</SelectItem>
                        <SelectItem value="hidden">Ẩn</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Hình ảnh sản phẩm</Label>
                  <div className="border-2 border-dashed rounded-md p-6 flex flex-col items-center justify-center">
                    <Upload className="h-8 w-8 text-muted-foreground mb-2" />
                    <p className="text-sm text-muted-foreground mb-1">Kéo và thả hình ảnh vào đây hoặc</p>
                    <Button type="button" variant="outline" size="sm">
                      Chọn hình ảnh
                    </Button>
                    <p className="text-xs text-muted-foreground mt-2">PNG, JPG hoặc GIF. Tối đa 2MB.</p>
                  </div>
                </div>
                <DialogFooter>
                  <Button type="button" variant="outline" onClick={() => setIsAddProductOpen(false)}>
                    Hủy
                  </Button>
                  <Button type="submit" className="bg-amber-700 hover:bg-amber-800">
                    Thêm Sản Phẩm
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Tìm Kiếm và Lọc</CardTitle>
          <CardDescription>Tìm kiếm và lọc sản phẩm theo danh mục</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Tìm kiếm sản phẩm..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Lọc theo danh mục" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tất cả danh mục</SelectItem>
                  <SelectItem value="coffee">Cà Phê</SelectItem>
                  <SelectItem value="tea">Trà</SelectItem>
                  <SelectItem value="pastries">Bánh Ngọt</SelectItem>
                  <SelectItem value="snacks">Đồ Ăn Nhẹ</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Danh Sách Sản Phẩm</CardTitle>
          <CardDescription>Quản lý tất cả sản phẩm trong hệ thống</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[80px]">Ảnh</TableHead>
                <TableHead>Tên sản phẩm</TableHead>
                <TableHead>Danh mục</TableHead>
                <TableHead>Trạng thái</TableHead>
                <TableHead className="text-right">Giá (VNĐ)</TableHead>
                <TableHead className="text-right">Thao tác</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell>
                      <div className="relative w-12 h-12 rounded-md overflow-hidden">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </TableCell>
                    <TableCell className="font-medium">{product.name}</TableCell>
                    <TableCell>
                      {product.category === "coffee" && "Cà Phê"}
                      {product.category === "tea" && "Trà"}
                      {product.category === "pastries" && "Bánh Ngọt"}
                      {product.category === "snacks" && "Đồ Ăn Nhẹ"}
                    </TableCell>
                    <TableCell>
                      {product.status === "active" && (
                        <Badge variant="outline" className="bg-green-100 text-green-800 hover:bg-green-100">
                          Đang bán
                        </Badge>
                      )}
                      {product.status === "outOfStock" && (
                        <Badge variant="outline" className="bg-red-100 text-red-800 hover:bg-red-100">
                          Hết hàng
                        </Badge>
                      )}
                      {product.status === "hidden" && (
                        <Badge variant="outline" className="bg-gray-100 text-gray-800 hover:bg-gray-100">
                          Ẩn
                        </Badge>
                      )}
                      {!product.status && (
                        <Badge variant="outline" className="bg-green-100 text-green-800 hover:bg-green-100">
                          Đang bán
                        </Badge>
                      )}
                    </TableCell>
                    <TableCell className="text-right">{product.price.toLocaleString("vi-VN")}</TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Mở menu</span>
                            <PenSquare className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Thao tác</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>Chỉnh sửa</DropdownMenuItem>
                          <DropdownMenuItem>Xem chi tiết</DropdownMenuItem>
                          <DropdownMenuItem>Sao chép</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-red-600" onClick={() => handleDeleteProduct(product.id)}>
                            <Trash className="h-4 w-4 mr-2" />
                            Xóa
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={6} className="h-24 text-center">
                    Không tìm thấy sản phẩm nào.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

const initialProducts = [
  {
    id: "1",
    name: "Cà Phê Arabica Đặc Biệt",
    description: "Hương vị đậm đà, hậu vị ngọt nhẹ với notes của chocolate và hạt dẻ",
    price: 89000,
    category: "coffee",
    image: "/placeholder.svg?height=400&width=600",
    rating: 5,
    reviews: 124,
    status: "active",
  },
  {
    id: "2",
    name: "Cappuccino Ý",
    description: "Cà phê espresso truyền thống kết hợp với sữa tươi và bọt sữa mịn",
    price: 65000,
    category: "coffee",
    image: "/placeholder.svg?height=400&width=600",
    rating: 4,
    reviews: 98,
    status: "active",
  },
  {
    id: "3",
    name: "Trà Ô Long Thượng Hạng",
    description: "Trà Ô Long cao cấp với hương thơm đặc trưng và vị ngọt tự nhiên",
    price: 75000,
    category: "tea",
    image: "/placeholder.svg?height=400&width=600",
    rating: 5,
    reviews: 76,
    status: "active",
  },
  {
    id: "4",
    name: "Bánh Tiramisu",
    description: "Bánh tiramisu truyền thống với lớp kem mascarpone mềm mịn",
    price: 55000,
    category: "pastries",
    image: "/placeholder.svg?height=400&width=600",
    rating: 5,
    reviews: 76,
    status: "outOfStock",
  },
]
