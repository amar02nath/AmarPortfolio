// src/components/Education.jsx
import { education } from '../data/portfolio'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import styles from './Education.module.css'

export default function Education() {
  const ref = useScrollAnimation()

  return (
    <section id="education" aria-labelledby="education-heading">
      <div className="section-inner">
        <p className="section-label">03 — Background</p>
        <h2 className="section-title" id="education-heading">Education</h2>

        <ol className={`${styles.list} fade-in`} ref={ref}>
          {education.map((e) => (
            <li key={e.id} className={styles.item}>
              <div className={styles.year}>
                {e.years}
                <span>{e.score}</span>
              </div>
              <div>
                <p className={styles.degree}>{e.degree}</p>
                <p className={styles.institution}>{e.institution}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
