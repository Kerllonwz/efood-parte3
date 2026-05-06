import { useDispatch, useSelector } from 'react-redux'

import {
  closeCart,
  removeItem,
  selectCartIsOpen,
  selectCartItems,
  selectCartTotal,
} from '../../store/cartSlice'
import { formatPrice } from '../../utils/api'
import {
  ActionButton,
  Drawer,
  EmptyMessage,
  Footer,
  Item,
  ItemImage,
  ItemInfo,
  ItemName,
  ItemPrice,
  ItemQuantity,
  Items,
  Overlay,
  RemoveButton,
  Title,
  Total,
  TotalLabel,
  TotalValue,
} from './styles'

const TrashIcon = () => (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 16 16">
    <path d="M6 2h4l1 1h3v2H2V3h3l1-1Z" />
    <path d="M4 6h10l-.7 8.2c-.1 1-1 1.8-2 1.8H6.7c-1 0-1.9-.8-2-1.8L4 6Zm3 2v6h1V8H7Zm3 0v6h1V8h-1Z" />
  </svg>
)

const CartDrawer = () => {
  const dispatch = useDispatch()
  const isOpen = useSelector(selectCartIsOpen)
  const items = useSelector(selectCartItems)
  const total = useSelector(selectCartTotal)

  if (!isOpen) return null

  return (
    <Overlay onClick={() => dispatch(closeCart())}>
      <Drawer role="dialog" aria-modal="true" aria-labelledby="cart-title" onClick={(event) => event.stopPropagation()}>
        <Title id="cart-title">Carrinho</Title>

        {items.length > 0 ? (
          <>
            <Items>
              {items.map((item) => (
                <Item key={item.id}>
                  <ItemImage src={item.image} alt={item.name} />
                  <ItemInfo>
                    <ItemName>{item.name}</ItemName>
                    <ItemPrice>{formatPrice(item.price)}</ItemPrice>
                    {item.quantity > 1 && <ItemQuantity>Quantidade: {item.quantity}</ItemQuantity>}
                  </ItemInfo>
                  <RemoveButton
                    type="button"
                    aria-label={`Remover ${item.name}`}
                    onClick={() => dispatch(removeItem(item.id))}
                  >
                    <TrashIcon />
                  </RemoveButton>
                </Item>
              ))}
            </Items>

            <Footer>
              <Total>
                <TotalLabel>Valor total</TotalLabel>
                <TotalValue>{formatPrice(total)}</TotalValue>
              </Total>
              <ActionButton type="button" onClick={() => dispatch(closeCart())}>
                Continuar com a entrega
              </ActionButton>
            </Footer>
          </>
        ) : (
          <EmptyMessage>Seu carrinho está vazio</EmptyMessage>
        )}
      </Drawer>
    </Overlay>
  )
}

export default CartDrawer
