import styles from '../styles/Home.module.css'
import { Menu } from '../layouts/Menu'
import Link from 'next/link'
export default function Home() {
  return (
    <div>
      <Menu title="Home">        
        <h1 className={styles.title}>
          Welcome to <strong className="text-blue-500">Home</strong>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>
      </Menu>
    </div>
  )
}
