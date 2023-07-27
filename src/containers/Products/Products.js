import { Helmet, HelmetProvider } from "react-helmet-async";
import './Products.scss';
import Tab from "components/Tab";
import { 
    Heart, Checked, Zoom, Facebook, Twitter, Pinterest, Instagram, HideDetail, ShowDetail
} from 'components/ImageList';
import { Button } from "components/Button";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ProductCarousel } from "components/ProductCarousel";
import { useSelector, useDispatch } from "react-redux";
import ButtonQuantity from "components/ButtonQuantity";
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

const Products = () => {
    const page = "Products";

    const params = useParams();
        
    const productId = params.id;

    const dispatch = useDispatch();
    const productsStore = useSelector((state) => state.products);

    useEffect(() => {
        dispatch.products.getProductById(productId);
    }, [dispatch]);

    const imageList = productsStore.product?.urlImage?.split(',') || [];
    const sizeList = productsStore.product?.sizeName?.split(',') || [];
    const colorList = productsStore.product?.colorName?.split(',') || [];
    const priceList = productsStore.product?.priceStock?.split(',') || [];

    console.log(productsStore.product)

    const description = productsStore.product?.description;

    const iconShare = [ Facebook , Twitter, Pinterest, Instagram ];
    const [quantity, setQuantity] = useState(1);
    const [imgShow, setImgShow] = useState('');
    const [price, setPrice] = useState();

    const [active, setActive] = useState({
        color: '',
        size: '',
        image: ''
    });
    const [stateDesc, setStateDesc] = useState(false);

    const USDollar = new Intl.NumberFormat('de-US', {
        style: 'currency',
        currency: 'USD',
    });

    const handleGetQuantity = (qty) => {
        setQuantity(qty)
    }

    const imageSelected = (img) => {
        setActive({ ...active, image: img })
        setImgShow(img)
    }

    const handleAddToCart = () => {
        const data = {
            productId: productsStore.product?.productId,
            productName: productsStore.product?.productName,
            unitPrice: price,
            quantity,
            urlImage: imgShow,
            colorName: active.color,
            sizeName: active.size
        };

        if(data.quantity < 1) {
            return toast.warning("QUANTITY INVALID", {
                position: toast.POSITION.TOP_CENTER,
            })
        } else if(!data.colorName) {
            return toast.warning("PLEASE CHOOSE PRODUCT COLOR", {
                position: toast.POSITION.TOP_CENTER,
            })
        } else if(!data.sizeName) {
            return toast.warning("PLEASE CHOOSE PRODUCT SIZE", {
                position: toast.POSITION.TOP_CENTER,
            })
        }
        
        dispatch.cart.addToCart(data);
    }

    useEffect(() => {
        if (imageList.length > 0) {
          setImgShow(imageList[0]);
          setActive({ ...active, image: imageList[0] });
          setPrice(priceList[0])
        }
    }, [productsStore]);

    useEffect(() => {
        for(let i = 0; i < priceList?.length; i++) {
            if(active.size === sizeList[i] && active.color === colorList[i]) {
                setPrice(priceList[i])
            } else continue;
        }
    }, [active.color, active.size]);

    if (!productsStore.product) {
        return <div>Loading...</div>;
    } else {
        return (
            <HelmetProvider>
                <Helmet>
                <title> {page} </title>
                </Helmet>
                { productsStore.product && 
                <div className="products">
                    <div className="products-container">
                        <div className="products-overview">
                            <div className="products-image">
                                <div className="products-image-list">
                                    { imageList.map((img, index) => (
                                        <div 
                                            key={index} 
                                            className={`products-image-item ${active.image === img ? 'active' : ''}`}
                                            onClick={() => imageSelected(img)}
                                        >
                                            <img src={img} alt="product-error" />
                                        </div>
                                    )) }
                                </div>
                                
                                <div className="products-image-index">
                                    <img src={imgShow} alt="product-error" />
                                    <div className="products-image-zoom">
                                        <Zoom /> 
                                    </div>
                                </div>
                                <div className="products-image-share">
                                    <p>SHARE:</p>
                                    <div className="image-icon-list">
                                        { iconShare.map((Icon, index) => <Icon key={index} />) }
                                    </div>
                                </div>
                            </div>
    
                            <div className="products-attributes">
                                {/* Tab: Page/category/product */}
                                <Tab 
                                    page={page}
                                    category={productsStore.product?.categoryName}
                                    product={productsStore.product?.productName}
                                />
    
                                <div className="products-attributes-brand">
                                    <p>{productsStore.product?.brand}</p>
                                </div>
    
                                <div className="products-attributes-name">
                                    <p>{productsStore.product?.productName}</p>
                                </div>
    
                                <div className="products-attributes-select">
                                    <p>SELECT COLOR</p>
                                    <div className="attributes-select">
                                        { colorList?.map(color => (
                                            <div key={color} className={`wrapper-btn ${active.color === color && 'active'}`}>
                                                <Button 
                                                    width="20px"
                                                    height="20px"
                                                    className={`btn-color`}
                                                    bgColor={color}
                                                    onClick={() => setActive({ ...active, color })}
                                                />
                                            </div>
                                        )) }
                                    </div>
                                </div>
                                <div className="products-attributes-select">
                                    <p>SELECT SIZE</p>
                                    <div className="attributes-select">
                                        { sizeList?.map(size => (
                                            <Button 
                                                key={size}
                                                className={`btn-size ${active.size === size && 'active'}`}
                                                width="56px"
                                                height="46px"
                                                onClick={() => setActive({ ...active, size })}
                                            >
                                                {size}
                                            </Button>
                                        )) }
                                        <Link to="#" >
                                            Size guide
                                        </Link>
                                    </div>
                                </div>
                                <div className="products-attributes-group">
                                    <div className="attributes-row">
                                        <p>QUANTITY</p>
                                        <ButtonQuantity handleGetQuantity={handleGetQuantity} />
                                    </div>
    
                                    <div className="attributes-row">
                                        <p>PRIRCE TOTAL</p>
                                        <h3> {USDollar.format(price)} </h3>
                                    </div>
                                </div>
                                <div className="products-attributes-group">
                                    <Button 
                                        bgColor="#000" 
                                        textColor="#FFF" 
                                        className="btn-add-to-bag"
                                        width="200px"
                                        onClick={handleAddToCart}
                                    ><p>ADD TO CART</p></Button>
                                    <Button width="200px" className="btn-save"> <Heart /> SAVE</Button>
                                </div>
                                <div className="products-attributes-group mt-1">
                                    <div className="d-flex">
                                        <Checked />
                                        <p>Free shipping</p>            
                                    </div>
                                    <p>Product code: RFKK1024</p>
                                    <p>TAGS: NEW arrivals, Top women</p>
                                </div>
                            </div>
                        </div>
                        <div className="products-detail">
                            <div className="products-detail-title" onClick={() => setStateDesc(!stateDesc)}>
                                <p>Details</p>
                                { !stateDesc ? <HideDetail /> : <ShowDetail /> }
                            </div>
                            <div className={`products-desc ${stateDesc && 'hide-desc'}`} dangerouslySetInnerHTML={{__html: description}}>
                                    
                            </div>
                        </div>
                    </div>
                    <div className="products-slider">
                        <p>You May Also Like</p>
                        <ProductCarousel productList={ productsStore.listProduct } />
                    </div>
                </div>}
            </HelmetProvider>
        );
    }
  };
  
  export default Products;