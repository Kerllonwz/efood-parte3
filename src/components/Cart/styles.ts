import styled from 'styled-components'
import { colors } from '../../styles'

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 900;
  display: flex;
  justify-content: flex-end;
`

export const Sidebar = styled.aside`
  background-color: ${colors.primary};
  width: 360px;
  max-width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 32px 8px;
  display: flex;
  flex-direction: column;
`

export const Empty = styled.p`
  color: ${colors.cream};
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  padding: 32px 16px;
`

export const ItemList = styled.ul`
  list-style: none;
  margin-bottom: 16px;
  flex: 1;
`

export const Item = styled.li`
  background-color: ${colors.cream};
  display: grid;
  grid-template-columns: 80px 1fr 48px;
  gap: 8px;
  margin-bottom: 16px;
  padding: 8px;
`

export const ItemImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
`

export const ItemInfo = styled.div`
  min-width: 0;
`

export const ItemName = styled.p`
  color: ${colors.primary};
  font-size: 18px;
  font-weight: 900;
  line-height: 1.2;
`

export const ItemPrice = styled.p`
  color: ${colors.primary};
  font-size: 14px;
  font-weight: 700;
  margin-top: 12px;
`

export const RemoveBtn = styled.button`
  align-self: end;
  background: none;
  border: none;
  color: ${colors.primary};
  cursor: pointer;
  font-size: 12px;
  font-weight: 700;
  padding: 0;
  text-decoration: underline;
`

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${colors.cream};
  font-size: 14px;
  font-weight: 700;
  margin: 16px 0;
`

export const CheckoutBtn = styled.button`
  background-color: ${colors.cream};
  color: ${colors.primary};
  font-size: 14px;
  font-weight: 700;
  padding: 12px;
  border: none;
  cursor: pointer;
  width: 100%;
  margin-bottom: 8px;

  &:hover {
    background-color: ${colors.white};
  }
`

export const CloseBtn = styled.button`
  background: none;
  border: 2px solid ${colors.cream};
  color: ${colors.cream};
  font-size: 14px;
  font-weight: 700;
  padding: 10px;
  cursor: pointer;
  width: 100%;
`
