// src/components/Hero.jsx
import { contact } from '../data/portfolio'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero} id="home" aria-label="Introduction">
      <div className={styles.bg} aria-hidden="true" />

      <div className={styles.left}>
        <p className={styles.tag}>Available for Opportunities</p>

        <h1 className={styles.name}>
          <span className={styles.nameFirst}>{contact.name.first}</span>
          <span className={styles.nameLast}>{contact.name.last}</span>
        </h1>

        <p className={styles.subtitle}>{contact.title}</p>

        <div className={styles.cta}>
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <a href={`mailto:${contact.email}`} className="btn btn-outline">Get in Touch</a>
        </div>
      </div>

      <aside className={styles.right} aria-label="Contact information">
        <div className={styles.card}>
          <h2 className={styles.cardHeading}>Contact Info</h2>

          <div className={styles.cardItem}>
            <span aria-hidden="true">📍</span>
            <address>{contact.location}</address>
          </div>
          <div className={styles.cardItem}>
            <span aria-hidden="true">📧</span>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </div>
          <div className={styles.cardItem}>
            <span aria-hidden="true">📞</span>
            <a href={`tel:${contact.phone}`}>{contact.phone}</a>
          </div>

          <hr className={styles.divider} />

          <div className={styles.cardItem}>
            <span aria-hidden="true">💼</span>
            <a href={contact.linkedin.url} target="_blank" rel="noopener">{contact.linkedin.label}</a>
          </div>
          <div className={styles.cardItem}>
            <span aria-hidden="true">🐙</span>
            <a href={contact.github.url} target="_blank" rel="noopener">{contact.github.label}</a>
          </div>
          <div className={styles.cardItem}>
            <span aria-hidden="true">🧩</span>
            <a href={contact.leetcode.url} target="_blank" rel="noopener">{contact.leetcode.label}</a>
          </div>
        </div>
      </aside>
    </section>
  )
}
