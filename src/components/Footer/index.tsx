import styles from './styles.module.scss'
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link';

export function Footer() {
    return (
        <footer className={styles.footerContainer}>
            <div className={styles.footerContent}>
                <img 
                    src="/images/mekane/mekane-circular.png" 
                    alt="Mekane" 
                />

                <nav>
                    <Link href="/servicos">Serviços</Link>
                    <Link href="/produtos">Produtos</Link>
                    <Link href="/contato">Contato</Link>
                </nav>

                <div>
                    <h2>Nossa loja</h2>

                    <a 
                        href="https://goo.gl/maps/rtWoiHquWbXSrQGR8" 
                        className={styles.address}
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        Av Protásio Alves, 6180 - Alto Petrópolis
                    </a>

                    <h3>
                        Seg. a Sex. 8h às 19h <br />
                        Sáb. 8h às 16h
                    </h3>

                    <a href="tel:555130699836">
                        <FontAwesomeIcon icon={faPhoneAlt} />
                        (51) 3069-9836
                    </a>
                    <a href="mailto:contato@mekanepneus.com.br">
                        <FontAwesomeIcon icon={faEnvelope} />
                        contato@mekanepneus.com.br
                    </a>
                    <a href="https://www.instagram.com/mekane_pneus" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} />
                        @mekane_pneus
                    </a>
                </div>
            </div>
            <div className={styles.footerCnpj}>
                <p>44.770.801/0001-01</p>
            </div>
        </footer>
    );
}