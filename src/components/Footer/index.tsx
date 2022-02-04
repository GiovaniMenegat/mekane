import styles from './styles.module.scss'
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link';

export function Footer() {
    return (
        <footer className={styles.footerContainer}>
            <div className={styles.footerContent}>
                <img src="/images/mekane/mekane-circular.png" alt="Mekane" />

                <nav>
                    <Link href="/servicos">Serviços</Link>
                    <Link href="/produtos">Produtos</Link>
                    <Link href="/contato">Contato</Link>
                </nav>

                <div>
                    <h4>Atendimento</h4>
                    <h6>Seg. a Sex. 8h às 19h</h6>
                    <h6>Sáb. 8h às 16h</h6>

                    <a href="tel:555133199649">
                        <FontAwesomeIcon icon={faPhoneAlt} />
                        (51) 3319-9649
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
        </footer>
    );
}