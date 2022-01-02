import React, { useState, useEffect } from "react";

const Products = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("/assets/products.json");


            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter);
            }

            return () => {
                componentMounted = false;
            }
        }
        getProducts();
    }, []);

    const Loading = () => {
        return (
            <>
                Loading...
            </>
        )
    }

    const ShowProducts = () => {
        return (
            <>

                <div className="buttons d-flex justify-content-center mb-5 pb-5">
                    <button className="btn btn-outline-dark me-2">All</button>
                    <button className="btn btn-outline-dark me-2">Single Mug</button>
                    <button className="btn btn-outline-dark me-2">Couple Mug</button>
                    <button className="btn btn-outline-dark me-2">Coffee Cup</button>
                    <button className="btn btn-outline-dark me-2">Electronics</button>
                </div>
                {filter.map((product) => {
                    return (
                        <>

                            <div className="col-md-3 mb-4">
                                <div class="card h-100 text-center p-0" key={product.id}>
                                    <img src={product.image} class="card-img-top" alt={product.title} height="250px"/>
                                        <div class="card-body">
                                            <h5 class="card-title mb-0">{product.title.substring(0,20)}</h5>
                                            <p class="card-text"> <b>BDT {product.price} </b></p>
                                            <a href="#" class="btn btn-outline-dark">Buy Now</a>
                                        </div>
                                </div>
                            </div>

                        </>
                    )
                })}

            </>
        )
    }


    return (
        <div>

            <div className="container my-5 py-5"  >
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className="display-6 fw-bolder text-center">OUR PRODUCTS</h1><hr />
                    </div>

                </div>

                <div className="row justify-content-center">
                    {loading ? <Loading /> : <ShowProducts />}
                </div>

            </div>
        </div>
    );
}

export default Products;
