import axios from "axios";
import { GET_PRODUCT_BY_ID ,ALL_PRODUCTS} from "api";
export const products = {
    state: {
        listProduct: [],
        product: '',
        count: 0,
    }, // initial state
    reducers: {
        // handle state changes with pure functions
        setListProduct(state, listProduct) {
            return {
                ...state,
                listProduct,
            };
        },
        setProductById(state, product) {
          return {
                ...state,
                product,
          };
        },
        setProduct(state, product) {
            return {
                ...state,
                product,
            };
        },
        setCount(state, count) {
          return {
                ...state,
                count,
          };
        },
    },

    effects: (dispatch) => ({
        async fetchProducts() {
            try {
              const response = await axios.get(ALL_PRODUCTS);
              const data = response.data.product;
              // Log the fetched data and its type to the console
              // call data
              dispatch.products.setListProduct(data);
            } catch (error) {
              console.error('Error fetching products:', error);
            }
        },
        async getProductById(productId) {
            await axios.get(`${GET_PRODUCT_BY_ID}/${productId}`) 
                .then(res => this.setProduct(res.data.product[0]))
                .catch(err => console.log(err))
        },
    }),
    selectors: (slice, createSelector) => ({
            selectCount() {
              return slice((state) => state.count);
            },
    }),
};
