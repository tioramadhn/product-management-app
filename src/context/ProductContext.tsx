import { dummyProducts } from "@/contants/products";
import { Product } from "@/models/product";
import React, { createContext, useContext, useState } from "react";

interface ProductContextType {
  products: Product[];
  brands: string[];
  addProduct: (product: Omit<Product, "id">) => void;
  updateProduct: (id: number, updatedProduct: Product) => void;
  deleteProduct: (id: number) => void;
  addBrand: (brand: string) => void;
}

const ProductContext = createContext<ProductContextType | null>(null);

const initialBrands = Array.from(new Set(dummyProducts.map((p) => p.brand)));

export const ProductProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [products, setProducts] = useState<Product[]>(dummyProducts);
  const [brands, setBrands] = useState<string[]>(initialBrands);

  const addProduct = (product: Omit<Product, "id">) => {
    setProducts([...products, { ...product, id: Date.now() }]);
  };

  const updateProduct = (id: number, updatedProduct: Product) => {
    setProducts(products.map((p) => (p.id === id ? updatedProduct : p)));
  };

  const deleteProduct = (id: number) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  const addBrand = (brand: string) => {
    if (!brands.includes(brand)) {
      setBrands([...brands, brand]);
    }
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        brands,
        addProduct,
        updateProduct,
        deleteProduct,
        addBrand,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProducts must be used within a ProductProvider");
  }
  return context;
};
