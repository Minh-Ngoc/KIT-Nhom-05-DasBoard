import axios from "axios";
import { toast } from 'react-toastify';
import { CHECKOUT_CODE, CREATE_PAYMENT, CHECKOUT_ONLINE, GET_ORDERS, GET_ORDER_BY_ID } from "api";
import Cookies from "js-cookie";

const userId = Cookies.get('userId');
const token = Cookies.get("token");
const headers = {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json',
};

export const orders = {
    state: {
        orderList: []
    },

    reducers: {
        setOrders(state, orderList) {
            return {
                ...state,
                orderList,
            }
        },
        setOrder(state, order) {
            return {
                ...state,
                order,
            }
        }
    },

    effects: (dispatch) => ({
    //   handle state changes with impure functions.
    //   use async/await for async actions
        fetchOrders() {
            axios.get(GET_ORDERS, { params: { userId } })
                .then(res => this.setOrders(res.data.orderwithusername))
                .catch(err => toast.error("GET ORDERS FAILURE", {
                    position: toast.POSITION.TOP_CENTER,
                }))
        },
        getOrderById(orderId) {
            axios.get(GET_ORDER_BY_ID, { params: { orderIds: orderId } })
                .then(res => this.setOrder(res.data.orderwithusername))
                .catch(err => toast.error("GET ORDERS FAILURE", {
                    position: toast.POSITION.TOP_CENTER,
                }))
        },
        async checkoutCode() {
            return await axios.post(CHECKOUT_CODE, null, { headers })
            .then(res => {
                dispatch.cart.fetchCart();
                toast.success("CHECKOUT SUCCESSFULLY", {
                    position: toast.POSITION.TOP_CENTER,
                })
            })
            .catch(error => toast.error("CHECKOUT FAILURE", {
                position: toast.POSITION.TOP_CENTER,
                })) 
            
        },
        async createPayment() {
            await axios.post(CREATE_PAYMENT)
                .then(res => window.location.href = res.data.url)
                .catch(err => toast.error("CHECKOUT ONLINE FAILURE", {
                    position: toast.POSITION.TOP_CENTER,
                }))
        },
        async checkoutOnline() {
            return await axios.post(CHECKOUT_ONLINE, null, { headers })
                .then(res => {
                    dispatch.cart.fetchCart();
                })
                .catch(err => toast.error("CHECKOUT FAILURE", {
                    position: toast.POSITION.TOP_CENTER,
                }))
        }
    }),

    selectors: (slice, createSelector) => ({
        selectOrders() {
            return slice(state => state.orders)
        },

    })
}