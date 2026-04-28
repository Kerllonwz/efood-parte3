import { abrirCarrinho, adicionarItem } from '../../store/cartSlice'
import { useAppDispatch } from '../../store/hooks'
import { MenuItem } from '../../types'
import * as S from './styles'

interface Props {
  item: MenuItem | null
  onClose: () => void
}

const ProductModal = ({ item, onClose }: Props) => {
  const dispatch = useAppDispatch()

  if (!item) return null

  const formatPrice = (price: number) => price.toFixed(2).replace('.', ',')

  const handleAdd = () => {
    dispatch(adicionarItem(item))
    dispatch(abrirCarrinho())
    onClose()
  }

  return (
    <S.Overlay onClick={onClose}>
      <S.Modal onClick={(event) => event.stopPropagation()}>
        <S.CloseButton onClick={onClose} aria-label="Fechar modal">
          x
        </S.CloseButton>
        <S.ProductImage src={item.foto} alt={item.nome} />
        <S.ProductInfo>
          <S.ProductTitle>{item.nome}</S.ProductTitle>
          <S.ProductDescription>{item.descricao}</S.ProductDescription>
          <S.ProductPortion>Porcao: {item.porcao}</S.ProductPortion>
          <S.AddButton onClick={handleAdd}>
            Adicionar ao carrinho - R$ {formatPrice(item.preco)}
          </S.AddButton>
        </S.ProductInfo>
      </S.Modal>
    </S.Overlay>
  )
}

export default ProductModal
