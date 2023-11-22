import { CartIconContainer, ShoppingIconImg, ItemCount } from './cart-icon.styles';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import './cart-icon.styles';


const CartIcon = () => {
  const {isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  
  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIconImg className='shopping-icon'  />
      <ItemCount className='item-count'>{cartCount}</ItemCount>
    </CartIconContainer>
  )
};

export default CartIcon;