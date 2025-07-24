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
import Link from 'next/link';

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
  const [modalAberto, setModalAberto] = useState(false);
  const [colaboradorSelecionado, setColaboradorSelecionado] = useState<string | null>(null);

  const conteudos = {
    missao: 'Oferecer cuidado humanizado e acolhimento seguro para que os idosos vivam com qualidade, autonomia e bem-estar.',
    valores: 'Empatia, respeito, dedicação, responsabilidade e amor ao próximo.',
    filosofia: 'Baseado na dignidade, liberdade e valorização da história de vida de cada residente.',
  };


  type CuidadorInfo = {
    nome: string;
    idade: number;
    formacao: string;
    email: string;
    imagem: string;
  };

  const cuidadores: Record<string, CuidadorInfo> = {
    "Cleiton Assis Pinto": { nome: "Cleiton", idade: 25, formacao: "Auxiliar de cuidador de idosos", email: "cleiton.assis@gmail.com", imagem: "/colaboradores/cleiton.png" },
    "Larissa Taxad": { nome: "Larissa", idade: 27, formacao: "Auxiliar de vida sênior", email: "larissa.taxad@gmail.com", imagem: "/colaboradores/larissa.png" },
    "Jair Messiano": { nome: "Jair", idade: 40, formacao: "Cuidador de idosos sênior", email: "jair.messias@gmail.com", imagem: "/colaboradores/jair.png" },
  };

  const nomeCuidador: string = "Larissa Taxad";
  const dados = cuidadores[nomeCuidador]; // ✅ OK agora

  const abrirModal = (nome: string) => {
    setColaboradorSelecionado(nome);
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
    setColaboradorSelecionado(null);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndexAtual((prevIndex) => (prevIndex + 1) % imagensCarrossel.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className={styles.container}>
      {/* Navbar */}
      <nav className={styles.navbar}>
        <div>
          <Image src={logo} alt='logo' className={styles.navbarIcon} />
        </div>
        <Link href="/perfil">
          <Image src={user} alt='user' className={styles.navbarIcon} />
        </Link>
      </nav>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div
          className={styles.heroBackground}
          style={{ backgroundImage: `url(${imagensCarrossel[indexAtual]})` }}
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
          <button className={`${styles.iconButton} ${cinzel.className} ${botaoAtivo === 'missao' ? styles.ativo : ''}`}
            onClick={() => setBotaoAtivo(botaoAtivo === 'missao' ? null : 'missao')}>
            <Image src={objetivoImg} alt='Objetivo' className={botaoAtivo === 'missao' ? styles.iconAtivo : styles.iconImage} />
            <span className={styles.buttonLabel}>MISSÃO</span>
            {botaoAtivo === 'missao' && (
              <p className={styles.buttonText}>{conteudos.missao}</p>
            )}</button>

          <button className={`${styles.iconButton} ${cinzel.className} ${botaoAtivo === 'valores' ? styles.ativo : ''}`}
           onClick={() => setBotaoAtivo(botaoAtivo === 'valores' ? null : 'valores')}>
            <Image src={cuidadoImg} alt='valores' className={botaoAtivo === 'valores' ? styles.iconAtivo : styles.iconImage} />
            <span className={styles.buttonLabel}>VALORES</span>
            {botaoAtivo === 'valores' && (
              <p className={styles.buttonText}>{conteudos.valores}</p>
            )}
          </button>

          <button
            className={`${styles.iconButton} ${cinzel.className} ${botaoAtivo === 'filosofia' ? styles.ativo : ''}`}
            onClick={() => setBotaoAtivo(botaoAtivo === 'filosofia' ? null : 'filosofia')}>
             <Image src={localizacaoImg} alt='filosofia' className={botaoAtivo === 'filosofia' ? styles.iconAtivo : styles.iconImage} />
            <span className={styles.buttonLabel}>FILOSOFIA</span>
            {botaoAtivo === 'filosofia' && (
              <p className={styles.buttonText}>{conteudos.filosofia}</p>
            )}
          </button>
        </div>

        {/* Colaboradores */}
        <div className={styles.colaboradores}>
          <h2>CONHEÇA NOSSOS COLABORADORES</h2>
          <div className={styles.names}>
            {Object.keys(cuidadores).map((nome) => (
              <div key={nome} className={styles.person} onClick={() => abrirModal(nome)}>
                <Image src={user} alt='user' className={styles.iconImage} />
                {nome}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {modalAberto && colaboradorSelecionado && (
        <div className={styles.modalOverlay} onClick={fecharModal}>
          <div className={styles.modalCard} onClick={(e) => e.stopPropagation()}>
            <Image
              src={cuidadores[colaboradorSelecionado].imagem}
              alt="Foto do colaborador"
              className={styles.modalImage}
              width={180}
              height={180}
            />
            <div className={styles.modalInfoContainer}>
              <div className={styles.modalInfo}>{cuidadores[colaboradorSelecionado].nome}</div>
              <div className={styles.modalInfo}>{cuidadores[colaboradorSelecionado].idade} anos</div>
              <div className={styles.modalInfo}>{cuidadores[colaboradorSelecionado].formacao}</div>
              <div className={styles.modalInfo}>
                <a href={`mailto:${cuidadores[colaboradorSelecionado].email}`}>
                  {cuidadores[colaboradorSelecionado].email}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

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