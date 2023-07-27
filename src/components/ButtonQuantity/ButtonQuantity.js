import { useEffect, useState } from "react";
import { Increase, Decrease } from 'components/ImageList';
import './ButtonQuantity.scss';

const ButtonQuantity = ({ className, initial, productId, sizeName, colorName, handleGetQuantity, ...props }) => {
    const [quantity, setQuantity] = useState(!initial ? 1 : initial);

    const increaseQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };
    
    const decreaseQuantity = () => {
        if (quantity > 0) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };


    useEffect(() => {
        handleGetQuantity(quantity, productId, sizeName, colorName);
    }, [quantity]);

    return (
        <div className="btn-quantity">
            <input 
                type="number" 
                min={1}
                value={quantity} 
                onChange={(e) => setQuantity(Number(e.target.value))}
                {...props}
            />
            <div onClick={decreaseQuantity} className="quantity-decrease"> {<Decrease />} </div>
            <div onClick={increaseQuantity} className="quantity-increase"> {<Increase />} </div>
        </div>
    )
}

export default ButtonQuantity;
