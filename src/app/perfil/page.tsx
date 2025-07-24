"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./ListaIdosos.module.css";
import logo from "../assets/logo.png";
import userp from "../assets/userp.png";
import user from "../assets/user.png";



interface Idoso {
  nome: string;
  nascimento: string;
  quarto: string;
  especificacoes?: string;
  cuidador: {
    nome: string;
    imagem: any;
  };
}

const idosos: Idoso[] = [
  {
    nome: "nome",
    nascimento: "data de nasc.",
    quarto: "Quarto",
    especificacoes: "Especificações, se tiver",
    cuidador: {
      nome: "Jair Messiano",
      imagem: user,
    },
  },
  {
    nome: "nome",
    nascimento: "data de nasc.",
    quarto: "Quarto",
    especificacoes: "Especificações, se tiver",
    cuidador: {
      nome: "Larissa Taxad",
      imagem: user,
    },
  },
];

export default function ListaIdosos() {
  return (
    <main className={styles.container}>
      {/* Navbar */}
      <nav className={styles.navbar}>
        <Link href="/apresentacao">
          <Image src={logo} alt="logo" className={styles.navbarIcon} />
        </Link>
        <Image src={user} alt="usuário" className={styles.navbarIcon} />
      </nav>

      <h2 className={styles.titulo}>Lista de Idosos</h2>

      <div className={styles.lista}>
        {idosos.map((idoso, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.perfil}>
              <Image src={userp} alt="user icon" className={styles.iconp} />
              <div className={styles.infoCinza}>{idoso.nome}</div>
              <div className={styles.infoCinza}>{idoso.nascimento}</div>
              <button className={styles.botaoRotina}>Visualizar lista de rotina</button>
            </div>

            <div className={styles.infoCinza}>{idoso.quarto}</div>
            <div className={styles.descricao}>
              {idoso.especificacoes || "Sem especificações."}
            </div>

            <span className={styles.labelCuidador}>CUIDADOR(A) RESPONSÁVEL:</span>
            <div className={styles.cuidador}>
              <Image
                src={idoso.cuidador.imagem}
                alt={idoso.cuidador.nome}
                className={styles.imgPequena}
              />
              <span>{idoso.cuidador.nome}</span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
