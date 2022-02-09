import Head from 'next/head'
import emailjs from '@emailjs/browser';
import InputMask from "react-input-mask";
import * as yup from 'yup';

import styles from './styles.module.scss'
import { useRef, useState } from 'react';

export default function Contact() {
    const [loading, setLoading] = useState(false);
    const [formError, setFormError] = useState(false);
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [emailInvalidError, setEmailInvalidError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const form = useRef();

    const contactSchema = yup.object().shape({
        name: yup.string().required(() => setNameError(true)),
        email: yup
            .string()
            .email(() => setEmailInvalidError(true))
            .required(() => setEmailError(true)),
        phone: yup.string().required(() => setPhoneError(true))
    });

    const sendEmail = async (e) => {
        e.preventDefault();
        setLoading(true);

        const contactForm = {
            name: name,
            email: email,
            phone: phone           
        }
        const isValid = await contactSchema.isValid(contactForm);

        if (isValid) {
            setNameError(false);
            setEmailInvalidError(false);
            setEmailError(false);
            setPhoneError(false);
            setFormError(false);

            emailjs.sendForm(process.env.EMAILJS_CONTACT, process.env.EMAILJS_TEMPLATE, form.current, process.env.EMAILJS_TOKEN)
                .then((result) => {
                    setLoading(false);
                }, (error) => {
                    setLoading(false);
                });
        } else {
            setLoading(false);
            setFormError(true);
        }
    };

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

                <form ref={form} onSubmit={sendEmail} className={styles.contactForm}>

                    <h1>Entre em contato!</h1>
                    
                    <label htmlFor="name">Nome</label>
                    <input 
                        type="text" 
                        name="user_name"
                        className={nameError ? styles.borderError : ''}
                        onChange={e => setName(e.target.value)}
                    />
                    {nameError ?
                        <p>O nome é obrigatório.</p> :
                        null
                    }

                    <label htmlFor="email">E-mail</label>
                    <input 
                        type="text" 
                        name="user_email"
                        className={emailInvalidError || emailError ? styles.borderError : ''}
                        onChange={e => setEmail(e.target.value)}
                    />
                    {emailInvalidError ?
                        <p>Por favor, digite um e-mail válido.</p> :
                        null
                    }
                    {emailError ?
                        <p>O e-mail é obrigatório.</p> :
                        null
                    }

                    <label htmlFor="phone">Telefone</label>
                    <InputMask 
                        mask="(99) 99999-9999"
                        type="text" 
                        name="user_phone"
                        className={phoneError ? styles.borderError : ''}
                        onChange={e => setPhone(e.target.value)}
                    />
                    {phoneError ?
                        <p>O telefone é obrigatório.</p> :
                        null
                    }

                    <label htmlFor="message"></label>
                    <textarea name="user_message" cols={30} rows={10}></textarea>

                    {formError ?
                        <p>Por favor, revise os campos.</p> :
                        null
                    }

                    <button 
                        type="submit" 
                        value="Send"
                        className={loading ? styles.buttonDisabled : ''}
                        disabled={loading}
                    >
                        {loading ? 'Aguarde...' : 'Enviar'}
                    </button>

                </form>

                <div className={styles.contactMap}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1452.1632443016622!2d-51.15120620839123!3d-30.04128357649463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951977eb7cd52019%3A0x9d221acfd6c3a498!2sCrestani%20Pneus%20e%20Rodas%20Prot%C3%A1sio!5e0!3m2!1spt-BR!2sbr!4v1641583738871!5m2!1spt-BR!2sbr" width="90%" height="450" allowFullScreen loading="lazy"></iframe>
                </div>

            </main>
        </>
    );
}