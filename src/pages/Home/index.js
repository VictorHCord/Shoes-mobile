import React, { Component } from 'react';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { formatPrice } from '../../util/format';
import api from '../../services/api';
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

  handleAddProduct = product => {
    const { dispatch } = this.props;

    dispatch({
      type: 'ADD_TO_CART',
      product,
    });
  };

  render() {
    const { products } = this.state;
    return (
      <Container>
        <FlatList
          horizontal
          data={products}
          keyExtractor={product => String(product.id)}
          renderItem={({ item }) => {
            return (
              <ProductList>
                <ItemImage source={{ uri: item.image }} />
                <Title>{item.title}</Title>
                <PriceProduct>{item.priceFormatted}</PriceProduct>
                <ButtonCart>
                  <ProductAmount>
                    <Icon name="shopping-cart" size={24} color="#fff" />
                    <ProductCart> 3 </ProductCart>
                  </ProductAmount>
                  <AddButtonCar onPress={() => this.handleAddProduct(products)}>
                    Adicionar
                  </AddButtonCar>
                </ButtonCart>
              </ProductList>
            );
          }}
        />
      </Container>
    );
  }
}

export default connect()(Home);
