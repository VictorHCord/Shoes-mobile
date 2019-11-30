import React from 'react';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../style/colors';
import { formatPrice } from '../../util/format';
import {
  Container,
  ListProducts,
  ProductImage,
  TitleProduct,
  PriceItem,
  InfoProductDetails,
  DeleteCart,
  NewList,
  ButtonAmount,
  AmountStock,
  SubTotal,
  Product,
  Products,
} from './styles';

function Cart({ products }) {
  return (
    <Container>
      <Products>
        {products.map(product => (
          <Product key={product.id}>
            <ListProducts>
              <ProductImage source={{ uri: product.image }} />
              <InfoProductDetails>
                <TitleProduct>{product.title}</TitleProduct>
                <PriceItem>{formatPrice(product.price)}</PriceItem>
              </InfoProductDetails>
              <DeleteCart>
                <Icon name="trash" size={20} color={colors.primary} />
              </DeleteCart>
            </ListProducts>
            <NewList>
              <ButtonAmount>
                <Icon name="plus-circle" size={15} color={colors.primary} />
              </ButtonAmount>
              <AmountStock>3</AmountStock>
              <ButtonAmount>
                <Icon name="minus-circle" size={15} color={colors.primary} />
              </ButtonAmount>
              <SubTotal>R$539,70</SubTotal>
            </NewList>
          </Product>
        ))}
      </Products>
    </Container>
  );
}

const mapStateToProps = state => ({
  products: state.cart.map(product => ({
    ...product,
  })),
});

export default connect(mapStateToProps)(Cart);
