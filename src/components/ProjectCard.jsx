// src/components/ProjectCard.jsx
import styles from './ProjectCard.module.css'

export default function ProjectCard({ project, index }) {
  return (
    <li className={`${styles.card} ${project.featured ? styles.featured : ''}`}>
      <p className={styles.num}>{project.num}</p>
      <h3 className={styles.name}>{project.name}</h3>
      <p className={styles.desc}>{project.desc}</p>
      <ul className={styles.tech}>
        {project.tech.map((t) => (
          <li key={t} className={styles.techTag}>{t}</li>
        ))}
      </ul>
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener"
          className={styles.link}
        >
          Live Demo ↗
        </a>
      )}
    </li>
  )
}
