import React from 'react'

const News = () => {
    return (
        <section className="news">
            <div className="container">
                <div className="section-heading">
                    <h2 className="section-heading_title">News</h2>
                </div>
                <div className="section-body">
                    <div className="products">
                        <div className="product-item">
                            <div className="product_thumbnail">
                                <img src="https://picsum.photos/id/3/285/301" alt="" />
                                <span className="product_sale">30%</span>
                            </div>
                            <div className="product-content">
                                <h3 className="product_name">
                                    <a href="" className='product_link'>
                                        Product A
                                    </a>
                                </h3>
                                <a href="" className="product-cate">Stylish cafe chair</a>
                                <div className="product-price">
                                    <span className="product-price-new">2.500.000 d</span>
                                    <span className="product-price-old">3.500.000 d</span>
                                </div>

                            </div>
                            <div className='product-content-extra'>
                                <button className="btn-addtocart">Add to cart</button>
                                <div>
                                    <span>Share</span>
                                    <span>Compare</span>
                                    <span>Like</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default News