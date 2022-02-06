import Head from 'next/head'
import Prismic from '@prismicio/client'
import { Client } from '../../../utils/prismicHelpers'
import { asText } from '@prismicio/helpers'

import styles from './styles.module.scss'
import { GetStaticProps } from 'next';
import Link from 'next/link'

type Service = {
    slug: string;
    title: string;
    image: string;
    excerpt: string;
}

interface ServiceApi {
    results: any;
}

interface ServicesProps {
    services: Service[]
}

export default function Services({ services }: ServicesProps) {
    return (
        <>
            <Head>
                <title>Mekane Pneus | Serviços</title>

                <meta property="og:title" content="Mekane Pneus | Serviços | Porto Alegre - RS" />
                <meta name="description" content="A melhor autocenter de Porto Alegre. Trabalhamos com serviços gerais, como troca de óleo, troca de pneus, geometria, balanceamento entre outros. Venha conhecer!" />

                <meta property="og:description" content="A melhor autocenter de Porto Alegre. Trabalhamos com serviços gerais, como troca de óleo, troca de pneus, geometria, balanceamento entre outros. Venha conhecer!" />

                <link rel="canonical" href="https://www.mekanepneus.com.br/servicos" />
                <meta property="og:url" content="https://www.mekanepneus.com.br/servicos" />
                <meta property="og:site_name" content="mekanepneus" />
                <meta property="og:type" content="website" />
            </Head>
            <main>

                <div className={styles.servicesTitle}>
                    <h1>Serviços</h1>
                </div>

                <div className={styles.servicesList}>
                    {services.map(service => (
                        <Link 
                            key={service.title}
                            href={`/servicos/${service.slug}`}
                        >
                            <div>
                                <img src={service.image} alt={service.title} />

                                <section>
                                    <h2>{service.title}</h2>
                                    <p>
                                        {service.excerpt}
                                    </p>
                                </section>
                            </div>
                        </Link>
                    ))}
                </div>
                
            </main>
        </>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const post: ServiceApi = await Client().query([
        Prismic.Predicates.at('document.type', 'service')
    ], {
        fetch: ['service.title', 'service.content', 'service.image'],
        pageSize: 100,
    });
  
    const services = post.results.map(service => {
        return {
            slug: service.uid,
            title: asText(service.data.title),
            image: service.data.image.url,
            excerpt: service.data.content.find(content => content.type === 'paragraph').text ?? '',
        }
    })

    return {
        props: {
            services
        }
    }

}