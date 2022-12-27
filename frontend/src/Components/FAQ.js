import styles from "./FAQ.module.scss"

export default function FAQ() {
  return (
    <section className={styles.faq}>
      <h2>FAQ</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <div className={styles.container}>
        <div className={styles.card}>
          <h3>How much does it cost?</h3>
          <p>The UEQ is free of charge and available to anyone who wants to test their product for usability.</p>
        </div>
        <div className={styles.card}>
          <h3>Do I need an account?</h3>
          <p>Instead of an account, we use only the e-mail you entered and secure it with a password to protect the final results from third parties. We do not need any further data from you.</p>
        </div>
        <div className={styles.card}>
          <h3>How does it work?</h3>
          <p>Instead of an account, we use only the e-mail you entered and secure it with a password to protect the final results from third parties. We do not need any further data from you.</p>
        </div>
        <div className={styles.card}>
          <h3>What can I do with it?</h3>
          <p>Create a UEQ for free by describing your product and share the custom link we create about your product to evaluate it. As a result you will receive the completed questionnaires and the evaluated graphs.</p>
        </div>
      </div>
    </section>
  )
}