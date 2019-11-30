import React from 'react';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as CartActions from '../../store/modules/cart/actions';
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
  ListFinal,
  TextTotal,
  TotalInformation,
  ButtonFinally,
  ButtonFinallyText,

} from './styles';

function Cart({ products , total , RemoveFromCart, UpdateAmountRequest }) {

  function increment(product) {
    UpdateAmountRequest(product.id , product.amount + 1)
  }

  function decrement(product) {
    UpdateAmountRequest(product.id, product.amount - 1);
  }

  return (
    <ScrollView>
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
              <DeleteCart onPress={() => RemoveFromCart(product.id)}>
                <Icon name="trash" size={20} color={colors.primary} />
              </DeleteCart>
            </ListProducts>
            <NewList>
              <ButtonAmount onPress={() => increment(product)}>
                <Icon name="plus-circle" size={15} color={colors.primary} />
              </ButtonAmount>
              <AmountStock editable={false} >{product.amount}</AmountStock>
              <ButtonAmount onPress={() => decrement(product)}>
                <Icon name="minus-circle" size={15} color={colors.primary} />
              </ButtonAmount>
              <SubTotal>{product.subTotal}</SubTotal>
            </NewList>
          </Product>
        ))}
      </Products>
      <ListFinal>
       <TextTotal>Total</TextTotal>
        <TotalInformation>{total}</TotalInformation>
          <ButtonFinally>
           <ButtonFinallyText>FINALIZAR PEDIDO</ButtonFinallyText>
          </ButtonFinally>
      </ListFinal>
    </Container>
    </ScrollView>
  );
}

const mapStateToProps = state => ({
  products: state.cart.map(product => ({
    ...product,
    subTotal: formatPrice(product.price * product.amount),
  })),
  total: formatPrice(state.cart.reduce((total, product) => {
    return total + product.price * product.amount;
  }, 0)
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
