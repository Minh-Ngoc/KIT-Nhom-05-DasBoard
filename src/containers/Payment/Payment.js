import './Payment.scss';
// import { HideDetail, ShowDetail } from 'components/ImageList';
import { Helmet, HelmetProvider } from "react-helmet-async";
import Tab from 'components/Tab';
import { Button } from 'components/Button';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { ArrowUp } from 'components/ImageList';
import Stepper from "components/Stepper";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';

const userId = Cookies.get("userId")
const token = Cookies.get("token");

const Payment = () => {
    const page = "Create Payment";
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.products);
    const user = useSelector((state) => state.register);

    const [visibility, setVisibility] = useState("visible");
    const [payment, setPayment] = useState('delivery');

    const USDDollar = (total) => {
        return new Intl.NumberFormat('de-DE', { 
            style: 'currency', 
            currency: 'USD',
        }).format(total);
    }

    const calculateSubtotal = () => {
        let subtotal = 0;
        cart?.forEach((product) => {
          subtotal += product.unitPrice * product.quantity;
        });
        return subtotal;
    };

    useEffect(() => {
        // Fetch cart data only on the first render
        dispatch.cart.fetchCart();
        dispatch.register.getUserById(userId);

        setTimeout(() => {
            if(cart?.length === 0) {
                toast.warning("NO PRODUCTS IN CART! PLEASE ADD PRODUCTS TO CART TO PAY.", {
                    position: toast.POSITION.TOP_CENTER,
                })
                setTimeout(() => navigate("/cart"), 3000);
            }
        }, 100)
    }, [dispatch.cart]);

    const handleOptionChange = (event) => {
        setPayment(event.target.value);
    };

    const handleCheckout = () => {
        if(payment === 'online') {
            dispatch.orders.createPayment()
        } else {
            dispatch.orders.checkoutCode();
        }
    }

    if(!token) {
        toast.warning("PLEASE LOGIN TO SHOP", {
            position: toast.POSITION.TOP_CENTER,
        });
        return navigate("/login");
    } 

    return (
        <HelmetProvider>
            <Helmet>
                <title> {page} </title>
            </Helmet>
            <div className="payment">
                <Tab className="payment-tab" page={page} category="Womens Dress" product="Angels malu" />
                <div className="stepper">
                    <Stepper shopping={1} payment={1} />
                </div>
                <div className="payment-container">
                    <div className="payment-method">
                        <p>Payment Method:</p>
                        <div className="paymnet-check-order">
                            <p>Check / Money order</p>
                            <div className="payment-input-checked">
                            </div>
                            <div className="payment-info">
                                <p>Fullname: {`${user.user?.firstname} ${user.user?.lastname}`}  </p>
                                <p>Address: {user.user?.address} </p>
                                <p className="payment-info-phone">Phone Number: {user.user?.phonenumber} </p>
                            </div>
                        </div>
                        <div className="payment-radio-group">
                            <label htmlFor="delivery" className={payment === "delivery" ? "checked" : ""}>
                                <input 
                                    id="delivery" 
                                    type="radio" 
                                    value="delivery"
                                    name='payment'
                                    checked={payment === "delivery"}
                                    onChange={handleOptionChange} 
                                />
                                <span>PAYMENT ON DELIVERY</span>
                            </label>
                        </div>
                        <div className="payment-radio-group">
                            <label htmlFor="online" className={payment === "online" ? "checked" : ""}>
                                <input 
                                    id="online" 
                                    type="radio" 
                                    value="online"
                                    name='payment'
                                    checked={payment === "online"}
                                    onChange={handleOptionChange} 
                                />
                                <span>ONLINE PAYMENT</span>
                            </label>
                        </div>
                        <div className="payment-btn">
                            <Button onClick={handleCheckout}>
                                <p>Place Order</p>
                            </Button>
                            <Button onClick={() => navigate(-1)}>
                                <p>Back</p>
                            </Button>
                        </div>
                        <div className="payment-discount">
                            <p>Apply Discount Code</p>
                            <div className="payment-discount-input">
                                <input 
                                    type="text" 
                                    placeholder="Enter discount code" 
                                />
                                <span>Apply Discount</span>
                            </div>
                        </div>
                    </div>
                    <div className="order-summary">
                        <p>Order Summary</p>
                        <div className="d-flex justify-between total">
                            <p>Order Total</p>
                            <p> {USDDollar(calculateSubtotal())} </p>
                        </div>
                        <div 
                            className={`order-item-in-cart${visibility === "visible" ? " rotate" : ""}` }
                            onClick={() => visibility === "visible" ?
                                setVisibility("hidden") : setVisibility("visible")
                            }
                        >
                            <p> {cart?.length} Item in Cart</p>
                            <ArrowUp />
                        </div>
                        <div className={`order-list${visibility === "visible" ? "" : " visibility"}`}>
                            { cart?.map((pd, index) => (
                                <div key={index} className="order-item">
                                    <div className="d-flex">
                                        <img src={pd.urlImage} alt="" />
                                        <div className="d-flex gap-1 flex-column">
                                            <p className="order-item-name"> {pd.productName} </p>
                                            <div className="order-item-qty">
                                                <span>QTY:</span>
                                                <span> {pd.quantity} </span>
                                            </div>
                                        </div>
                                    </div>
                                    <p>{USDDollar(pd.unitPrice * pd.quantity)}</p>
                                </div>
                            )) }
                        </div>

                    </div>      
                </div>
            </div>
        </HelmetProvider>
    )
}

export default Payment;
