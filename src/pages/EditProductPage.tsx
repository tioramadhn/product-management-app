import { useParams, useNavigate } from "react-router-dom";
import { useProducts } from "../context/ProductContext";
import ProductForm from "../components/products/ProductForm";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function EditProductPage() {
  const { id } = useParams<{ id: string }>();
  const { products, updateProduct } = useProducts();
  const navigate = useNavigate();

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleSubmit = (updatedProduct: {
    name: string;
    sku: string;
    brand: string;
    description: string;
    variations: { name: string; sku: string; price: number }[];
  }) => {
    updateProduct(Number(id), { ...updatedProduct, id: Number(id) });
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
      <h1 className="text-2xl font-bold mb-4">Edit Product</h1>
      <ProductForm initialProduct={product} onSubmit={handleSubmit} />
    </div>
  );
}
