import Head from 'next/head'

import styles from './styles.module.scss'

export default function Contact() {
    return (
        <>
            <Head>
                <title>Mekane Pneus | Contato</title>

                <meta property="og:title" content="Mekane Pneus | Contato | Porto Alegre - RS" />
                <meta name="description" content="A melhor autocenter de Porto Alegre. Trabalhamos com serviços gerais, como troca de óleo, troca de pneus, geometria, balanceamento entre outros. Venha conhecer!" />

                <meta property="og:description" content="A melhor autocenter de Porto Alegre. Trabalhamos com serviços gerais, como troca de óleo, troca de pneus, geometria, balanceamento entre outros. Venha conhecer!" />

                <link rel="canonical" href="https://www.mekanepneus.com.br/contato" />
                <meta property="og:url" content="https://www.mekanepneus.com.br/contato" />
                <meta property="og:site_name" content="mekanepneus" />
                <meta property="og:type" content="website" />
            </Head>
            <main>

                <div className={styles.contactTitle}>
                    <h1>Contato</h1>
                </div>

                <form action="" className={styles.contactForm}>

                    <h1>Entre em contato!</h1>
                    
                    <label htmlFor="name">Nome</label>
                    <input type="text" id="name" />

                    <label htmlFor="email">E-mail</label>
                    <input type="text" id="email" />

                    <label htmlFor="phone">Telefone</label>
                    <input type="text" id="phone" />

                    <label htmlFor="message"></label>
                    <textarea id="message" cols="30" rows="10"></textarea>

                    <button type="submit">
                        Enviar
                    </button>

                </form>

                <div className={styles.contactMap}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1452.1632443016622!2d-51.15120620839123!3d-30.04128357649463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951977eb7cd52019%3A0x9d221acfd6c3a498!2sCrestani%20Pneus%20e%20Rodas%20Prot%C3%A1sio!5e0!3m2!1spt-BR!2sbr!4v1641583738871!5m2!1spt-BR!2sbr" width="90%" height="450" allowFullScreen="" loading="lazy"></iframe>
                </div>

            </main>
        </>
    );
}