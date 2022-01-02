import React from "react";
import Products from './Products';

const Home = () => {
    return (
        <div className="hero">
            <div className="card bg-dark text-white border-0">
                <img src="/assets/bg.jpg" className="card-img" alt="cardbg"  />
                <div className="card-img-overlay">
                    <div className="container">                            
                        <h5 className="card-title"></h5>
                        <p className="card-text"></p>
                        <p className="card-text"></p>
                    </div>
                </div>
            </div>
            <Products/>
        </div>
    );
}

export default Home;
