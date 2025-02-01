"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import cx from "classnames";
import styles from "./index.module.css";

export default function Menu() {
  const [isOpen, setOpen] = useState<boolean>(false);
  const open = () => setOpen(true);
  const close = () => setOpen(false);

  useEffect(() => {
    // コンポーネントがマウントされたときの確認
    console.log("Menu component mounted");
    return () => {
      console.log("Menu component unmounted");
    };
  }, []);

  return (
    <div>
      <nav className={cx(styles.nav, isOpen && styles.open)}>
        <ul className={styles.items}>
          <li>
            <Link href="/news" className={styles.navLink}>
              News
            </Link>
          </li>
          <li>
            <Link href="/members" className={styles.navLink}>
              About me
            </Link>
          </li>
          <li>
            <Link href="/contact" className={styles.navLink}>
              Contact
            </Link>
          </li>
        </ul>
        <button className={cx(styles.button, styles.close)} onClick={close}>
          <Image
            src="/close.svg"
            alt="閉じる"
            width={24}
            height={24}
            priority
          />
        </button>
      </nav>
      <button className={styles.button} onClick={open}>
        <Image src="/menu.svg" alt="メニュー" width={24} height={24} />
      </button>
    </div>
  );
}
