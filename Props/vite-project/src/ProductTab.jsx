import Product from "./Product.jsx";

function ProductTab(){
  return (
    <>
      <Product title="Phone" price={20000}  />
      <Product title="Laptop" price={50000} />
      <Product title="Pen" price={5} />
    </>
  );
}
export default ProductTab;