import React, {useState, useEffect} from 'react';
import { NavLink} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './../styles/product.css';
import arrow from './../shared/back_button.svg';

const Product = () => {

  // call api
  const {id} = useParams();
  const [product, setProduct] = useState([]);

  // get api
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

  // vta
  const handleClick = () => {
    const ratio = 1.20;
    setMontantTTC(prixHT * ratio);
  }

  return (
    // card
    <main className='product_card'>
      <header className="card_title">
        {/* back to management */}
          <NavLink to={`/productsmanagement`} className="back_arrow">
            <img src={arrow} alt="Go back arrow" />
          </NavLink>

        {/* title */}
          <h2>{product.title}</h2>
      </header>

      <br />

      <section className="card">
        {/* img */}
        <div className="card_img">
          <img src={product.image} alt={product.title} />
        </div>
        <br />

        <section className="card_text">   
          {/* description */}
          <section className="card_description">
            <div className="description_text">
              <h3>description</h3> <br />
              <p>{product.description}</p>
            </div>
            <br />
            <div className="description_cat">
              <h3>category</h3> <br />
              <p className='cat2'><span>{product.category}</span></p>
            </div>
          </section>
          <br />

          {/* price */}
          <section className="card_price">
            <div className="price_tag">
              <h3>price</h3> <br />

              <div className="price_vta">
                <div className="vta">
                  {/* input field */}
                  <input id="newPrice" placeholder={product.price} type="number" onChange={handleChange} />

                  {/* update btn */}
                  <button type='submit' onClick={handleClick}>
                    Update product
                  </button>
                </div>

                {/* vta */}
                <br />
                <p>
                  <span>Price</span>(including VAT): {montantTTC}€
                </p>
              </div>

            </div>
          </section>
        </section>
      </section>

    </main>
  )
}

export default Product;
