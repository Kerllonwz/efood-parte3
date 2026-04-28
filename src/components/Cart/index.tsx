import { fecharCarrinho, removerItem } from '../../store/cartSlice'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import * as S from './styles'

interface Props {
  onContinue?: () => void
}

const Cart = ({ onContinue }: Props) => {
  const dispatch = useAppDispatch()
  const { items, isOpen } = useAppSelector((state) => state.cart)

  const total = items.reduce((acc, item) => acc + item.preco * item.quantity, 0)
  const formatPrice = (value: number) => value.toFixed(2).replace('.', ',')

  if (!isOpen) return null

  return (
    <S.Overlay onClick={() => dispatch(fecharCarrinho())}>
      <S.Sidebar onClick={(event) => event.stopPropagation()}>
        {items.length === 0 ? (
          <S.Empty>O carrinho esta vazio. Adicione itens para continuar.</S.Empty>
        ) : (
          <>
            <S.ItemList>
              {items.map((item) => (
                <S.Item key={item.id}>
                  <S.ItemImage src={item.foto} alt={item.nome} />
                  <S.ItemInfo>
                    <S.ItemName>{item.nome}</S.ItemName>
                    <S.ItemPrice>
                      R$ {formatPrice(item.preco)}
                      {item.quantity > 1 && ` x ${item.quantity}`}
                    </S.ItemPrice>
                  </S.ItemInfo>
                  <S.RemoveBtn onClick={() => dispatch(removerItem(item.id))}>
                    Remover
                  </S.RemoveBtn>
                </S.Item>
              ))}
            </S.ItemList>
            <S.Total>
              <span>Valor total</span>
              <span>R$ {formatPrice(total)}</span>
            </S.Total>
            <S.CheckoutBtn onClick={onContinue}>
              Continuar com a entrega
            </S.CheckoutBtn>
          </>
        )}
        <S.CloseBtn onClick={() => dispatch(fecharCarrinho())}>
          Fechar carrinho
        </S.CloseBtn>
      </S.Sidebar>
    </S.Overlay>
  )
}

export default Cart
