export const DOMAIN = "http://localhost:8080";


export const GET_PRODUCTS = `${DOMAIN}/products/getAllProductInfo`;
export const GET_PRODUCT_BY_ID = `${DOMAIN}/products/getproductbyid`;

export const LOGIN_USER = `${DOMAIN}/api/login`;

export const FORGOT_PASSWORD = `${DOMAIN}/api/reset-password/user`
export const LOGOUT_USER = `${DOMAIN}/api/logout`;
export const UPDATE_USER = `${DOMAIN}/api/user/users/update`;
export const REGISTER_USER = `${DOMAIN}/api/register`
export const GET_USER = `${DOMAIN}/api/user/users/user`

export const GET_USER_BY_ID = `${DOMAIN}/api/user/users/getuserbyid`;


export const ALL_PRODUCTS = `${DOMAIN}/products/getallproductsandstocks`

export const ADD_TO_CART = `${DOMAIN}/add-cart`;
export const GET_CART = `${DOMAIN}/cart`;
export const REMOVE_CART_BY_ID_SIZE_COLOR = `${DOMAIN}/remove-cart`;
export const UPDATE_CART = `${DOMAIN}/update-cart`;
export const CLEAR_CART = `${DOMAIN}/remove-all-cart`;


export const CHECKOUT_CODE = `${DOMAIN}/api/user/orders/checkout-code`;
export const CHECKOUT_ONLINE = `${DOMAIN}/api/user/orders/checkout-online`;
export const CREATE_PAYMENT = `${DOMAIN}/api/user/orders/create_payment`;

export const GET_ORDERS = `${DOMAIN}/api/user/orders/getorderswithusername`;
export const GET_ORDER_BY_ID = `${DOMAIN}/api/user/orders/getorderdetailfromorder`;

export const ALL_COLORS = `${DOMAIN}/colors/getallcolor`;
export const ALL_SIZES = `${DOMAIN}/sizes/getallsize`;
export const ALL_CATEGORIES = `${DOMAIN}/category/getallcategory`;
export const DATA_FILTER = `${DOMAIN}/stocks/getstockcolorssizesbrands`
export const API_FILTER = `${DOMAIN}/products/filterproduct`

