import Head from 'next/head'

import styles from './styles.module.scss'
import brands from '../../../mock/brands.json'

export default function Products() {
    return (
    <>
            <Head>
                <title>Mekane Pneus | Produtos</title>

                <meta name="description" content="" />
            </Head>
            <main>

                <div className={styles.productsTitle}>
                    <h1>Produtos</h1>
                </div>

                <div className={styles.productsList}>
                    {brands.brands.map(brand =>

                        <div key={brand.name}>
                            <img src={brand.image} alt={brand.name} />

                            <p>{brand.description}</p>
                        </div>

                    )}
                </div>
            </main>
    </>
    );
}