import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { formatPrice } from '../../util/format';
import api from '../../services/api';
import * as CartActions from '../../store/modules/cart/actions';
import {
  ProductList,
  ProductAmount,
  Title,
  PriceProduct,
  ButtonCart,
  AddButtonCar,
  ProductCart,
  ItemImage,
  FlatList,
  Container,
} from './styles';

class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('/products');

    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({ products: data });
  }

  handleAddProduct = id => {
    const { AddToCartRequest } = this.props;

    AddToCartRequest(id);
  };

  renderItems = ({ item }) => {

    const { amount } = this.props;

    return (
      <ProductList key={item.id}>
        <ItemImage source={{ uri: item.image }} />
        <Title>{item.title}</Title>
        <PriceProduct>{item.priceFormatted}</PriceProduct>
        <ButtonCart onPress={() => this.handleAddProduct(item.id)}>
          <ProductAmount>
            <Icon name="shopping-cart" size={24} color="#fff" />
            <ProductCart>{amount[item.id] || 0}</ProductCart>
          </ProductAmount>
          <AddButtonCar>Adicionar</AddButtonCar>
        </ButtonCart>
      </ProductList>
    );
  };

  render() {
    const { products } = this.state;
    return (
      <Container>
        <FlatList
          horizontal
          extraData={this.props}
          data={products}
          keyExtractor={item => String(item.id)}
          renderItem={this.renderItems}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;

    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
