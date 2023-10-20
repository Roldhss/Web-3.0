import img1 from '../assets/images/image-retro-pcs.jpg'
import img2 from '../assets/images/image-top-laptops.jpg'
import img3 from '../assets/images/image-gaming-growth.jpg'

import { Article } from "./Article"

export const ArticleContainer = () => {
  return (
    <section className="mt-6 md:flex md:flex-wrap">
        <Article 
            img={img1}
            number='01'
            title= 'Bots de trading'
            text= 'Compra y vende cryptos de manera automática'
        />
        <Article 
            img={img2}
            number='02'
            title= 'Se parte del metaverso'
            text= 'Únete a la revolución y sé parte de este nuevo mundo.'
        />
        <Article 
            img={img3}
            number='03'
            title= 'Juegos NFT'
            text= 'Play to earn: El despertar de Axie Infinity'
        />
    </section>
  )
}
