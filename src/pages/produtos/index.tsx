import Head from 'next/head'

import styles from './styles.module.scss'
import brands from '../../../mock/brands.json'

export default function Products() {
    return (
    <>
            <Head>
                <title>Mekane Pneus | Produtos</title>

                <meta property="og:title" content="Mekane Pneus | Produtos | Porto Alegre - RS" />
                <meta name="description" content="A melhor autocenter de Porto Alegre. Trabalhamos com serviços gerais, como troca de óleo, troca de pneus, geometria, balanceamento entre outros. Venha conhecer!" />

                <meta property="og:description" content="A melhor autocenter de Porto Alegre. Trabalhamos com serviços gerais, como troca de óleo, troca de pneus, geometria, balanceamento entre outros. Venha conhecer!" />

                <link rel="canonical" href="https://www.mekanepneus.com.br/produtos" />
                <meta property="og:url" content="https://www.mekanepneus.com.br/produtos" />
                <meta property="og:site_name" content="mekanepneus" />
                <meta property="og:type" content="website" />
            </Head>
            <main>

                <div className={styles.productsTitle}>
                    <h1>Produtos</h1>
                </div>

                <div className={styles.productsList}>
                    {brands.brands.map(brand =>

                        <div key={brand.name}>
                            <img 
                                src={brand.image} 
                                alt={brand.name}
                            />

                            <p>{brand.description}</p>
                        </div>

                    )}
                </div>
            </main>
    </>
    );
}