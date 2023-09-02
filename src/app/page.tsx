// import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
   <>
   <h1 className="styles.main">Home</h1>
   <Link href={'/about'}>about</Link>
   <br />
   <Link href={'/contact'}>contact</Link>
   <br />
  
   <Link href={'/data'}>data</Link>
   </>
  )
}
