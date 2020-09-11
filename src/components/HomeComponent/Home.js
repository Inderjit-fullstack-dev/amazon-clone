import React from 'react';
import './Home.css';
import Product from '../ProductComponent/Product';
function Home() {
  return (

    <div className="home">
      
        <div className="home__container">
            <img className="home__image" alt="banner" 
            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg" />
            
        
            <div className="home__row">
            
            <Product 
                title="Pro React 16 Paperback – March 20, 2019" 
                price={55.99} 
                rating={2} 
                image="https://images-na.ssl-images-amazon.com/images/I/41W9YdrRslL._SX348_BO1,204,203,200_.jpg" 
            />

            <Product 
                title="The Road to React: Your journey to master plain yet pragmatic React.js" 
                price={27.65} 
                rating={4} 
                image="https://m.media-amazon.com/images/I/519rgWOYPjL._AC_UL480_FMwebp_QL65_.jpg" 
            />

        </div>

        <div className="home__row">
            <Product 
                title="Learning React: Modern Patterns for Developing React Apps" 
                price={39.00} 
                rating={4} 
                image="https://m.media-amazon.com/images/I/91uFdkCJmAL._AC_UL480_FMwebp_QL65_.jpg" 
            />

            <Product 
                title="React Explained: Your Step-by-Step Guide to React (2020 Edition)" 
                price={17.65} 
                rating={3} 
                image="https://m.media-amazon.com/images/I/61OG4t3I9iL._AC_UL480_FMwebp_QL65_.jpg" 
            />

            <Product 
                title="Learning React: A Hands-On Guide to Building Web Applications Using React and Redux (2nd Edition)" 
                price={17.65} 
                rating={3} 
                image="https://m.media-amazon.com/images/I/51bBG0BOZwL._AC_UL480_FMwebp_QL65_.jpg" 
            />


        </div>

        <div className="home__row">
            <Product 
                title="The React Workshop: Get started with building web applications using practical tips and examples from React use cases" 
                price={26.00} 
                rating={5} 
                image="https://m.media-amazon.com/images/I/81bxVAYiJvL._AC_UL480_FMwebp_QL65_.jpg" 
            />
        </div> 
        
        </div> 
    </div>
  );
}

export default Home;



