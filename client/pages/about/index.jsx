import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import { Menu } from '../../layouts/Menu'

export default function About() {
  return (
    <div>
      <Menu title="Score">
        <h1 className={styles.title}>
          Go to <b><Link href="/">Home</Link></b>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/about/index.js</code>
        </p>
      </Menu>
    </div>
  )
}
