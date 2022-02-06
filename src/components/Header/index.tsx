import { ActiveLink } from '../ActiveLink';
import styles from './styles.module.scss'

import { BurgerMenu } from '../BurgerMenu';

export function Header() {
    
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <ActiveLink href="/">
                    <img 
                        src="/images/mekane/mekane-horizontal.png" 
                        alt="Mekane" 
                    />
                </ActiveLink>

                <BurgerMenu />
                
                <nav>
                    <ActiveLink activeClassName={styles.active} href="/servicos">
                        <a>Serviços</a>
                    </ActiveLink>
                    <ActiveLink activeClassName={styles.active} href="/produtos">
                        <a>Produtos</a>
                    </ActiveLink>
                    <ActiveLink activeClassName={styles.active} href="/contato">
                        <a>Contato</a>
                    </ActiveLink>
                </nav>
            </div>
        </header>
    );
}