import styles from './styles.module.scss'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link';

export function Footer() {
    return (
        <footer className={styles.footerContainer}>
            <div className={styles.footerContent}>
                <img src="/images/pneu.jpeg" alt="Meridian" />

                <nav>
                    <Link href="/servicos">Serviços</Link>
                    <Link href="/produtos">Produtos</Link>
                    <Link href="/contato">Contato</Link>
                </nav>

                <div>
                    <h4>Atendimento</h4>
                    <h6>Seg. a Sex. 8h às 18h</h6>

                    <a href="tel:5551985219440">
                        <FontAwesomeIcon icon={faPhoneAlt} />
                        (51)98521-9440
                    </a>
                    <a href="http://https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} />
                        @meridian
                    </a>
                </div>
            </div>
        </footer>
    );
}