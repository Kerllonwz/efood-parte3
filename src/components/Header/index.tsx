import { Link } from 'react-router-dom'
import { abrirCarrinho } from '../../store/cartSlice'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import * as S from './styles'

interface HeaderProps {
  variant?: 'hero' | 'simple'
}

const Header = ({ variant = 'hero' }: HeaderProps) => {
  const dispatch = useAppDispatch()
  const itemCount = useAppSelector((state) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0),
  )

  if (variant === 'hero') {
    return (
      <S.HeroHeader>
        <div className="container">
          <S.LogoWrapper>
            <img src="/logo.svg" alt="efood" />
          </S.LogoWrapper>
          <S.Tagline>
            Viva experiências gastronômicas no conforto da sua casa
          </S.Tagline>
        </div>
      </S.HeroHeader>
    )
  }

  return (
    <S.SimpleHeader>
      <div className="container">
        <S.Nav>
          <Link to="/">Restaurantes</Link>
          <S.LogoWrapper>
            <img src="/logo.svg" alt="efood" />
          </S.LogoWrapper>
          <S.CartButton type="button" onClick={() => dispatch(abrirCarrinho())}>
            {itemCount} produto{itemCount === 1 ? '' : 's'} no carrinho
          </S.CartButton>
        </S.Nav>
      </div>
    </S.SimpleHeader>
  )
}

export default Header
