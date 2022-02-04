import Head from 'next/head'
import Prismic from '@prismicio/client'
import { Client } from '../../../utils/prismicHelpers'
import { asText } from '@prismicio/helpers'

import styles from './styles.module.scss'
import { GetStaticProps } from 'next';

type Service = {
    slug: string;
    title: string;
    image: string;
    excerpt: string;
}

interface ServicesProps {
    services: Service[]
}

export default function Services({ services }: ServicesProps) {
    return (
        <>
            <Head>
                <title>Mekane Pneus | Serviços</title>

                <meta name="description" content="" />
            </Head>
            <main>

                <div className={styles.servicesTitle}>
                    <h1>Serviços</h1>
                </div>

                <div className={styles.servicesList}>
                    
                    {services.map(service => (
                        <div key={service.title}>
                            
                            <img src={service.image} alt={service.title} />

                            <section>
                                <h1>{service.title}</h1>
                                <p>
                                    {service.excerpt}
                                </p>
                            </section>


                        </div>
                    ))}
                </div>
                
            </main>
        </>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const post = await Client().query([
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