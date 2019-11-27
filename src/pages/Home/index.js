import React, { Component } from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';
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

export default class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('/products');

    const data = response.data.map(product => ({
      ...product,
    }));

    this.setState({ products: data });
  }

  render() {
    const { products } = this.state;
    return (
      <Container>
        <FlatList
          data={products}
          keyExtractor={product => String(product.id)}
          renderItem={({ item }) => {
            return (
              <ProductList>
                <ItemImage source={{ uri: item.image }} />
                <Title>{item.title}</Title>
                <PriceProduct>{item.price}</PriceProduct>
                <ButtonCart>
                  <ProductAmount>
                    <Icon name="shopping-cart" size={24} color="#fff" />
                    <ProductCart> 3 </ProductCart>
                  </ProductAmount>
                  <AddButtonCar> Adicionar </AddButtonCar>
                </ButtonCart>
              </ProductList>
            );
          }}
        />
      </Container>
    );
  }
}
