import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../style/colors';
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
} from './styles';
import shopping from '../../assets/images/shopping.png';

export default function Cart() {
  return (
    <Container>
      <ListProducts>
        <ProductImage source={shopping} />
        <InfoProductDetails>
          <TitleProduct>Tênis de Caminhada Leve Confortável</TitleProduct>
          <PriceItem>R$179,90</PriceItem>
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
    </Container>
  );
}
