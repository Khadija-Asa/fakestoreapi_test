import React, {useState, useEffect} from 'react';
import { NavLink} from 'react-router-dom';
import { useHistory } from "react-router-dom";

import { useParams } from 'react-router-dom';
import './../styles/product.css';
import arrow from './../shared/back_button.svg';
import axios from 'axios';

const Product = () => {

  // call api
  const {id} = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    setProduct(await res.json());
    }
    getProduct([id]);
  }, );

  const [prixHT, setPrixHT] = useState([]);
  const [montantTTC, setMontantTTC] = useState([]);

  const handleChange = (e) => {
    setPrixHT(e.target.value);
  }

  const handleClick = () => {
    const ratio = 1.20;
    setMontantTTC(prixHT * ratio);
  }

  return (
    // card
    <div className='product_card'>
      {/* back to management */}
      <NavLink to={`/productsmanagement`} className="back_arrow">
        <img src={arrow} alt="Go back arrow" />
      </NavLink>

      {/* title */}
      <h2>{product.title}</h2>
      <br />

      <div className="card">
        {/* img */}
        <div className="card_img">
          <img src={product.image} alt={product.title} />
        </div>

        {/* description */}
        <div className="card_description">
          <h3>description</h3>
            <p>{product.description}</p>
          <h3>category</h3>
            <p>{product.category}</p>
        </div>

        {/* price */}
        <div className="card_price">
          <div className="price_tag">
            <h3>price</h3>

            {/* input field */}
            <input id="newPrice" placeholder={product.price} type="number" onChange={handleChange} />

            <button onClick={handleClick}>
              update
            </button>

            {/* update btn */}
            

            {/* vta */}
            <div className="price_vta">

            <p>Le montant TTC est: {montantTTC} €</p>

            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Product;
