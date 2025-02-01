import styles from './not-found.module.css';

export default function Contact() {
  return (
    <div className={styles.wrapper}>
      <main className={styles.main}>
        <div className={styles.container}>
          <h2 className={styles.title}>お問い合わせ</h2>
          <p className={styles.text}>
            ご質問やご相談がございましたら、お気軽にお問い合わせください。
          </p>

          {/* 入力フォーム */}
          <form className={styles.form}>
            <label className={styles.label}>
              お名前
              <input type="text" className={styles.input} placeholder="例: 山田 太郎" required />
            </label>

            <label className={styles.label}>
              メールアドレス
              <input type="email" className={styles.input} placeholder="例: example@example.com" required />
            </label>

            <label className={styles.label}>
              お問い合わせ内容
              <textarea className={styles.textarea} placeholder="ご自由にご記入ください" required />
            </label>

            <button type="submit" className={styles.button}>送信</button>
          </form>
        </div>
      </main>


    </div>
  );
}
