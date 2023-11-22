import {CheckoutItemContainer, CheckoutImageContainer, CheckoutImage,
CheckoutDetail, CheckoutQuantity, CheckoutQuantityArrow, CheckoutQuantityValue,
CheckoutRemoveButton} from './checkout-item.styles.jsx';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const CheckoutItem = ({cartItem}) => {
  const {name, imageUrl, price, quantity} = cartItem;
  const {clearItemFromCart,  addItemToCart, removeItemFromCart} = useContext(CartContext);

  const clearItemHandler = () => clearItemFromCart(cartItem);

  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem);

  return (
    <CheckoutItemContainer>
      <CheckoutImageContainer>
        <CheckoutImage src={imageUrl} alt={`${name}`}/>
      </CheckoutImageContainer>
      <CheckoutDetail>{name}</CheckoutDetail>
      <CheckoutQuantity>
        <CheckoutQuantityArrow onClick={removeItemHandler}>
          &#10094;
        </CheckoutQuantityArrow>
        <CheckoutQuantityValue>{quantity}</CheckoutQuantityValue>
        <CheckoutQuantityArrow onClick={addItemHandler}>
          &#10095;
        </CheckoutQuantityArrow>
        </CheckoutQuantity>
        
      <CheckoutDetail>${price}</CheckoutDetail>
      <CheckoutRemoveButton onClick={clearItemHandler}>&#10005;</CheckoutRemoveButton>
    </CheckoutItemContainer>
  )
}


export default CheckoutItem;
