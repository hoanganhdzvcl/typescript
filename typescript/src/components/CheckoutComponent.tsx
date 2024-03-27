// import React from 'react'

// const CheckoutComponent = () => {
//     return (
//         <div>
//             <style>
//                 {`
//                 @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

//     body {
//         font-family: 'Poppins', sans-serif;
//     }

//     * {
//         margin: 0 auto;
//         box-sizing: border-box;
//         padding: 0;
//     }

//     .container {
//         max-width: 1440px;
//     }

//     header {
//         height: 100px;
//         background-color: rgb(255, 255, 255);
//         margin-top: 30px;
//         display: flex;
//         align-items: center;

//     }

//     .logoHeader {
//         display: flex;
//     }

//     .logoHeader p {
//         font-size: x-large;
//         font-weight: bolder;
//     }

//     .menu ul {
//         margin-left: 100px;
//         display: flex;
//     }

//     .menu ul li {
//         margin: 20px;
//         list-style: none;
//     }

//     .menu ul li a {
//         text-decoration: none;
//         color: black;
//     }

//     .iconNavigate i {
//         margin: 20px;
//     }

//     main {
//         width: 82%;
//         display: flex;
//         margin-top: 50px;
//     }

//     .left {
//         width: 45%;
//     }

//     .left .title {
//         font-size: 36px;
//         font-weight: 600;
//     }

//     .left p {
//         font-size: 16px;
//         font-weight: 500;
//         margin-bottom: 10px;
//     }

//     .left .input-name {
//         display: flex;
//         margin-top: 20px;
//     }

//     .right {
//         width: 45%;
//     }

//     .first-name {
//         margin: 0;
//         padding: 0;
//     }

//     .last-name {
//         margin-right: 80px;
//     }

//     .company-name,
//     .country-name,
//     .address-name,
//     .city-name,
//     .province-name,
//     .zip-code,
//     .phone-number,
//     .email-address,
//     .addinformation {
//         margin-top: 30px;
//     }

//     .left .input-name input {
//         width: 212px;
//         height: 60px;
//         border: 1px solid #9F9F9F;
//         border-radius: 10px;
//     }

//     .left input,
//     select {
//         width: 450px;
//         height: 60px;
//         border: 1px solid #9F9F9F;
//         border-radius: 10px;
//         outline: none;
//         font-size: 16px;
//     }

//     select {
//         color: #9F9F9F;
//         font-size: 16px;
//     }

//     .product,
//     .product-name,
//     .subtotal,
//     .total {
//         display: flex;
//         margin-top: 15px;
//     }

//     .right .left-child {
//         margin: 0;
//         padding: 0;
//     }

//     .right button {
//         width: 320px;
//         height: 60px;
//         border-radius: 15px;
//         font-size: 20px;
//         font-weight: 400;
//         margin-left: 100px;
//         margin-top: 40px;
//         background-color: #fff;
//         border: 1px solid black;
//     }

//     .right-child {
//         margin-right: 0;
//         text-align: right;
//     }

//     .product {
//         font-size: 24px;
      
//                 `}
//             </style>
//             <div className="container">
//                 <div className="banner">
//                     <img src="./src/images/checkout-banner.png" alt='' />
//                 </div>
//                 <main>
//                     <div className="left">
//                         <div className="title">Billing details</div>
//                         <div className="input-infomation">
//                             <div className="input-name">
//                                 <div className="first-name">
//                                     <p>First Name</p>
//                                     <input type="text" />
//                                 </div>
//                                 <div className="last-name">
//                                     <p>Last Name</p>
//                                     <input type="text" />
//                                 </div>
//                             </div>
//                             <div className="company-name">
//                                 <p>Company Name (Optional)</p>
//                                 <input type="text" />
//                             </div>
//                             <div className="country-name">
//                                 <p>Country / Region</p>
//                                 <select>
//                                     <option value="option1">Vietnam</option>
//                                     <option value="option2">USA</option>
//                                     <option value="option3">England</option>
//                                 </select>
//                             </div>
//                             <div className="address-name">
//                                 <p>Street address</p>
//                                 <input type="text" />
//                             </div>
//                             <div className="city-name">
//                                 <p>Town / City</p>
//                                 <input type="text" />
//                             </div>
//                             <div className="province-name">
//                                 <p>Province</p>
//                                 <select>
//                                     <option value="option1">Vietnam</option>
//                                     <option value="option2">USA</option>
//                                     <option value="option3">England</option>
//                                 </select>
//                             </div>
//                             <div className="zip-code">
//                                 <p>ZIP code</p>
//                                 <input type="text" />
//                             </div>
//                             <div className="phone-number">
//                                 <p>Phone number</p>
//                                 <input type="text" />
//                             </div>
//                             <div className="email-address">
//                                 <p>Email address</p>
//                                 <input type="text" />
//                             </div>
//                             <input type="text" placeholder="Additional information" className="addinformation" />
//                         </div>
//                     </div>
//                     <div className="right">
//                         <div className="product">
//                             <p className="left-child">Product</p>
//                             <p className="right-child">Subtotal</p>
//                         </div>
//                         <div className="product-name">
//                             <p className="left-child" style={{ color: '#9F9F9F' }}>Asgaard sofa</p>
//                             <p>1</p>
//                             <p className="right-child">25.000.000đ</p>
//                         </div>
//                         <div className="subtotal">
//                             <p className="left-child">Subtotal</p>
//                             <p className="right-child">25.000.000đ</p>
//                         </div>
//                         <div className="total">
//                             <p className="left-child">Total</p>
//                             <p className="right-child" style={{ fontSize: 24, fontWeight: 700, color: '#B88E2F' }}>25.000.000đ</p>
//                         </div>
//                         <hr style={{ marginTop: 30, marginBottom: 10 }} />
//                         <div className="pttt">
//                             <form style={{ lineHeight: 50 }}>
//                                 <input type="radio" id="option1" name="options" defaultValue="option1" />
//                                 <label htmlFor="option1">Direct Bank Transfer</label><br />
//                                 <input type="radio" id="option2" name="options" defaultValue="option2" />
//                                 <label htmlFor="option2">Direct Bank Transfer</label><br />
//                                 <input type="radio" id="option3" name="options" defaultValue="option3" />
//                                 <label htmlFor="option3">Cash On Delivery</label><br />
//                             </form>
//                         </div>
//                         <div className="text">
//                             <p>Your personal data will be used to support your experience throughout this website, to manage
//                                 access to your account, and for other purposes described in our <strong> privacy
//                                     policy.</strong></p>
//                         </div>
//                         <button>Place Order</button>
//                     </div>
//                 </main>
//             </div>
//         </div>


//     )
// }

// export default CheckoutComponent;