import axios from "axios";
import { toast } from 'react-toastify';
import { GET_CART, ADD_TO_CART, UPDATE_CART, REMOVE_CART_BY_ID_SIZE_COLOR, CLEAR_CART } from "api";

export const cart = {
    state: {
        products: [],
    },

    reducers: {
        setCart(state, products) {
            return {
                ...state,
                products,
            }
        },
        setTotalPrice(state, totalPrice) {
            return {
                ...state,
                totalPrice,
            }
        }
    },

    effects: (dispatch) => ({
    //   handle state changes with impure functions.
    //   use async/await for async actions
        async fetchCart() {
            await axios.get(GET_CART)
                .then(res => {
                    this.setCart(res.data);

                    let subtotal = 0;
                    res.data?.map((product) => {
                        subtotal += product.unitPrice * product.quantity;
                    });
                    this.setTotalPrice(subtotal);
                })
                .catch(err => console.log(err))
        },
        
        async addToCart(product) {
            await axios.post(ADD_TO_CART, product)
                .then(res => {
                    dispatch.cart.fetchCart()

                    return toast.success("ADDING PRODUCTS TO CART SUCCESSFULLY", {
                        position: toast.POSITION.TOP_CENTER,
                    })
                })
                .catch(err => toast.error("ADDING PRODUCTS TO CART FAILURE", {
                    position: toast.POSITION.TOP_CENTER,
                }));
        },

        async updateCart(product) {
            await axios.put(UPDATE_CART, product)
                .then(res => dispatch.cart.fetchCart())
                .catch(res => {
                    toast.error(`MAXIMUM QUANTITY OF PRODUCTS IN STOCK IS ${res.response.data}`, {
                        position: toast.POSITION.TOP_CENTER,
                    })}
                )
        },

        async removeCart(product) {
            await axios.delete(`${REMOVE_CART_BY_ID_SIZE_COLOR}/${product.productId}/${product.sizeName}/${product.colorName}`)
                .then(res => {
                    dispatch.cart.fetchCart();

                    toast.success("CART DELETE SUCCESSFULLY", {
                    position: toast.POSITION.TOP_CENTER,
                    })
                })
                .catch(err => toast.error("CART DELETE FAILURE", {
                    position: toast.POSITION.TOP_CENTER,
                }))
        },
        async removeAllCart() {
            await axios.delete(`${CLEAR_CART}`)
                .then(res => toast.success("DELETE ALL PRODUCTS IN CART SUCCESSFULLY", {
                    position: toast.POSITION.TOP_CENTER,
                }))
                .catch(err => toast.success("CLEARING ALL PRODUCTS IN CART FAILURE", {
                    position: toast.POSITION.TOP_CENTER,
                }))
        },

    }),

    selectors: (slice, createSelector) => ({
        selectCart() {
            return slice(state => state.cart)
        },

    })
}