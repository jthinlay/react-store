import React, { Component } from "react";
import Title from "./title";
import Product from "./product";
// import { storeProducts } from "../data";
import { ProductConsumer } from "../context";
class ProductList extends Component {
  // state = {
  //   products: storeProducts
  // };
  render() {
    // console.log(this.state.products);
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="our" title="products" />

            <div className="row">
              <ProductConsumer>
                {value => {
                  //console.log(value);
                  return value.products.map(product => {
                    return <Product key={product.id} product={product} />;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
        {/* <Product /> */}
      </React.Fragment>
    );
  }
}
export default ProductList;
