import { useRouter } from 'next/router'

import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '../../styles/pages/product'

export default function Product() {
  const { query } = useRouter()

  return (
    <ProductContainer>
      <ImageContainer />

      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          facere similique rem sunt assumenda perferendis, voluptatum, molestias
          error animi, earum reiciendis pariatur porro tempora maiores rerum
          eveniet? Dolores, et accusantium.
        </p>

        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  )
}
