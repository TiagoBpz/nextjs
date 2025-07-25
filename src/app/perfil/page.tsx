"use client";

import { useEffect, useState } from "react";
import { api } from "@/api/api";
import Image from "next/image";
import Link from "next/link";
import styles from "./ListaIdosos.module.css";
import logo from "../assets/logo.png";
import userIcon from "../assets/user.png"; // ícone genérico para cuidador

interface IdosoFromAPI {
  id: number;
  name: string;
  bornAge: string;
  image: string;
  roomNumber: number;
  caregiverName: string;
  especialConditions: string;
}

export default function ListaIdosos() {
  const [list, setList] = useState<IdosoFromAPI[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchList() {
      try {
        const response = await api.get("/list"); 
        setList(response.data);
      } catch (error) {
        console.error("Erro ao buscar lista:", error);
        setError("Erro ao carregar listas");
      } finally {
        setLoading(false);
      }
    }

    fetchList();
  }, []);

  return (
    <main className={styles.container}>
      {/* Navbar */}
      <nav className={styles.navbar}>
        <Link href="/apresentacao">
          <Image src={logo} alt="logo" className={styles.navbarIcon} />
        </Link>
        <Image src={userIcon} alt="usuário" className={styles.navbarIcon} />
      </nav>

      <h2 className={styles.titulo}>Lista de Idosos</h2>

      {loading && <p>Carregando...</p>}
      {error && <p className={styles.error}>{error}</p>}

      <div className={styles.lista}>
        {list.map((idoso) => (
          <div key={idoso.id} className={styles.card}>
            <div className={styles.perfil}>
              {/* Imagem do idoso */}
              <Image
                src={idoso.image}
                alt={`Foto de ${idoso.name}`}
                className={styles.iconp}
                width={80}
                height={80}
                unoptimized 
              />
              <div className={styles.infoCinza}>{idoso.name}</div>
              <div className={styles.infoCinza}>{idoso.bornAge}</div>
            </div>

            <div className={styles.infoCinza}>Quarto {idoso.roomNumber}</div>
            <div className={styles.descricao}>
              {idoso.especialConditions || "Sem especificações."}
            </div>

            <span className={styles.labelCuidador}>CUIDADOR(A) RESPONSÁVEL:</span>
            <div className={styles.cuidador}>
              <Image
                src={userIcon}
                alt={`Cuidador(a): ${idoso.caregiverName}`}
                className={styles.imgPequena}
              />
              <span>{idoso.caregiverName}</span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
