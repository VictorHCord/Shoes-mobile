/* eslint-disable react/prop-types */
import React from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Container, ItemCount, CartContainer, Wrapper } from './styles';
import logo from '../../assets/images/logo.png';

function Header({ navigation, cartSize }) {
  return (
    <Wrapper>
      <Container>
        <Image
          source={logo}
          style={{ width: 185, height: 24, resizeMode: 'cover' }}
        />
        <CartContainer onPress={() => navigation.navigate('Cart')}>
          <Icon name="shopping-basket" size={24} color="#fff" />
          <ItemCount>{cartSize || 0}</ItemCount>
        </CartContainer>
      </Container>
    </Wrapper>
  );
}

export default connect(state => ({
  cartSize: state.cart.length,
}))(Header);
