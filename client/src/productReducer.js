import { steps } from 'redux-effects-steps'
import axios from 'axios'

const defaultAxios = axios.create({
  baseURL: API_URL,
  timeout: 100000,
  withCredentials: true,
})

const fetch = (request, instance = defaultAxios) => instance(request)

const INITIAL_STATE = () => ({
  list: [],
})

const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS'
const CREATE_PRODUCT_SUCCESS = 'CREATE_PRODUCT_SUCCESS'

const fetchProductsSuccess = ({ data }) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: data,
})

const createProductSuccess = ({ data }) => ({
  type: CREATE_PRODUCT_SUCCESS,
  payload: data,
})

export const fetchProducts = () =>
  steps(
    fetch({
      method: 'get',
      url: 'products',
    }),
    fetchProductsSuccess,
  )

export const createProduct = data =>
  steps(
    fetch({
      method: 'post',
      url: 'products',
      data,
    }),
    createProductSuccess,
  )

const handleSuccess = (state, payload) => ({
  ...state,
  list: payload,
})

const products = (state = INITIAL_STATE(), action) => {
  const { type, payload } = action
  switch (type) {
    case FETCH_PRODUCTS_SUCCESS:
      return handleSuccess(state, payload)
    case CREATE_PRODUCT_SUCCESS:
      return handleSuccess(state, payload)
    default:
      return state
  }
}

export default products
