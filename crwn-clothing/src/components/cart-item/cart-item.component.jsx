
import {CartItemContainer, CartItemDetails, CartItemDetail, CartItemImage} from './cart-item.styles';

const CartItem = ({cartItem}) => {
  const {name, imageUrl, price, quantity} = cartItem;
  return (
    <CartItemContainer>
      <CartItemImage src={imageUrl} alt={`${name}`} />
      <CartItemDetails>
        <CartItemDetail>{name}</CartItemDetail>
        <CartItemDetail>{quantity} x ${price}</CartItemDetail>
      </CartItemDetails>
    </CartItemContainer>
  )
}

export default CartItem;