import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './../styles/product.css';
import arrow from './../shared/back_button.svg';
import axios from 'axios';

const Product = () => {
  const {id} = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    setProduct(await response.json());
    }
    getProduct();
  }, [id]);

  const [currentPrice, setCurrentPrice] = useState(product.price);
  const [newPrice, setNewPrice] = useState(product.price);
  const [isPriceChanged, setIsPriceChanged] = useState(false);

  const handlePriceChange = (event) => {
    setNewPrice(event.target.value);
    setIsPriceChanged(true);
  };

  const handleUpdateProduct = () => {
    if (isPriceChanged) {
      axios.put(`https://fakestoreapi.com/products/${product.id}`, {
        price: newPrice,
      })
        .then((response) => {
          setCurrentPrice(newPrice);
          setIsPriceChanged(false);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }

  const [vta, setVta] = useState(product.price);

  function handleVtaChange(e) {
    setVta(e.target.value);
  }

  const vtaAvecRemise = (newPrice * 0.2);

  return (
    // card
    <div className='product_card'>
      {/* back to management */}
      <NavLink to={`/productsmanagement`} className="back_arrow">
        <img src={arrow} alt="" />
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
            <input placeholder={product.price} id="newPrice" type="number" value={newPrice} onChange={handlePriceChange} />

            {/* update btn */}
            <button onClick={handleUpdateProduct} disabled={!isPriceChanged}>
              update product
            </button>

            {/* vta */}
            <div className="price_vta">
              <p>
                Price(including VTA): {vtaAvecRemise + newPrice} €
              </p>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  )
}

export default Product;
