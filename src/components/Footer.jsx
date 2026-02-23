// src/components/Footer.jsx
import { contact } from '../data/portfolio'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <p>&copy; 2025 Amar Nath. Designed &amp; built with care.</p>
      <nav className={styles.links} aria-label="Social links">
        <a href={contact.github.url} target="_blank" rel="noopener">GitHub</a>
        <a href={contact.linkedin.url} target="_blank" rel="noopener">LinkedIn</a>
        <a href={contact.leetcode.url} target="_blank" rel="noopener">LeetCode</a>
        <a href={`mailto:${contact.email}`}>Email</a>
      </nav>
    </footer>
  )
}
