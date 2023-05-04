import React, {useState, useEffect} from 'react';
import axios from 'axios';

const ProductsManagement = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

useEffect(() => {
  setLoading(true);
  axios({
    method: 'GET',
    url: 'https://fakestoreapi.com/products?limit=7',
  })
  .then((res) => {
    console.log(res.data);
    setData(res.data);
  })
  .catch((e) => console.log(e))
  .finally(() => setLoading(false));
}, []);

return (
    <div className="products">
  
      <wrapper className="table">
        <h1>Products management</h1>

        <div className="row header">
          <div className="cell">
            Product name
          </div>
          <div className="cell">
            Category
          </div>
          <div className="cell">
            Price
          </div>
          <div className="cell">
            Price (including VAT)
          </div>
        </div>
        
        {data.map((product) => (
          <div className="row">
            <div className="cell" data-title='Product name'>
              {product.title}
            </div>
            <div className="cell category" data-title='Category'>
              {product.category}
            </div>
            <div className="cell" data-title='Price'>
              {product.price}
            </div>
            <div className="cell" data-title='Price (including VAT)'>
              {product.price}
            </div>
          </div>
        ))}

      </wrapper>
    </div> 
  )
};

export default ProductsManagement;