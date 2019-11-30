import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 10px;
  background: #fff;
  border-radius: 4px;
  margin: 15px;
`;
export const ListProducts = styled.View`
  flex-direction: row;
  align-items: center;
  background: #fff;
`;

export const InfoProductDetails = styled.View`
  flex: 1;
  margin-left: 10px;
  padding: 10px;
`;

export const ProductImage = styled.Image`
  width: 80px;
  height: 80px;
  margin-right: 10px;
  margin-left: 10px;
`;

export const TitleProduct = styled.Text``;
export const Product = styled.View``;
export const Products = styled.View``;

export const PriceItem = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;

export const DeleteCart = styled.TouchableOpacity`
  padding: 6px;
`;

export const NewList = styled.View`
  flex-direction: row;
  align-items: center;
  background: #f2f2f2;
  padding: 8px;
  border-radius: 4px;
`;

export const ButtonAmount = styled.TouchableOpacity`
  padding: 6px;
`;

export const AmountStock = styled.TextInput`
  background: #fff;
  padding: 5px;
  margin: 0 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-width: 52px;
`;

export const SubTotal = styled.Text`
  flex: 1;
  text-align: right;
  font-weight: bold;
  font-size: 16px;
  margin-right: 10px;
`;
