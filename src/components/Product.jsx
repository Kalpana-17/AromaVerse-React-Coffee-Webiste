import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export const Product = ({product, addItem}) => {
  return (
    <>
      {/* <style>
        {`

        `}
      </style> */}
      
      <div className='col-md-4'>
        <div className='card'>
          <img src={product.imgSrc} className="card-img-top" alt={product.prodName}/>
          <div className='card-body'>
            <h5 className='card-title'>{product.prodName}</h5>
            <p className='card-text'>{product.prodDesc}</p>
            <h6 className='card-text'>₹{product.prodPrice} / {product.prodQuantity}ml</h6>
            <button className='btn btn-success' onClick={() => addItem(product)}>Add to cart</button>
          </div>
        </div>
      </div>
    </>
  )
}
