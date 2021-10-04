// Components
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";
// Data
import products from "../products";
import { useState } from "react";

export default function ProductList() {
  const [query, setQuery] = useState("");
  const productArray = products
    .filter((product) => product.name.includes(query))
    .map((product) => <ProductItem product={product} key={product.id} />);

  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <div calssName="productlist">{productArray}</div>
    </div>
  );
}
