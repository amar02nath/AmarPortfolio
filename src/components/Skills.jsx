// src/components/Skills.jsx
import { softSkills } from '../data/portfolio'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import styles from './Skills.module.css'

export default function Skills() {
  const ref = useScrollAnimation()

  return (
    <section id="skills" aria-labelledby="skills-heading">
      <div className="section-inner">
        <p className="section-label">05 — Soft Skills</p>
        <h2 className="section-title" id="skills-heading">Interpersonal Skills</h2>

        <ul className={`${styles.grid} fade-in`} ref={ref}>
          {softSkills.map((s) => (
            <li key={s} className={styles.item}>{s}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
