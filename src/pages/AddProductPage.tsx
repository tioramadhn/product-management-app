import { useNavigate } from "react-router-dom";
import { useProducts } from "../context/ProductContext";
import ProductForm from "../components/products/ProductForm";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function AddProductPage() {
  const { addProduct } = useProducts();
  const navigate = useNavigate();

  const handleSubmit = (product: {
    name: string;
    sku: string;
    brand: string;
    description: string;
    variations: { name: string; sku: string; price: number }[];
  }) => {
    addProduct(product);
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
      <h1 className="text-2xl font-bold mb-4">Add Product</h1>
      <ProductForm onSubmit={handleSubmit} />
    </div>
  );
}
