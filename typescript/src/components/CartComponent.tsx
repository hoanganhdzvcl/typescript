import React from 'react';
import { Link } from 'react-router-dom';
const CartComponent = () => {
    return (
        <div>
            <style>
                {`
                 @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

 body {
     font-family: 'Poppins', sans-serif;
 }

 * {
     margin: 0 auto;
     box-sizing: border-box;
     padding: 0;
 }

 .container {
     max-width: 1440px;
 }


 main {
     display: flex;
     max-width: 85%;
     margin-top: 50px;
 }

 .box-left {
     width: 65%;
 }

 .box-right {
     width: 35%;
     margin-left: 60px;
     background-color: #F9F1E7;
     height: 400px;
     line-height: 50px
 }

 table {
     border-collapse: collapse;
     text-align: center;
 }

 thead {
     background-color: #F9F1E7;
     height: 55px;
 }

 table thead th {
     font-size: 16px;
 }

 tbody td {
     padding-top: 50px;
     font-size: 13px;
 }

 tbody td img {
     max-width: 80%;
     height: auto;
 }

 .subtotal,
 .total {
     display: flex;
 }

 .box-right button {
     border: 1px solid black;
     width: 220px;
     height: 60px;
     border-radius: 15px;
     font-size: 20px;
     font-weight: 400;
     margin-left: 90px;
     margin-top: 50px;
     background-color: #F9F1E7;
 }

 .price {
     color: #9F9F9F;
 }

 .price-total {
     color: #B88E2F;
     font-size: 20px;
     font-weight: 500;
 }

 .subtotal {
     margin-top: 50px;
 }
                `}
            </style>
            <div className="container">
                <div className="banner">
                    <img src="./src/images/Group 78.png" alt='' />
                </div>
                <main style={{ display: 'flex', maxWidth: '85%', marginTop: '50px' }}>
                    <div className="box-left">
                        <table className='table'>
                            <thead>
                                <tr><th style={{ width: '15%' }} />
                                    <th style={{ width: '15%' }}>Product</th>
                                    <th style={{ width: '20%' }}>Price</th>
                                    <th style={{ width: '20%' }}>Quantity</th>
                                    <th style={{ width: '10%' }}>Subtotal</th>
                                    <th style={{ width: '10%' }} />
                                </tr></thead>
                            <tbody>
                                <tr><td>
                                    <img src="./src/images/Group 146.png" alt='' />
                                </td>
                                    <td style={{ color: '#9F9F9F' }}>Asgaard sofa</td>
                                    <td style={{ color: '#9F9F9F' }}>25.000.000đ</td>
                                    <td>
                                        1
                                    </td>
                                    <td>25.000.000đ</td>
                                    <td><i className="fa-solid fa-trash" style={{ color: 'red' }} /></td>
                                </tr></tbody>
                        </table>
                    </div>
                    <div className="box-right">
                        <div className="title">
                            <h2 style={{ textAlign: 'center', marginTop: 20 }}>Cart Totals</h2>
                        </div>
                        <div className="subtotal">
                            <p>Subtotal</p>
                            <p className="price">25.000.000đ</p>
                        </div>
                        <div className="total">
                            <p>Total</p>
                            <p className="price-total">25.000.000đ</p>
                        </div>
                        {/* <Link className='link_to' to='/checkout'>Check Out</Link> */}
                        <button>Check Out</button>
                    </div>
                </main>

            </div >
        </div>


    )
}

export default CartComponent