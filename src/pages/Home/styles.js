import styled from 'styled-components/native';
import { darken } from 'polished';
import colors from '../../style/colors';

export const ProductList = styled.View`
  background: #fff;
  padding: 10px;
  margin: 15px;
  border-radius: 4px;
  width: 220px;
`;

export const ItemImage = styled.Image`
  width: 200px;
  height: 200px;
`;

export const Title = styled.Text`
  font-size: 14px;
`;

export const ProductAmount = styled.View`
  padding: 12px;
  background: ${darken(0.03, colors.primary)};
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  flex-direction: row;
  align-items: center;
`;
export const PriceProduct = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin: 14px 0px;
  margin-bottom: 14px;
`;

export const AddButtonCar = styled.Text`
  flex: 1;
  text-align: center;
  font-weight: bold;
  color: #fff;
`;

export const ButtonCart = styled.TouchableOpacity`
  background: ${colors.primary};
  flex-direction: row;
  overflow: hidden;
  align-items: center;
  border-radius: 4px;
  margin-top: auto;
`;
export const ProductCart = styled.Text`
  color: #fff;
  margin: 0px 4px 0px 10px;
`;

export const FlatList = styled.FlatList``;
export const Container = styled.View``;
