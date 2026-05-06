import styled from 'styled-components'

export const Overlay = styled.div`
  background-color: var(--dark-overlay);
  inset: 0;
  position: fixed;
  z-index: 20;
`

export const Drawer = styled.aside`
  background-color: var(--red);
  color: var(--beige);
  height: 100vh;
  margin-left: auto;
  padding: 32px 8px;
  width: 360px;
`

export const Title = styled.h2`
  color: var(--beige);
  font-size: 16px;
  font-weight: 900;
  line-height: 19px;
  margin-bottom: 16px;
`

export const Items = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  list-style: none;
`

export const Item = styled.li`
  background-color: var(--beige);
  color: var(--red);
  display: grid;
  gap: 8px;
  grid-template-columns: 80px 1fr 18px;
  min-height: 100px;
  padding: 8px;
`

export const ItemImage = styled.img`
  height: 80px;
  object-fit: cover;
  width: 80px;
`

export const ItemInfo = styled.div`
  min-width: 0;
`

export const ItemName = styled.h3`
  color: var(--red);
  font-size: 18px;
  font-weight: 900;
  line-height: 21px;
`

export const ItemPrice = styled.p`
  color: var(--red);
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  margin-top: 16px;
`

export const ItemQuantity = styled.p`
  color: var(--red);
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
`

export const RemoveButton = styled.button`
  align-self: end;
  background: transparent;
  border: 0;
  color: var(--red);
  height: 18px;
  width: 18px;

  svg {
    display: block;
    fill: currentColor;
    height: 18px;
    width: 18px;
  }
`

export const Footer = styled.div`
  margin-top: 40px;
`

export const Total = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`

export const TotalLabel = styled.span`
  color: var(--beige);
  font-size: 14px;
  font-weight: 900;
  line-height: 16px;
`

export const TotalValue = styled.span`
  color: var(--beige);
  font-size: 14px;
  font-weight: 900;
  line-height: 16px;
`

export const ActionButton = styled.button`
  background-color: var(--beige);
  border: 0;
  color: var(--red);
  font-size: 14px;
  font-weight: 900;
  height: 24px;
  line-height: 16px;
  width: 100%;
`

export const EmptyMessage = styled.p`
  color: var(--beige);
  font-size: 14px;
  font-weight: 900;
  line-height: 22px;
`
