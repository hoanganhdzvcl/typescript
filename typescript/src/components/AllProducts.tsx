import React from 'react'
import "../shop.css";
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getAllProducts } from '@/services/products';
import { Iproduct } from '@/interfaces/products';
const ShopBanner = () => {
    const { data: products, isLoading, isError } = useQuery({
        queryKey: ['PRODUCT_KEYS'],
        queryFn: getAllProducts,
    });
    if (isLoading) return <>Loading...</>
    return (
        <div className="container">
            <div className="banner">
                <img src="./src/images/shop-banner.png" alt='' />
            </div>
            <div className="filter">
                <div className="left">
                    <img src="./src/images/filltericon.png" alt='' />
                    <p>Filter</p>
                    <img src="./src/images/gridicon.png" alt='' />
                    <img src="./src/images/bi_view-list (1).png" alt='' />
                    <h5 className="result">
                        Showing 1–16 of 32 results
                    </h5>
                </div>
                <div className="right">
                    <p>Show</p>
                    <p style={{ backgroundColor: '#FFFFFF', color: '#9F9F9F', textAlign: 'center', padding: 10, width: 55 }}>16</p>
                    <p>Short by</p>
                    <p style={{ backgroundColor: '#FFFFFF', color: '#9F9F9F', textAlign: 'center', padding: 10, width: 155 }}>Default</p>
                </div>
            </div>
            <main>
                <div className="products">
                    {products?.map((product: Iproduct, index: number) => {
                        return (
                            <div className="card">
                                <div className="image-item">
                                    <a href=''>
                                        <img src={product.image} alt='' />
                                    </a>
                                </div>
                                <div className="text-item">
                                    <h3>{product.name}</h3>
                                    <p>Category</p>
                                </div>
                                <div className="discount">
                                    <h4>${product?.price - (product.price * (product.discount / 100))}</h4>
                                    <del>${product.price}</del>
                                </div>
                                <div className="overlay">
                                    <div className="overlay-content">
                                        <a href="#" style={{ backgroundColor: '#fff' }}><Link to={`/productdetail/${product._id}`}>View Product</Link></a>
                                        <a href="#" style={{ backgroundColor: '#fff' }}>Add to Cart</a>
                                        <div className="secondary-buttons">
                                            <a href="#"><i className="fa-solid fa-share" /> Share</a>
                                            <a href="#"><i className="fa-solid fa-code-compare" /> Compare</a>
                                            <a href="#"><i className="fa-regular fa-heart" /> Like</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </div>
                <div className="pagination">
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button style={{ width: 98 }}>Next</button>
                </div>
            </main>
        </div>

    );

};

export default ShopBanner