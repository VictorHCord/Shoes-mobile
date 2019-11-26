import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';
import shopping from '../../assets/images/shopping.png';
import {
  ProductList,
  ProductAmount,
  Title,
  PriceProduct,
  ButtonCart,
  AddButtonCar,
  ProductCart,
  ItemImage,
} from './styles';

export default function Home() {
  return (
    <ProductList>
      <ItemImage source={shopping} />
      <Title>Tênis de Caminhada Leve Confortável</Title>
      <PriceProduct>R$179,90</PriceProduct>
      <ButtonCart>
        <ProductAmount>
          <Icon name="shopping-cart" size={24} color="#fff" />
          <ProductCart> 3 </ProductCart>
        </ProductAmount>
        <AddButtonCar> Adicionar </AddButtonCar>
      </ButtonCart>
    </ProductList>
  );
}
