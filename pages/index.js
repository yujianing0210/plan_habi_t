import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import progress_bar from '../public/progress_bar.jpg'

export default function Home() {
  return (
      <div>
        <div className="justify-self-center place-self-end">
                <Image src={progress_bar} width={500} height={200} />
            </div>
      </div>
  )
}