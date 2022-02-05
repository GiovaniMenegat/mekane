import { ActiveLink } from '../ActiveLink';
import styles from './styles.module.scss'

export function Header() {
    
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <ActiveLink href="/">
                    <img src="/images/mekane/mekane-horizontal.png" alt="Mekane" />
                </ActiveLink>

                <nav>
                    <ActiveLink activeClassName={styles.active} href="/servicos" prefetch>
                        <a>Serviços</a>
                    </ActiveLink>
                    <ActiveLink activeClassName={styles.active} href="/produtos" prefetch>
                        <a>Produtos</a>
                    </ActiveLink>
                    <ActiveLink activeClassName={styles.active} href="/contato" prefetch>
                        <a>Contato</a>
                    </ActiveLink>
                </nav>
            </div>
        </header>
    );
}