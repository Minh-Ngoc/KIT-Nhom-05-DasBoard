import React from 'react';
import './CheckoutSuccess.scss'; // Import file CSS
import { checkoutSuccessIcon, DecreaseIcon, Continue } from 'components/ImageList';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { Button } from 'components/Button';
import { useNavigate } from 'react-router-dom';

const CheckoutSuccess = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    
    const USDDollar = (total) => {
        return new Intl.NumberFormat('de-VN', { 
            style: 'currency', 
            currency: 'VND',
            currencyDisplay: 'code'
        }).format(total);
    }

    useEffect(() => {
        dispatch.orders.checkoutOnline();
    }, [])

    return (
        <div className='checkout-success'>
            <div className="checkout-success-container">
                <div className="check-icon">
                    <img src={checkoutSuccessIcon} alt="" />
                </div>
                <h1>ORDER SUCCESSFUL!</h1>
                <p className='checkout-success-price'> <DecreaseIcon /> {USDDollar(searchParams.get('vnp_Amount')/100)} </p>
                <p>Thank you for your order. Your order has been processed successfully.</p>
                <Button onClick={() => navigate("/")}>
                    <span>CONTINUE</span>
                    <Continue />
                </Button>
            </div>
        </div>
    );
};

export default CheckoutSuccess;