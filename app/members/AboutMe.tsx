import Image from "next/image";
import styles from "./page.module.css";
import logo from "../../public/logo.png"; // 画像のパスを確認

export default function AboutMe() {
  return (
    <>
      <Image
        src={logo}
        alt="Profile Image"
        width={200} // 画像サイズ
        height={200}
        className={styles.aboutImage}
      />
      <h2 className={styles.aboutTitle}>My Profile</h2>
      <p className={styles.aboutText}>
        私は原田智喜です。京都デザイン&テクノロジー専門学校に通っています。
        <br />
        専攻はホワイトハッカー専攻です。
        <br />
        推しは葛葉さんで、日々推し活に励んでいます。
        <br />
        最近のマイブームは深夜に人を集めて雑談会を開くことです。
      </p>
    </>
  );
}
