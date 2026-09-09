import "./Product.css"

function Product ({title,price}){
  let styles = {backgroundColor : price > 30000 ? "pink" : "yellow"};
  if(price > 30000) price = (price*95)/100;
  return (
    <div className="Product" style={styles}>
      <h3>{title}</h3>
      <h5>Price : {price}</h5>
      {price > 30000 ? <p>"Discount of 5%"</p> : null}
    </div>
  );
}
export default Product;