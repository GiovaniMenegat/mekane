import Head from 'next/head'

import styles from './styles.module.scss'
import services from '../../../mock/services.json'

export default function Services() {
    return (
        <>
            <Head>
                <title>Meridian | Serviços</title>

                <meta name="description" content="" />
            </Head>
            <main>

                <div className={styles.servicesTitle}>
                    <h1>Serviços</h1>
                </div>

                <div className={styles.servicesList}>
                    {services.services.map(service =>
                        <div key={service.title}>
                            
                            <img src={service.image} alt={service.title} />

                            <section>
                                <h1>{service.title}</h1>
                                <p>
                                    {service.description}
                                </p>
                            </section>
                            
                            
                        </div>
                    )}
                </div>
                
            </main>
        </>
    );
}