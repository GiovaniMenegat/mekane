import Head from 'next/head'
import { Carousel } from '../components/Carousel'
import styles from './home.module.scss'
import brands from '../../mock/brands.json'
import Image from 'next/image'
import pneu from '../../public/images/pneu.jpeg'

export default function Home() {
  return (
    <>
      <Head>
          <title>Mekane Pneus</title>

          <meta property="og:title" content="Mekane Pneus | Porto Alegre - RS" />
          <meta name="description" content="A melhor autocenter de Porto Alegre. Trabalhamos com serviços gerais, como troca de óleo, troca de pneus, geometria, balanceamento entre outros. Venha conhecer!" />
          
          <meta property="og:description" content="A melhor autocenter de Porto Alegre. Trabalhamos com serviços gerais, como troca de óleo, troca de pneus, geometria, balanceamento entre outros. Venha conhecer!" />

          <link rel="canonical" href="https://www.mekanepneus.com.br" />
          <meta property="og:url" content="https://www.mekanepneus.com.br" />
          <meta property="og:site_name" content="mekanepneus" />
          <meta property="og:type" content="website" />
      </Head>
      <main>
        <Carousel />

        <section className={styles.homeText}>
          <p>
            Mekane é uma loja de peças e serviços automotivos de Porto Alegre. 
          </p>

          <Image 
            src={pneu} 
            alt="Pneu" 
          />
        </section>

        <section className={styles.homeBrands}>
          {brands.brands.map(brand => 

            <div key={brand.name}>
              <img src={brand.image} alt={brand.name} />
            </div>

          )}
        </section>
      </main>
    </>
  )
}
