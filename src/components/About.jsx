// src/components/About.jsx
import { objective, techStack, coreSubjects, languages } from '../data/portfolio'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import styles from './About.module.css'

export default function About() {
  const ref = useScrollAnimation()

  return (
    <section id="about" aria-labelledby="about-heading">
      <div className="section-inner">
        <p className="section-label">01 — About</p>
        <h2 className="section-title" id="about-heading">Objective</h2>

        <div className={`${styles.grid} fade-in`} ref={ref}>
          <div>
            <p className={styles.objective}>{objective}</p>

            <div className={styles.stack}>
              <p className={styles.stackLabel}>Technical Stack</p>
              <ul className={styles.tags}>
                {techStack.map((t) => (
                  <li
                    key={t.label}
                    className={`${styles.tag} ${t.highlight ? styles.tagHighlight : ''}`}
                  >
                    {t.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className={styles.side}>
            <h3 className={styles.sideHeading}>Core Subjects</h3>
            <ul className={`${styles.tags} ${styles.tagsColumn}`}>
              {coreSubjects.map((s) => (
                <li key={s} className={styles.tag}>{s}</li>
              ))}
            </ul>

            <h3 className={`${styles.sideHeading} ${styles.sideHeadingSpaced}`}>Languages Known</h3>
            <ul className={styles.tags}>
              {languages.map((l) => (
                <li key={l} className={styles.tag}>{l}</li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  )
}
