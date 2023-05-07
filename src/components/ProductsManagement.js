import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
// import Product from './Product';

const ProductsManagement = () => {
  // const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

useEffect(() => {
  // setLoading(true);
  axios({
    method: 'GET',
    url: 'https://fakestoreapi.com/products?limit=7',
  })
  .then((res) => {
    console.log(res.data);
    setData(res.data);
  })
  // .catch((e) => console.log(e))
  // .finally(() => setLoading(false));
}, []);

// const fetchProductData = () => {
//   fetch('https://fakestoreapi.com/products?limit=7')
//   .then(res=>res.json())
//     .then(data=>{setData(data)
//       .then(json=>console.log(json))
      
//     })
// }

// useEffect(() => {
//   fetchProductData()
// }, [])

// fetch('https://fakestoreapi.com/products?limit=7')
//             .then(res=>res.json())
//             .then(json=>console.log(json))
//             .then((res) => {
//               console.log(res.data);
//               setData(res.data);
//             }, []);

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
              <NavLink to={`/productsmanagement/${product.id}`} >
                {product.title}
              </NavLink>
            </div>
            <div className="cell" data-title='Category'>
              <span className='cat'>{product.category}</span>
            </div>
            <div className="cell" data-title='Price'>
              {product.price}
            </div>
            <div className="cell" data-title='Price (including VAT)'>
              {product.vat}
            </div>
          </div>
        ))}

      </wrapper>
    </div> 
  )
};

export default ProductsManagement;