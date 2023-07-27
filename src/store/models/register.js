import { REGISTER_USER, GET_USER_BY_ID } from "api";
import axios from "axios";
import { toast } from "react-toastify";

export const register = {
    state: {
      isLoading: false,
    },
    reducers: {
      setLoading(state, payload) {
        return {
          ...state,
          isLoading: payload,
        };
      },
      setUser(state, user) {
        return {
          ...state,
          user
        }
      }
    },
    effects: (dispatch) => ({
      async registerUser(user) {
        try {
          dispatch.register.setLoading(true);
          // Call API
          await axios.post(REGISTER_USER, user);
          // Xử lý response nếu cần thiết
          dispatch.register.setLoading(false);
          toast.success(`Register Successfully!`, {
            position: toast.POSITION.TOP_CENTER,
          })
        } catch (error) {
        //   console.error('Đã xảy ra lỗi khi đăng ký:', error);
          toast.error(`Register Failed!, ${error}`, {
            position: toast.POSITION.TOP_CENTER,
          });
          dispatch.register.setLoading(false);
        }
      },
      getUserById(userId) {
        axios.get(GET_USER_BY_ID, { params: { userId } })
          .then(res => this.setUser(res.data.product[0]))
          .catch(err => console.log(err))
      }
    }),
  };