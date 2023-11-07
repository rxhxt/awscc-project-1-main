import styles from './about.module.css'
import Image from 'next/image'
import logo from '../images/logo.png'


export default function HomePage() {
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
      <h2>About</h2>
      
      <div id="projectDescription">
        <h1>Project Description</h1>
      </div>
      </div>
    </main>
  )
}
