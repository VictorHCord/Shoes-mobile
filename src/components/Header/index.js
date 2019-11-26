/* eslint-disable react/prop-types */
import React from 'react';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Container, ItemCount, CartContainer, Wrapper } from './styles';
import logo from '../../assets/images/logo.png';

function Header({ navigation }) {
  console.tron.log('Cart');
  return (
    <Wrapper>
      <Container>
        <Image
          source={logo}
          style={{ width: 185, height: 24, resizeMode: 'cover' }}
        />
        <CartContainer onPress={() => navigation.navigate('Cart')}>
          <Icon name="shopping-basket" size={24} color="#fff" />
          <ItemCount>3</ItemCount>
        </CartContainer>
      </Container>
    </Wrapper>
  );
}

export default Header;
