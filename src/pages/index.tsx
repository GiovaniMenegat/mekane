import Head from 'next/head'
import { Carousel } from '../components/Carousel'
import styles from './home.module.scss'
import brands from '../../mock/brands.json'
import { GetServerSideProps, GetStaticProps } from 'next'
import Prismic from '@prismicio/client'
import Client from '../../utils/prismicHelpers'

type Image = {
  slug: string;
  image: string;
}

interface ImagesApi {
  results: any;
}

interface ImagesProps {
  images: Image[]
}

export default function Home({ images }: ImagesProps) {
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
        <Carousel images={images} />

        <section className={styles.homeText}>
          <p>
            Mekane é uma empresa de comércio de pneus e rodas, serviços de manutenção em freios, suspensões e troca de óleo.
          </p>

          <img 
            src="/images/pneu.jpeg"
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

export const getServerSideProps: GetServerSideProps = async () => {
  const post: ImagesApi = await Client().query([
    Prismic.Predicates.at('document.type', 'banner')
  ], {
    fetch: ['banner.image'],
    pageSize: 100,
  });

  const images = post.results.map(image => {
    return {
      slug: image.uid,
      image: image.data.image.url,
    }
  })

  return {
    props: {
      images
    }
  }

}