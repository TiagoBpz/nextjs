"use client";

import styles from './page.module.css';
import { useState, useEffect } from 'react';
import objetivoImg from '../assets/objetivo.png';
import cuidadoImg from '../assets/valor.png';
import localizacaoImg from '../assets/loc.png';
import logo from '../assets/logo.png';
import user from '../assets/user.png';
import Image from 'next/image';
import { Cinzel } from 'next/font/google';
import insta from '../assets/instagram.png';
import face from '../assets/facebook.png';
import zap from '../assets/whatsapp.png';

const imagensCarrossel = [
  '/c1/carrossel1.png',
  '/c1/carrossel2.png',
  '/c1/carrossel3.png',
];


const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '700'],
});


export default function Home() {
  const [indexAtual, setIndexAtual] = useState(0);
  const [botaoAtivo, setBotaoAtivo] = useState<string | null>(null);

  const conteudos = {
    missao: 'Oferecer cuidado humanizado e acolhimento seguro para que os idosos vivam com qualidade, autonomia e bem-estar.',
    valores: 'Empatia, respeito, dedicação, responsabilidade e amor ao próximo.',
    filosofia: 'Baseado na dignidade, liberdade e valorização da história de vida de cada residente.',
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndexAtual((prevIndex) => (prevIndex + 1) % imagensCarrossel.length);
    }, 3000); // troca a cada 3 segundos
    return () => clearInterval(interval);
  }, []);


  return (
    <main className={styles.container}>
      {/* Navbar */}
      <nav className={styles.navbar}>
        <div>
          <Image src={logo} alt='logo' className={styles.navbarIcon} />
        </div>
        <div>
          <Image src={user} alt='user' className={styles.navbarIcon} />
        </div>
      </nav>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div
          className={styles.heroBackground}
          style={{
            backgroundImage: `url(${imagensCarrossel[indexAtual]})`,
          }}
        >
          <div className={styles.heroOverlay}>
            <div className={styles.heroText}>
              <p>
              Grand Club Florença é uma empresa especializada no cuidado e bem-estar de idosos, fundada em 14 de março de 2023. Desde sua criação,
               a instituição tem como missão oferecer um ambiente seguro, acolhedor e humanizado para a terceira idade, priorizando a qualidade de vida,
                a autonomia e o respeito à individualidade de cada residente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ícones com Botões */}

      <section className={styles.section}>
        <div className={styles.buttonGroup}>
          <button
            className={`${styles.iconButton} ${cinzel.className} ${botaoAtivo === 'missao' ? styles.ativo : ''}`}
            onClick={() => setBotaoAtivo(botaoAtivo === 'missao' ? null : 'missao')}
          >
           {botaoAtivo === null && <Image src={objetivoImg} alt='Objetivo' className={styles.iconImage} />}
           {botaoAtivo === 'missao' && <Image src={objetivoImg} alt='Objetivo' className={styles.iconAtivo} />}
            <span className={styles.buttonLabel}>MISSÃO</span>
            {botaoAtivo === 'missao' && (
              <p className={styles.buttonText}>{conteudos.missao}</p>
            )}
          </button>

          <button
            className={`${styles.iconButton} ${cinzel.className} ${botaoAtivo === 'valores' ? styles.ativo : ''}`}
            onClick={() => setBotaoAtivo(botaoAtivo === 'valores' ? null : 'valores')}
          >

            {botaoAtivo === null && <Image src={cuidadoImg} alt='Cuidado' className={styles.iconImage} />}
            {botaoAtivo === 'valores' && <Image src={cuidadoImg} alt='Cuidado' className={styles.iconAtivo}/>}
            <span className={styles.buttonLabel}>VALORES</span>
            {botaoAtivo === 'valores' && (
              <p className={styles.buttonText}>{conteudos.valores}</p>
            )}
          </button>

          <button
            className={`${styles.iconButton} ${cinzel.className} ${botaoAtivo === 'filosofia' ? styles.ativo : ''}`}
            onClick={() => setBotaoAtivo(botaoAtivo === 'filosofia' ? null : 'filosofia')}
          >
            
           {botaoAtivo === null && <Image src={localizacaoImg} alt='Filosofia' className={styles.iconImage} />}
           {botaoAtivo === 'filosofia' && <Image src={localizacaoImg} alt='Filosofia' className={styles.iconAtivo}/>}
            <span className={styles.buttonLabel}>FILOSOFIA</span>
            {botaoAtivo === 'filosofia' && (
              <p className={styles.buttonText}>{conteudos.filosofia}</p>
            )}
          </button>
        </div>
        <div className={styles.colaboradores}>

        <h2>CONHEÇA NOSSOS COLABORADORES</h2>
        <div className={styles.names}>
          <div className={styles.person}>
            <Image src={user} alt='user' className={styles.iconImage} />
            Gelson Assis Pinto</div>
          <div className={styles.person}>
            <Image src={user} alt='user' className={styles.iconImage} />
            Larissa Tosati</div>
          <div className={styles.person}>
            <Image src={user} alt='user' className={styles.iconImage} />
            Jair Messiano</div>
        </div>
        </div>
      </section>


      

      {/* Footer */}
      <footer className={`${styles.footer} ${cinzel.className}`}>
        <div className={styles.footerLeft}>
          <Image src={logo} alt="logo" className={styles.footerLogoImage} />
        </div>

        <div className={styles.footerCenter}>
          <strong>GRAND CLUB<br />BLUE ROMA</strong>
          <p>
            Telefone:{" "}
            <a href="https://wa.me/5541998503482" target="_blank" rel="noopener noreferrer">
              (41) 99850-3482
            </a>
          </p>
          <p>
            Email:{" "}
            <a href="mailto:scarpincontabil@gmail.com">
              scarpincontabil@gmail.com
            </a>
          </p>
          <p>Endereço: Rua Luiz Boza, 432 - Butiatuvinha, Curitiba/PR</p>
        </div>

        <div className={styles.footerRight}>
          <a href="https://wa.me/5541999999999" target="_blank" rel="noopener noreferrer">
            <Image src={zap} alt="WhatsApp" className={styles.socialIcon} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <Image src={insta} alt="Instagram" className={styles.socialIcon} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <Image src={face} alt="Facebook" className={styles.socialIcon} />
          </a>
        </div>
      </footer>
    </main>
  );
}
