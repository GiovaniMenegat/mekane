import styles from './styles.module.scss'

export function WhatsappWidget() {

    return (
        <div className={styles.container}>
            <a href="https://wa.me/555133199649" target="_blank" rel="noopener noreferrer">
                <img 
                    src="/images/whatsapp.png" 
                    alt="Whatsapp"
                    width={64} 
                    height={64}
                />
            </a>
        </div>
    );
}