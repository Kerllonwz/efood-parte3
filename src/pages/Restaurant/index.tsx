import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Cart from '../../components/Cart'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import MenuList from '../../components/MenuList'
import ProductModal from '../../components/ProductModal'
import { fecharCarrinho } from '../../store/cartSlice'
import { useAppDispatch } from '../../store/hooks'
import { fetchRestaurantById } from '../../services/api'
import { MenuItem, Restaurant } from '../../types'
import * as S from './styles'

const RestaurantPage = () => {
  const { id } = useParams<{ id: string }>()
  const dispatch = useAppDispatch()
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null)
  const [loading, setLoading] = useState(true)
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null)

  useEffect(() => {
    fetchRestaurantById(Number(id))
      .then((data) => setRestaurant(data ?? null))
      .catch(() => setRestaurant(null))
      .finally(() => setLoading(false))
  }, [id])

  if (loading) {
    return (
      <>
        <Header variant="simple" />
        <div className="container">
          <p style={{ textAlign: 'center', padding: '80px 0', color: '#E66767' }}>
            Carregando cardapio...
          </p>
        </div>
        <Footer />
      </>
    )
  }

  if (!restaurant) {
    return (
      <>
        <Header variant="simple" />
        <div className="container">
          <p style={{ textAlign: 'center', padding: '80px 0', color: '#E66767' }}>
            Restaurante nao encontrado.
          </p>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header variant="simple" />
      <S.Banner style={{ backgroundImage: `url(${restaurant.capa})` }}>
        <S.BannerContent>
          <S.Category>{restaurant.tipo}</S.Category>
          <S.Name>{restaurant.titulo}</S.Name>
        </S.BannerContent>
      </S.Banner>
      <div className="container">
        <MenuList
          items={restaurant.cardapio}
          onItemClick={(item) => setSelectedItem(item)}
        />
      </div>
      <Footer />
      <Cart onContinue={() => dispatch(fecharCarrinho())} />
      <ProductModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </>
  )
}

export default RestaurantPage
