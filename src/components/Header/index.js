import React from 'react';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Container, ItemCount, CartContainer } from './styles';
import logo from '../../assets/images/logo.png';

export default function Header() {
  return (
    <>
      <Container>
        <Image
          source={logo}
          style={{ width: 185, height: 24, resizeMode: 'cover' }}
        />
        <CartContainer>
          <Icon name="shopping-basket" size={24} color="#fff" />
          <ItemCount>3</ItemCount>
        </CartContainer>
      </Container>
    </>
  );
}
