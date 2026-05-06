import { useDispatch, useSelector } from 'react-redux'

import logo from '../../assets/images/logo.png'
import { closeCart, openCart, selectCartCount, selectCartIsOpen } from '../../store/cartSlice'
import { BannerText, CartButton, HeaderBar, HomeContent, LogoImage, LogoLink, NavContent, NavText } from './styles'

const Header = ({ variant = 'home' }) => {
  const dispatch = useDispatch()
  const cartCount = useSelector(selectCartCount)
  const isCartOpen = useSelector(selectCartIsOpen)

  const handleCartClick = () => {
    dispatch(isCartOpen ? closeCart() : openCart())
  }

  return (
    <HeaderBar $variant={variant}>
      {variant === 'home' ? (
        <HomeContent className="container">
          <LogoLink to="/" aria-label="efood">
            <LogoImage src={logo} alt="efood" />
          </LogoLink>

          <BannerText>
            Viva experiências gastronômicas
            <br />
            no conforto da sua casa
          </BannerText>
        </HomeContent>
      ) : (
        <NavContent className="container">
          <NavText to="/">Restaurantes</NavText>
          <LogoLink to="/" aria-label="efood">
            <LogoImage src={logo} alt="efood" />
          </LogoLink>
          <CartButton type="button" onClick={handleCartClick}>
            {cartCount} produto(s) no carrinho
          </CartButton>
        </NavContent>
      )}
    </HeaderBar>
  )
}

export default Header
