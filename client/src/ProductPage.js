import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { fetchProducts, createProduct } from './productReducer'

const styles = {
  table: {
    borderCollapse: 'collapse',
    width: '100%',
    border: '1px solid black',
  },
  th: {
    height: 50,
    border: '1px solid black',
  },
  td: {
    border: '1px solid black',
  },
}

const ProductTableHead = () => (
  <thead>
    <tr>
      <th style={styles.th}>name</th>
      <th style={styles.th}>description</th>
      <th style={styles.th}>image</th>
      <th style={styles.th}>price</th>
      <th style={styles.th}>quantity</th>
      <th style={styles.th}>manufacturer</th>
      <th style={styles.th}>category</th>
    </tr>
  </thead>
)

const ProductTableBody = ({ children }) => <tbody>{children}</tbody>

const ProductTableRow = ({ product }) => (
  <tr>
    <td style={styles.td}>{product.name}</td>
    <td style={styles.td}>{product.description}</td>
    <td style={styles.td}>{product.image}</td>
    <td style={styles.td}>{product.price}</td>
    <td style={styles.td}>{product.quantity}</td>
    <td style={styles.td}>{product.manufacturer}</td>
    <td style={styles.td}>{product.category}</td>
  </tr>
)

const ProductTable = ({ list }) => (
  <table style={styles.table}>
    <ProductTableHead />
    <ProductTableBody>
      <ProductContent list={list} />
    </ProductTableBody>
  </table>
)

const ProductContent = ({ list = [], ...rest }) =>
  list.map(product => <ProductTableRow key={product.id} product={product} {...rest} />)

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
          <ProductTable list={list} />
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
