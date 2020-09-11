import React from 'react';
import './Product.css';
import GradeIcon from '@material-ui/icons/Grade';
function Product({title, price, rating, image}) {
  return (
    <div className="product">
      <div className="product__info">
         <p>{title}</p>
          <p className="product__price">
              <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="product__rating"> 
                {Array(rating).fill().map((_, i) => (
                    <GradeIcon key={i} className="product__ratingIcon" />
                ))}
          </div> 
      </div>
      <img className="product__image" src={image} alt={title}/>
          <button className="product__button">Add to Basket</button>
    </div>
  );
}

export default Product;



