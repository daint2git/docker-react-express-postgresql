import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { fetchProducts, createProduct } from './productReducer'

const ProductItem = ({ name, ...rest }) => <div {...rest}>{name}</div>

const ProductList = ({ list = [], ...rest }) =>
  list.map(item => <ProductItem key={item.id} name={item.name} {...rest} />)

class AddProductForm extends React.PureComponent {
  state = {
    name: '',
  }

  onClick = () => this.props.onSubmit({ name: this.state.name })

  onChange = e => this.setState({ [e.target.name]: e.target.value })

  render() {
    return (
      <div>
        <input type="text" name="name" value={name} onChange={this.onChange} />
        <button onClick={this.onClick}>Create Product</button>
      </div>
    )
  }
}

class ProductPage extends React.Component {
  componentDidMount() {
    this.props.fetchProducts()
  }

  render() {
    const { list, createProduct } = this.props

    return (
      <div>
        <AddProductForm onSubmit={createProduct} />
        <br />
        <div>
          <h2>Products</h2>
          <ProductList list={list} />
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({
    list: state.list,
  }),
  dispatch => bindActionCreators({ fetchProducts, createProduct }, dispatch),
)(ProductPage)
