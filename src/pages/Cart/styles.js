import styled from 'styled-components/native';
import colors from '../../style/colors';
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


  export const ListFinal = styled.View`
    margin-top: 30px;
  `;


  export const TextTotal = styled.Text`
    font-size: 16px;
    color: #999;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
  `;

  export const ButtonFinally = styled.TouchableOpacity`
    background: ${colors.primary};
    margin: 15px;
    padding: 15px;
    border-radius: 4px;
  `;

  export const ButtonFinallyText = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 14px;
    text-align: center;
  `;


  export const TotalInformation = styled.Text`
    font-size:30px;
    font-weight: bold;
    letter-spacing: -1.6px
    text-align: center;
    color:#000
  `;
  
