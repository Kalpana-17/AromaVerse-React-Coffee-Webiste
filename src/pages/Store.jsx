import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {Offer} from "../components/Offer"
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { Product } from '../components/Product';
import { coffees } from  '../data/coffees';
import { croissants } from '../data/croissants';
import { useState, useEffect } from 'react';

const GST=0.12
const DISCOUNT=0.1

const Store = () => {

  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  )

  function getTotalQuantity() {
    return cart.reduce(
      (sum, item) => sum + (item.quantity || 0), 0
    )
  }

  function addItem(product) {
    const name = product.prodName;
    const price = product.prodPrice;

    const existingItem = cart.find(item => item.name === name);

    if (existingItem) {
      setCart(cart.map(item => item.name === name ? { ...item, quantity: (item.quantity || 0) + 1 } : item));
    } else {
      setCart([...cart, { name, price, quantity: 1 }]);
    }

    alert(`${name} added to cart!`);
  }

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    // notify other components (NavBar) that cart changed within SPA
    window.dispatchEvent(new Event('cartUpdated'));
  }, [cart])

  return (
    <>
      <style>
        {`
          #productTabs li button:hover{
              transform: scale(1.1);
              font-size: 18px;
          }
        `}
      </style>
      <Offer/>
      <NavBar/>

      {/* -- Navigation between products -- */}
      <div className="card nav-products mx-3 my-3">
        <div className="card-header" style={{backgroundColor: "bisque"}}>
            <ul className="nav nav-justified" id="productTabs" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="btn-info active p-3" id="coffee-tab" data-bs-toggle="tab" data-bs-target="#coffee-products" type="button" role="tab">Coffees</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="btn-info p-3" id="croissant-tab" data-bs-toggle="tab" data-bs-target="#croissant-products" type="button" role="tab">Croissants</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="btn-info p-3" id="custom-tab" data-bs-toggle="tab" data-bs-target="#custom-products" type="button" role="tab">Customization Space</button>
                </li>
            </ul>
        </div>
      </div>

      <div class="card-body products px-5 py-3">
        <div class="tab-content" id="productTabsContent"> 
          {/* -- Coffee Centre-- */}
          <div className="tab-pane fade show active" id="coffee-products" role="tabpanel" aria-labelledby="coffee-tab">
            <h3 className="card-title py-2">Coffee Centre</h3>
            <div className="row coffee-products g-4" id="coffee-products">
              <Product product={coffees[0]} addItem={addItem}/>
              <Product product={coffees[1]} addItem={addItem}/>
              <Product product={coffees[2]} addItem={addItem}/>
              <Product product={coffees[3]} addItem={addItem}/>
              <Product product={coffees[4]} addItem={addItem}/>
              <Product product={coffees[5]} addItem={addItem}/>
              <Product product={coffees[6]} addItem={addItem}/>
              <Product product={coffees[7]} addItem={addItem}/>

            </div>
          </div>

          {/* -- Croissants Centre -- */}
          <div className="tab-pane fade" id="croissant-products" role="tabpanel" aria-labelledby="croissant-tab">
            <h3 className="card-title py-3">Croissant Centre</h3>
            <div className="row croissant-products g-4" id="crossiant-products">
              <Product product={croissants[0]} addItem={addItem} />
              <Product product={croissants[1]} addItem={addItem} />
              <Product product={croissants[2]} addItem={addItem} />
              <Product product={croissants[3]} addItem={addItem} />
              <Product product={croissants[4]} addItem={addItem} />
            </div>
          </div>  

          <div className="tab-pane fade" id="custom-products" role="tabpanel" aria-labelledby="custom-tab">
            <div className="container mt-4">
              <h3 className="card-title py-2 px-5">Customization Centre</h3>
              <p className="text-muted px-5 mx-2">You can add instructions for a customizated coffee here.</p>
              <form id="customForm" className="d-flex flex-column gap-2">
                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: "100px"}}></textarea>
                <button type="submit" className="btn btn-success" style={{width: "150px"}}>Add to Cart</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </>
  );
};

export default Store;