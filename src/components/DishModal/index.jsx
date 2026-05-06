import { useDispatch } from 'react-redux'

import { addItem, openCart } from '../../store/cartSlice'
import { formatPrice } from '../../utils/api'
import { AddButton, CloseButton, Content, Description, Image, ModalBox, Overlay, Portion, Title } from './styles'

const DishModal = ({ dish, onClose }) => {
  const dispatch = useDispatch()

  if (!dish) return null

  const handleAddToCart = () => {
    dispatch(
      addItem({
        id: dish.id,
        image: dish.foto,
        name: dish.nome,
        price: dish.preco,
      }),
    )
    onClose()
    dispatch(openCart())
  }

  return (
    <Overlay onClick={onClose}>
      <ModalBox role="dialog" aria-modal="true" aria-labelledby="dish-modal-title" onClick={(event) => event.stopPropagation()}>
        <CloseButton type="button" aria-label="Fechar modal" onClick={onClose}>
          ×
        </CloseButton>
        <Image src={dish.foto} alt={dish.nome} />
        <Content>
          <Title id="dish-modal-title">{dish.nome}</Title>
          <Description>{dish.descricao}</Description>
          {dish.porcao && <Portion>Serve: {dish.porcao}</Portion>}
          <AddButton type="button" onClick={handleAddToCart}>
            Adicionar ao carrinho - {formatPrice(dish.preco)}
          </AddButton>
        </Content>
      </ModalBox>
    </Overlay>
  )
}

export default DishModal
