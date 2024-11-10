"use client";

import { useParams, useNavigate } from "react-router-dom";
import { useProducts } from "../context/ProductContext";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Pencil, Trash2, ArrowLeft } from "lucide-react";
import DOMPurify from "dompurify";

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { products, deleteProduct } = useProducts();
  const navigate = useNavigate();

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <div className="text-center mt-8">Product not found</div>;
  }

  const handleEditProduct = () => {
    navigate(`/edit-product/${product.id}`);
  };

  const handleDeleteProduct = () => {
    deleteProduct(product.id);
    navigate("/");
  };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div>
      <Button variant="outline" size="sm" onClick={handleBack} className="mb-4">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to List
      </Button>
      <Card>
        <CardHeader>
          <CardTitle>{product.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600">SKU: {product.sku}</p>
          <p className="text-sm text-gray-600">Brand: {product.brand}</p>
          <div className="mt-4">
            <h4 className="text-sm font-semibold mb-1">Description:</h4>
            <div
              className="text-sm text-gray-600 prose prose-sm max-w-none"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(product.description),
              }}
            />
          </div>
          <div className="mt-4">
            <h4 className="text-sm font-semibold mb-1">Variations:</h4>
            <div className="flex gap-2">
              {product.variations.map((variation, index) => (
                <div key={index} className="mb-2 border w-fit p-4 rounded-sm">
                  <p className="text-sm">Name: {variation.name}</p>
                  <p className="text-sm">SKU: {variation.sku}</p>
                  <p className="text-sm">
                    Price: ${variation.price.toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" size="sm" onClick={handleEditProduct}>
            <Pencil className="mr-2 h-4 w-4" /> Edit
          </Button>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive" size="sm">
                <Trash2 className="mr-2 h-4 w-4" /> Delete
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete the
                  product and remove it from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                  className={buttonVariants({ variant: "destructive" })}
                  onClick={handleDeleteProduct}
                >
                  Delete
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </CardFooter>
      </Card>
    </div>
  );
}
