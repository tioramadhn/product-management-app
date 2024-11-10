import { lazy, Suspense, useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import "react-quill/dist/quill.snow.css";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { productSchema } from "@/validations/productSchema";
import { useProducts } from "@/context/ProductContext";

const ReactQuill = lazy(() => import("react-quill"));

type ProductFormValues = z.infer<typeof productSchema>;

interface ProductFormProps {
  initialProduct?: ProductFormValues;
  onSubmit: (product: ProductFormValues) => void;
}

export default function ProductForm({
  initialProduct,
  onSubmit,
}: ProductFormProps) {
  const { brands, addBrand } = useProducts();
  const [newBrand, setNewBrand] = useState("");
  const [isAddingNewBrand, setIsAddingNewBrand] = useState(false);
  const form = useForm<ProductFormValues>({
    resolver: zodResolver(productSchema),
    defaultValues: initialProduct || {
      name: "",
      sku: "",
      brand: "",
      description: "",
      variations: [{ name: "", sku: "", price: 0 }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "variations",
  });

  const handleSubmit = (values: ProductFormValues) => {
    onSubmit(values);
  };

  const handleAddBrand = () => {
    if (newBrand) {
      addBrand(newBrand);
      form.setValue("brand", newBrand);
      setNewBrand("");
      setIsAddingNewBrand(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="sku"
          render={({ field }) => (
            <FormItem>
              <FormLabel>SKU</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="brand"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Brand</FormLabel>
              {!isAddingNewBrand ? (
                <Select
                  onValueChange={(value) => {
                    if (value === "new") {
                      setIsAddingNewBrand(true);
                    } else {
                      field.onChange(value);
                    }
                  }}
                  value={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a brand" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {brands.map((brand) => (
                      <SelectItem key={brand} value={brand}>
                        {brand}
                      </SelectItem>
                    ))}
                    <SelectItem value="new">Add new brand...</SelectItem>
                  </SelectContent>
                </Select>
              ) : (
                <div className="flex items-center space-x-2">
                  <Input
                    value={newBrand}
                    onChange={(e) => setNewBrand(e.target.value)}
                    placeholder="Enter new brand name"
                  />
                  <Button type="button" onClick={handleAddBrand}>
                    Add
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setIsAddingNewBrand(false)}
                  >
                    Cancel
                  </Button>
                </div>
              )}
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Suspense fallback={<div>Loading editor...</div>}>
                  <ReactQuill theme="snow" {...field} />
                </Suspense>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div>
          <h3 className="text-lg font-medium text-gray-700 mb-4">Variations</h3>
          {fields.map((field, index) => (
            <div
              key={field.id}
              className="space-y-4 p-4 border rounded-md mb-4"
            >
              <FormField
                control={form.control}
                name={`variations.${index}.name`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name={`variations.${index}.sku`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>SKU</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name={`variations.${index}.price`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Price</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        {...field}
                        onChange={(e) =>
                          field.onChange(parseFloat(e.target.value))
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="button"
                variant="destructive"
                onClick={() => remove(index)}
                className="mt-2"
              >
                Remove Variation
              </Button>
            </div>
          ))}
          <Button
            type="button"
            variant="outline"
            onClick={() => append({ name: "", sku: "", price: 0 })}
            className="mt-4"
          >
            Add Variation
          </Button>
        </div>

        <Button type="submit">Save Product</Button>
      </form>
    </Form>
  );
}
