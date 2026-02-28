// src/components/Certifications.jsx
import { certifications } from '../data/portfolio'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import styles from './Certifications.module.css'

export default function Certifications() {
  const ref = useScrollAnimation()

  return (
    <section id="certifications" aria-labelledby="cert-heading">
      <div className="section-inner">
        <p className="section-label">04 — Learning</p>
        <h2 className="section-title" id="cert-heading">Certifications</h2>

        <ul className={`${styles.grid} fade-in`} ref={ref}>
          {certifications.map((c) => (
            <li key={c} className={styles.item}>
              <span className={styles.icon} aria-hidden="true">🏅</span>
              {c}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
