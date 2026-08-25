const getProducts = async () => {
  const res = await fetch("http://localhost:5000/products", {
    next: { revalidate: 10 },
  }); //cache sadharonoto amra use kori jokhon kono website change hoy usually {jemon blog, comment, }
  return res.json();
};

import Product from "@/component/product";
const ProductPage = async () => {
  const products = await getProducts();
  return (
    <div>
      <h2>Products: {products.length} </h2>
      <div className="grid grid-cols-3 gap-5">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
