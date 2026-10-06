import SearchFilter from "../components/SearchFilter";
import CatogeryFilters from "../components/CatogeryFilters";
import { useCart } from "../context/CartContext";
import ProductCart from "../components/ProductCart";

import { useState } from "react";
const ProductList = () => {
  const { product } = useCart();
  const [searchTerm, setSearchTerm] = useState("");

  const [selectedCategory, setSelectedCategory] = useState("All");
  const filterProducts = product.filter((product) => {
    const matchSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;

    return matchSearch && matchesCategory;
  });

  return (
    <>
      <div className="container mx-auto px-4 md:px-8 pt-8">
        <SearchFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <CatogeryFilters
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <h2 className="text-2xl font-extrabold mx-auto px-4 md:px-8 pt-4">
          features gear ({product.length}Items)
        </h2>
        <div
          className=" mt-5 grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4
        gap-8 justify-center items-center"
        >
          {filterProducts.map((products, index) => (
            <ProductCart key={index} products={products} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
