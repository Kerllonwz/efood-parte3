import styled from 'styled-components'
import { colors } from '../../styles'

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 900;
`

export const Sidebar = styled.aside`
  position: fixed;
  right: 0;
  top: 0;
  z-index: 901;
  background-color: ${colors.cartDark};
  width: 100%;
  max-width: 360px;
  height: 100vh;
  overflow-y: auto;
  padding: 40px 16px 24px;
  display: flex;
  flex-direction: column;
`

export const Quantity = styled.p`
  color: ${colors.white};
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 16px;
`

export const Empty = styled.p`
  color: ${colors.white};
  font-size: 14px;
  font-weight: 700;
  padding: 24px 0;
`

export const ItemList = styled.ul`
  list-style: none;
  margin-bottom: 16px;
  flex: 1;
`

export const Item = styled.li`
  display: flex;
  gap: 12px;
  border-bottom: 1px solid #d9d9d9;
  padding: 8px 0;
`

export const ItemImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  flex-shrink: 0;
`

export const ItemInfo = styled.div`
  flex: 1;
  min-width: 0;
`

export const ItemName = styled.p`
  color: ${colors.white};
  font-size: 14px;
  font-weight: 700;
`

export const ItemTag = styled.span`
  display: inline-block;
  color: ${colors.white};
  border: 1px solid #d9d9d9;
  font-size: 11px;
  margin: 6px 0;
  padding: 2px 6px;
`

export const ItemPrice = styled.p`
  color: ${colors.white};
  font-size: 14px;
  font-weight: 700;
`

export const RemoveBtn = styled.button`
  background: none;
  border: none;
  color: ${colors.white};
  cursor: pointer;
  font-size: 18px;
  font-weight: 900;
  padding: 0;
  align-self: flex-start;
`

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${colors.white};
  font-size: 14px;
  font-weight: 700;
  margin: 16px 0;
`

export const CheckoutBtn = styled.button`
  background-color: ${colors.primary};
  border: none;
  color: ${colors.white};
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  padding: 12px;
  width: 100%;
  margin-bottom: 8px;
`

export const CloseBtn = styled.button`
  background: none;
  border: 1px solid ${colors.white};
  color: ${colors.white};
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  padding: 10px;
  width: 100%;
`
