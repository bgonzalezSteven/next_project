import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import { Menu } from '../../layouts/Menu'
export default function Contact() {
  return (
    <div>
      <Menu title="Contact">
        <h1 className={styles.title}>
          Go to <b><Link href="/">Home</Link></b>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/contact/index.js</code>
        </p>
      </Menu>
    </div>
  )
}
