// src/components/Nav.jsx
import styles from './Nav.module.css'

const links = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#certifications', label: 'Certs' },
  { href: '#skills', label: 'Skills' },
]

export default function Nav() {
  return (
    <header>
      <nav className={styles.nav} aria-label="Main navigation">
        <span className={styles.logo}>AN</span>
        <ul className={styles.links}>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
