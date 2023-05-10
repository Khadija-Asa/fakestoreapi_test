import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const ProductsManagement = () => {

const [data, setData] = useState([]);

// get data api
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
    <section className="products">
  
      <wrapper className="table">
        <h1>Products management</h1>

        {/* header */}
        <ul className="row header">
          <li className="cell">
            Product name
          </li>
          <li className="cell">
            Category <span className="arrow_down"></span>
          </li>
          <li className="cell">
            Price
          </li>
          <li className="cell">
            Price <span>(including VAT)</span>
          </li>
        </ul>
        
        {/* map product */}
        {data.map((product) => (
          <ul className="row body">
            <li className="cell" data-title='Product name'>
              <NavLink className='row_title' to={`/productsmanagement/${product.id}`} >
                {product.title}
              </NavLink>
            </li>
            <li className="cell cat" data-title='Category'>
              <span>{product.category}</span>
            </li>
            <li className="cell" data-title='Price'>
              {product.price}
            </li>
            <li className="cell" data-title='Price (including VAT)'>
              {product.price.toFixed(1) * 0.2 + product.price}
            </li>
          </ul>
        ))}

      </wrapper>
    </section> 
  )
};

export default ProductsManagement;