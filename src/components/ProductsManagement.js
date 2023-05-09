import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const ProductsManagement = () => {
  const [data, setData] = useState([]);

useEffect(() => {
  axios({
    method: 'GET',
    url: 'https://fakestoreapi.com/products?limit=7',
  })
  .then((res) => {
    console.log(res.data);
    setData(res.data);
  })
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
            Category <span className="arrow_down"></span>
          </div>
          <div className="cell">
            Price
          </div>
          <div className="cell">
            Price <span>(including VAT)</span>
          </div>
        </div>
        
        {data.map((product) => (
          <div className="row body">
            <div className="cell" data-title='Product name'>
              <NavLink className='row_title' to={`/productsmanagement/${product.id}`} >
                {product.title}
              </NavLink>
            </div>
            <div className="cell" data-title='Category'>
              {product.category}
            </div>
            <div className="cell" data-title='Price'>
              {product.price}
            </div>
            <div className="cell" data-title='Price (including VAT)'>
              {product.price.toFixed(1) * 0.2 + product.price}
            </div>
          </div>
        ))}

      </wrapper>
    </div> 
  )
};

export default ProductsManagement;