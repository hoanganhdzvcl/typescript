import React from 'react'
import '../detail.css';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getAllProductById } from '@/services/products';
const ProductDetail = () => {
    const { id } = useParams();
    const { data, isLoading } = useQuery({
        queryKey: ['PRODUCT_KEY', id],
        queryFn: async () => await getAllProductById(id as string),
    });
    if (isLoading) return <>Loading...</>
    return (
        <div className="container">
            <main>
                <div className="detai-navigate">
                    <div className="child">
                        <div className="page-name">
                            <p>Home</p>
                        </div>
                        <div className="engle-right">
                            <i className="fa-solid fa-angle-right" />
                        </div>
                        <div className="page-name">
                            <p>Shop</p>
                        </div>
                        <div className="engle-right">
                            <i className="fa-solid fa-angle-right" />
                        </div>
                        <div className="product-name">
                            <p>{data.name}</p>
                        </div>
                    </div>
                </div>
                <div className="detail-product">
                    <div className="box-left">
                        <div className="detail-image">
                            <img src={data.image} alt='' />
                        </div>
                        <div className="detail-image">
                            <img src={data.image} alt='' />
                        </div>
                        <div className="detail-image">
                            <img src={data.image} alt='' />
                        </div>
                        <div className="detail-image">
                            <img src={data.image} alt='' />
                        </div>
                    </div>
                    <div className="box-center">
                        <img src={data.image} alt='' />
                    </div>
                    <div className="box-right">
                        <div className="product_name">
                            <h2>{data?.name}</h2>
                        </div>
                        <div className="price">
                            <h3>${data?.price - (data.price * (data.discount / 100))}</h3>
                        </div>
                        <div className="desciption">
                            <p>{data.des}
                            </p>
                        </div>
                        <div className="addToCart">
                            <div className="selectQuantity">
                                <div className="minus"><i className="fa-solid fa-minus" /></div>
                                <div className="quantity">1</div>
                                <div className="plus"><i className="fa-solid fa-plus" /></div>
                            </div>
                            <div className="add">
                                <p>Add To Cart</p>
                            </div>
                            <div className="compare">
                                <p>Compare</p>
                            </div>
                        </div>
                        <hr style={{ color: '#D9D9D9', marginTop: 50 }} />
                        <div className="parameter">
                            <div className="child-parameter">
                                <p className="p1">SKU</p>
                                <p>: SS001</p>
                            </div>
                            <div className="child-parameter">
                                <p className="p1">Category</p>
                                <p>: Sofas</p>
                            </div>
                            <div className="child-parameter">
                                <p className="p1">Tags</p>
                                <p>: Sofa, Chair, Home, Shop</p>
                            </div>
                            <div className="child-parameter">
                                <p className="p1">Share</p>
                                <div className="icon">
                                    : <a href="https://www.facebook.com/diemthongnhat"><i className="fa-brands fa-facebook" /></a>
                                    <a href=''><i className="fa-brands fa-twitter" /></a>
                                    <a href=''><i className="fa-brands fa-instagram" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr style={{ color: '#D9D9D9', marginTop: 50 }} />
                <div className="desciption-section1">
                    <div className="title">
                        <h3>Description</h3>
                        <h3 style={{ color: '#9F9F9F' }}>Additional Information</h3>
                        <h3 style={{ color: '#9F9F9F' }}>Reviews [5]</h3>
                    </div>
                    <div className="desciption">
                        <p>Embodying the raw, wayward spirit of rock n roll, the Kilburn portable active stereo speaker
                            takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the
                            road.</p>
                        <p style={{ marginTop: 40 }}>Weighing in under 7 pounds, the Kilburn is a lightweight piece of
                            vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the
                            Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear
                            midrange and extended highs for a sound that is both articulate and pronounced. The analogue
                            knobs allow you to fine tune the controls to your personal preferences while the
                            guitar-influenced leather strap enables easy and stylish travel.</p>
                    </div>
                    <div className="image-des">
                        <img src="./src/images/Group 107.png" alt='' />
                        <img src="./src/images/Group 107.png" alt='' />
                    </div>
                </div>
                <hr style={{ color: '#D9D9D9', marginTop: 50 }} />
                <div className="relatedProducts">
                    <h2>Related Products</h2>
                    <div className="section1" style={{ width: '90%' }}>
                        <div className="title-section1">
                        </div>
                        <div className="products">
                            <div className="card">
                                <div className="image-item">
                                    <a href=''>
                                        <img src="./src/images/Images.png" alt='' />
                                    </a>
                                </div>
                                <div className="text-item">
                                    <h3>Syltherine</h3>
                                    <p>Stylish cafe chair</p>
                                </div>
                                <div className="discount">
                                    <h4>2.500.000đ</h4>
                                    <del>3.500.000đ</del>
                                </div>
                            </div>
                            <div className="card">
                                <div className="image-item">
                                    <a href=''>
                                        <img src="./src/images/image 4.png" alt='' />
                                    </a>
                                </div>
                                <div className="text-item">
                                    <h3>Syltherine</h3>
                                    <p>Stylish cafe chair</p>
                                </div>
                                <div className="discount">
                                    <h4>2.500.000đ</h4>
                                    <del>3.500.000đ</del>
                                </div>
                            </div>
                            <div className="card">
                                <div className="image-item">
                                    <a href=''>
                                        <img src="./src/images/image 3.png" alt='' />
                                    </a>
                                </div>
                                <div className="text-item">
                                    <h3>Respira</h3>
                                    <p>Outdoor bar table and stool</p>
                                </div>
                                <div className="discount">
                                    <h4>2.500.000đ</h4>
                                    <del>3.500.000đ</del>
                                </div>
                            </div>
                            <div className="card">
                                <div className="image-item">
                                    <a href=''>
                                        <img src="./src/images/Images.png" alt='' />
                                    </a>
                                </div>
                                <div className="text-item">
                                    <h3>Lolito</h3>
                                    <p>Luxury big sofa</p>
                                </div>
                                <div className="discount">
                                    <h4>2.500.000đ</h4>
                                    <del>3.500.000đ</del>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="more">
                        <p>Show more</p>
                    </div>
                    <hr style={{ color: '#D9D9D9', marginTop: 50 }} />
                </div>
            </main>
        </div>

    )
}

export default ProductDetail;