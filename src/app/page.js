import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'
import logo from './images/logo.png'

export default function Home() {
  return (
    <main className={styles.main}>
      <div id="mainHeader">
        
        <Image src={logo} width={75} height={60}
        style={{
          position: 'absolute',
          left: '2vw',
          top: '5vh'
        }}/>
      
        <h1>Extracta</h1>
      </div>

      <div className={styles.navigation}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/rekognition">Rekognition</Link>

      </div>
    </main>
  )
}
