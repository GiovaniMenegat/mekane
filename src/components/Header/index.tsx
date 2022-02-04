import Link from 'next/link';
import { useRouter } from "next/router";
import styles from './styles.module.scss'

export function Header() {

    const router = useRouter();
    
    
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Link href="/">
                    <img src="/images/mekane/mekane-horizontal.png" alt="Mekane" />
                </Link>

                <nav>
                    <Link href="/servicos">
                        <a className={router.pathname == "/servicos" ? styles.active : ""}>Serviços</a>
                    </Link>
                    <Link href="/produtos">
                        <a className={router.pathname == "/produtos" ? styles.active : ""}>Produtos</a>
                    </Link>
                    <Link href="/contato">
                        <a className={router.pathname == "/contato" ? styles.active : ""}>Contato</a>
                    </Link>
                </nav>
            </div>
        </header>
    );
}