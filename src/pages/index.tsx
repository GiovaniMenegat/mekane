import Head from 'next/head'

import { Carousel } from '../components/Carousel'

import styles from './home.module.scss'
import brands from '../../mock/brands.json'

export default function Home() {
  return (
    <>
      <Head>
          <title>Mekane Pneus</title>

          <meta name="description" content="" />
      </Head>
      <main>
        <Carousel />

        <section className={styles.homeText}>
          <p>
            Mekane é uma loja de peças e serviços automotivos de Porto Alegre. 
          </p>

          <img src="/images/pneu.jpeg" alt="Pneu" />
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
