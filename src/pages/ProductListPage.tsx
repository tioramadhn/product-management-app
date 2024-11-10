"use client";

import { useNavigate } from "react-router-dom";
import { useProducts } from "../context/ProductContext";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PlusIcon, Eye } from "lucide-react";

export default function ProductListPage() {
  const { products } = useProducts();
  const navigate = useNavigate();

  const handleAddProduct = () => {
    navigate("/add-product");
  };

  const handleViewProduct = (id: number) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Product List</h1>
        <Button onClick={handleAddProduct}>
          <PlusIcon className="mr-2 h-4 w-4" /> Add Product
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="flex flex-col">
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-gray-600">SKU: {product.sku}</p>
              <p className="text-sm text-gray-600">Brand: {product.brand}</p>
              <p className="text-sm text-gray-600 mt-2">
                Variations: {product.variations.length}
              </p>
            </CardContent>
            <CardFooter>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleViewProduct(product.id)}
              >
                <Eye className="mr-2 h-4 w-4" /> View Details
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      {products.length === 0 && (
        <p className="text-center text-gray-500 mt-8">
          No products found. Add a new product to get started.
        </p>
      )}
    </div>
  );
}
