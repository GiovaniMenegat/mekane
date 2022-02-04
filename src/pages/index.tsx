import Head from 'next/head'

import { Carousel } from '../components/Carousel'

import styles from './home.module.scss'
import brands from '../../mock/brands.json'

export default function Home() {
  console.log(brands);
  
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
            enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
            reprehenderit in voluptate velit esse cillum dolore eu fugiat 
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
            sunt in culpa qui officia deserunt mollit anim id est laborum.
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
