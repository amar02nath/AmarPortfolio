// src/components/Projects.jsx
import { projects } from '../data/portfolio'
import ProjectCard from './ProjectCard'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import styles from './Projects.module.css'

export default function Projects() {
  const ref = useScrollAnimation()

  return (
    <section id="projects" className={styles.section} aria-labelledby="projects-heading">
      <div className="section-inner">
        <p className="section-label">02 — Work</p>
        <h2 className="section-title" id="projects-heading">Projects</h2>

        <ul className={`${styles.grid} fade-in`} ref={ref}>
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </ul>
      </div>
    </section>
  )
}
