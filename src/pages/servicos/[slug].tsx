import Head from 'next/head'
import { asHTML, asText } from "@prismicio/helpers";
import { GetServerSideProps } from "next"
import { Client } from '../../../utils/prismicHelpers';

import styles from './service.module.scss'

interface ServiceProps {
    service: {
        slug: string;
        title: string;
        content: string;
    }
}

interface ServiceApi {
    data: any;
}

export default function Service({ service }: ServiceProps) {
    return (
        <>
            <Head>
                <title>Mekane Pneus | {service.title}</title>

                <meta name="description" content="" />
            </Head>

            <main>
                <article className={styles.service}>
                    <h1>{service.title}</h1>

                    <div
                        dangerouslySetInnerHTML={{ __html: service.content }}
                        className={styles.serviceContent}
                    />
                </article>
            </main>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const { slug } = params;

    const document: ServiceApi = await Client().getByUID('service', String(slug), {});

    const service = {
        slug,
        title: asText(document.data.title),
        content: asHTML(document.data.content),
    }

    return {
        props: {
            service,
        }
    }
}