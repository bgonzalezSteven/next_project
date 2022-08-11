import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import { Menu } from '../../layouts/Menu'
export default function Pricing() {
  return (
    <div>
      <Menu title="Pricing">
        <h1 className={styles.title}>
          Go to <b><Link href="/">Home</Link></b>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/pricing/index.js</code>
        </p>
      </Menu>
    </div>
  )
}
