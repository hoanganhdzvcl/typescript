import { Iproduct } from '@/interfaces/products';
import { getAllProducts } from '@/services/products';
import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { Link } from 'react-router-dom';

type ProductListProps = {
    featured?: boolean;
}
const News = ({ featured }: ProductListProps) => {
    const { data: products, isLoading, isError } = useQuery({
        queryKey: ['PRODUCT_KEYS'],
        queryFn: getAllProducts,
    });

    const filteredProducts = featured ? products?.filter((product: Iproduct) => product?.featured == featured) : products;
    if (isLoading) return <>Loading...</>
    return (
        <section className="news">
            <div className="container">
                <div className="section-heading">
                    <h2 className="section-heading__title">New</h2>
                </div>
                <div className="section-body">
                    <div className="product-list">
                        {filteredProducts?.map((product: Iproduct, index: number) => {
                            return (
                                <div key={index} className="product-item">
                                    <div className="product-image">
                                        <img src={product?.image} alt="" className="product__thumbnail" />
                                        <span className="product-sale">{product?.discount}%</span>
                                    </div>
                                    <div className="product-info">
                                        <h3 className="product__name">
                                            <a href="" className="product__link"><Link className='link_to' to='/productdetail'>{product?.name}</Link></a>
                                        </h3>
                                        <a href="" className="product__category">Category</a>
                                        <div className="product-price">
                                            <span className="product-price__new">${product?.price - (product.price * (product.discount / 100))}</span>
                                            <span className="product-price__old">${product?.price}</span>
                                        </div>
                                    </div>
                                    <div className="product-actions">
                                        <button className="btn product-action__quickview"><Link className='link_to' to={`/productdetail/${product._id}`}>Quick View</Link></button>
                                        <button className="btn product-action__addtocart"><Link className='link_to' to='/cart'>Add to cart</Link></button>
                                        <div className="product-actions-more">
                                            <span className="product-action__share">Share</span>
                                            <span className="product-action__compare">Compare</span>
                                            <span className="product-action__like">Like</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </div>
        </section>
    )



}

export default News