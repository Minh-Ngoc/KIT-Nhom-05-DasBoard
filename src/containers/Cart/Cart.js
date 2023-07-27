import { Helmet, HelmetProvider } from "react-helmet-async";
import './Cart.scss';
import Tab from 'components/Tab';
import { Button } from "components/Button";
import ButtonQuantity from "components/ButtonQuantity";
import { useSelector, useDispatch } from 'react-redux';
import { Save, Close, HideDetail, ShowDetail } from 'components/ImageList';
import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Stepper from "components/Stepper";

const Cart = () => {
    const page = "Shopping Cart";

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.products);

    const [isCartChanged, setCartChanged] = useState(false);

    const [visibility, setVisibility] = useState("hidden");

    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const USDDollar = (total) => {
        return new Intl.NumberFormat('de-DE', { 
            style: 'currency', 
            currency: 'USD',
            currencyDisplay: 'code'
        }).format(total);
    }

    const calculateSubtotal = () => {
        let subtotal = 0;
        cart?.map((product) => {
          subtotal += product.unitPrice * product.quantity;
        });
        return subtotal;
    };

    const handleGetQuantity = useCallback((quantity, productId, sizeName, colorName) => {
        const data = { productId, quantity, sizeName, colorName };
        dispatch.cart.updateCart(data)
        setCartChanged(true);
    }, [dispatch.cart]);

    const handleRemoveProdToCart = useCallback((productId, sizeName, colorName) => {
        const data = { productId, sizeName, colorName };
        dispatch.cart.removeCart(data);
        setCartChanged(true);
    }, [dispatch.cart]);

    const handleRemoveAllProdToCart = useCallback(() => {
        dispatch.cart.removeAllCart();
        setCartChanged(true);
    }, [dispatch.cart]);

    const handleCheckout = () => {
        navigate("/payment");
    }

    useEffect(() => {
        // Fetch cart data only on the first render
        dispatch.cart.fetchCart();
    }, [dispatch.cart]);

    useEffect(() => {
        if (isCartChanged) {
            dispatch.cart.fetchCart();
            setCartChanged(false);
        }
    }, [isCartChanged]);

    return (
        <HelmetProvider>
            <Helmet>
                <title> {page} </title>
            </Helmet>
            <div className="shopping-cart">
                <Tab className="cart-tab" page={page} />
                <div className="stepper">
                    <Stepper shipping={0} />
                </div>

                <div className="cart-container">
                    <div className="product-list">
                        <table>
                            <thead>
                                <tr>
                                    <th className="text-left">Product</th>
                                    <th>Price</th>
                                    <th>Size</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                { cart.length !== 0 ? cart.map((pd, index) => (
                                    <tr key={index}>
                                        <td className="d-flex w-350"> 
                                            <img src={pd.urlImage} alt="" />
                                            <div className="d-flex flex-column justify-center">
                                                <p> {pd.productName} </p>
                                                <div className="wrapper-btn">
                                                    <Button
                                                        bgColor={pd.colorName}
                                                        width="20px"
                                                        height="20px"
                                                    />
                                                </div>
                                            </div>
                                        </td>
                                        <td> {USDDollar(pd.unitPrice)} </td>
                                        <td> {pd.sizeName} </td>
                                        <td> 
                                            <ButtonQuantity
                                                initial={pd.quantity}
                                                productId={pd.productId}
                                                sizeName={pd.sizeName}
                                                colorName={pd.colorName}
                                                handleGetQuantity={handleGetQuantity} 
                                            /> 
                                        </td>
                                        <td> {USDDollar(pd.unitPrice * pd.quantity)} </td>
                                        <td>
                                            <div className="d-flex">
                                                <Button 
                                                    className="cart-btn-action"
                                                    onClick={() => navigate(-1)}
                                                >
                                                    <Save />
                                                </Button>
                                                <Button 
                                                    className="cart-btn-action"
                                                    onClick={() => handleRemoveProdToCart(pd.productId, pd.sizeName, pd.colorName)}
                                                >
                                                    <Close />
                                                </Button>
                                            </div>
                                        </td>
                                    </tr>
                                )) : (<tr key="product-invalid"><td colSpan={6} className="text-center" >Không có sản phẩm trong giỏ hàng</td></tr>) }
                                <tr>
                                    <td colSpan={6}>
                                        <div className="d-flex justify-between">
                                            <Button type="submit" className="cart-btn" onClick={() => navigate("/")}>
                                                <p>Continue shopping</p>
                                            </Button>
                                            <Button 
                                                type="button" 
                                                className="cart-btn"
                                                onClick={handleRemoveAllProdToCart}
                                            >
                                                <p>Clear shopping cart</p>
                                            </Button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="checkout">
                        <div className="shipping-tax">
                            <p>Apply Discount Code</p>
                            <div className="shipping-tax-input">
                                <input 
                                    type="text" 
                                    placeholder="Enter discount code" 
                                />
                                <span>Apply Discount</span>
                            </div>
                            <div 
                                className="shipping-tax-estimate" 
                                onClick={() => visibility === "visible" ?
                                    setVisibility("hidden") : setVisibility("visible")
                                }
                            >
                                <p>Estimate Shipping and Tax</p>
                                {visibility === "visible" ? <HideDetail /> : <ShowDetail />}
                            </div>
                            <div className={`shipping-tax-container${visibility === "visible" ? "" : " visibility"}`}>
                                <div className="shipping-tax-input">
                                    <input 
                                        type="text" 
                                        placeholder="Enter your destination to get a shipping estimate." 
                                    />
                                </div>
                                <div className="shipping-tax-input-group">
                                    <label>Country <i>*</i> </label>
                                    <select  onChange={() => {}}>
                                        <option >Gender</option>
                                        <option >Gender</option>
                                    </select>
                                </div>
                                <div className="shipping-tax-input-group">
                                    <label>State/Province <i>*</i> </label>
                                    <select  onChange={() => {}}>
                                        <option >Gender</option>
                                        <option >Gender</option>
                                    </select>
                                </div>
                                <div className="shipping-tax-input-group">
                                    <label>Zip/Postal Code</label>
                                    <input 
                                        type="text" 
                                        placeholder=""
                                    />
                                </div>
                                <div className="shipping-tax-radio-group">
                                    <p>Flat Rate</p>
                                    <label htmlFor="flat-rate" className={selectedOption === "flat-rate" ? "checked" : ""}>
                                        <input 
                                            id="flat-rate" 
                                            type="radio" 
                                            value="flat-rate"
                                            name="shipping" 
                                            onChange={handleOptionChange}
                                        />
                                        <span>Fixed 5.00 EUR</span>
                                    </label>
                                </div>
                                <div className="shipping-tax-radio-group">
                                    <p>Best Way</p>
                                    <label htmlFor="best-way" className={selectedOption === "best-way" ? "checked" : ""}>
                                        <input 
                                            id="best-way" 
                                            type="radio" 
                                            value="best-way"
                                            name="shipping" 
                                            onChange={handleOptionChange} 
                                        />
                                        <span>Table Rate 10.00 EUR</span>
                                    </label>
                                </div>
                            </div>
                        </div>   
                        <div className="order-total">
                            <div className="d-flex justify-between">
                                <p>Subtotal</p>
                                <p> {USDDollar(calculateSubtotal())} </p>
                            </div>
                            <div className="d-flex justify-between tax">
                                <p>Tax</p>
                                <p> {USDDollar(0)} </p>
                            </div>
                            <div className="d-flex justify-between total">
                                <p>Order Total</p>
                                <p> {USDDollar(calculateSubtotal())} </p>
                            </div>
                            <Button onClick={handleCheckout} type="button" className="checkout-btn">
                                <p>Proceed to checkout</p>
                            </Button>
                        </div>                        
                    </div>
                </div>
            </div>    
        </HelmetProvider>
    )
}

export default Cart;