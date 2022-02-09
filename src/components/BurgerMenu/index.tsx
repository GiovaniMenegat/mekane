import { useState } from 'react';
import { ActiveLink } from '../ActiveLink';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './styles.module.scss'

export function BurgerMenu() {
    const [active, setActive] = useState(false);

    return (
        <div className={styles.burgerMenuContent}>
            <div onClick={() => setActive(!active)}>
                {active ?
                    <FontAwesomeIcon icon={faTimes} /> :
                    <FontAwesomeIcon icon={faBars} />
                }

                {active ?
                    <section>
                        <ActiveLink
                            activeClassName={styles.active}
                            href="/servicos"
                        >
                            <a
                                onClick={() => setActive(!active)}
                            >
                                Serviços
                            </a>
                        </ActiveLink>
                        <ActiveLink
                            activeClassName={styles.active}
                            href="/produtos"
                        >
                            <a
                                onClick={() => setActive(!active)}
                            >
                                Produtos
                            </a>
                        </ActiveLink>
                        <ActiveLink
                            activeClassName={styles.active}
                            href="/contato"
                        >
                            <a
                                onClick={() => setActive(!active)}
                            >
                                Contato
                            </a>
                        </ActiveLink>
                    </section> :
                    null
                }
            </div>

            
            
        </div>
    );
}