import React from 'react'
import { Provider } from 'react-redux'

import ProductPage from './ProductPage'

const App = ({ store }) => (
  <Provider store={store}>
    <ProductPage />
  </Provider>
)

export default App
