'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './page.module.css';
import Image from 'next/image';
import logo from '../app/assets/logo.png'


import { Cinzel } from 'next/font/google';
const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function Home() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // VALIDAÇÃO FIXA
    if (email === 'admin@gmail.com' && senha === '1234') {
      router.push('/apresentacao');
    } else {
      setErro('E-mail ou senha inválidos!');
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <Image src={logo} alt="Logo" />
        </div>
        <div className={`${styles.title} ${cinzel.className}`}>
          GRAND CLUB <br />
          BLUE ROMA
        </div>
      </div>

      <div className={styles.right}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="email"
            placeholder="Digite seu E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
            required
          />
          <input
            type="password"
            placeholder="Digite sua Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className={styles.input}
            required
          />
          <button type="submit" className={styles.button}>
            Entrar
          </button>
          {erro && <p className={styles.erro}>{erro}</p>}
        </form>
      </div>
    </div>
  );
}
