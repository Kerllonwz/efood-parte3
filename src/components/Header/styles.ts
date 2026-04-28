import styled from 'styled-components'
import { colors } from '../../styles'

export const HeroHeader = styled.header`
  background-color: ${colors.cream};
  padding: 64px 0 72px;
  text-align: center;
`

export const SimpleHeader = styled.header`
  background-color: ${colors.cream};
`

export const LogoWrapper = styled.div`
  display: inline-block;

  img {
    display: block;
    height: 40px;
    width: auto;
  }
`

export const Tagline = styled.p`
  font-size: 36px;
  font-weight: 900;
  color: ${colors.primary};
  max-width: 540px;
  margin: 40px auto 0;
  line-height: 1.3;
`

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0;

  a {
    font-size: 18px;
    font-weight: 900;
    color: ${colors.primary};
    text-decoration: none;
  }
`

export const CartButton = styled.button`
  background: none;
  border: none;
  color: ${colors.primary};
  cursor: pointer;
  font-size: 18px;
  font-weight: 900;
  padding: 0;
`
