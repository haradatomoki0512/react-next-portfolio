"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css"; // CSSファイルのインポート
import Menu from "../Menu"; // PC用の通常メニュー

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // スマホメニューを閉じる関数（ページ遷移後に閉じる）
  const handleCloseMenu = () => {
    setTimeout(() => setIsOpen(false), 300); // クリック後0.3秒後にメニューを閉じる
  };

  return (
    <>
      {/* 左上のロゴ */}
      <div className={styles.logoContainer}>
        <Link href="/" className={styles.logoLink}>
          <Image
            src="/a.png"
            alt="SIMPLE"
            className={styles.logo}
            width={210}
            height={100}
            priority
          />
        </Link>
      </div>

      {/* PCでは通常のヘッダー、スマホでは隠す */}
      <header className={styles.header}>
        <Menu />
      </header>

      {/* スマホ用のハンバーガーメニュー */}
      <button className={styles.menuButton} onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      {/* スマホ用ナビゲーションメニュー */}
      <nav className={`${styles.mobileMenu} ${isOpen ? styles.open : ""}`}>
        <ul className={styles.navList}>
          <li>
            <Link href="/" prefetch={false} onClick={handleCloseMenu}>Home</Link>
          </li>
          <li>
            <Link href="../members" prefetch={false} onClick={handleCloseMenu}>About Me</Link> {/* ✅ 確実に /about に飛ぶ */}
          </li>
          <li>
            <Link href="/news" prefetch={false} onClick={handleCloseMenu}>News</Link>
          </li>
          <li>
            <Link href="/contact" prefetch={false} onClick={handleCloseMenu}>Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
