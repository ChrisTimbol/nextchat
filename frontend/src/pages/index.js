import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { io } from "socket.io-client"
import { useEffect, useState } from 'react'

const socket = io('http://localhost:8000')

export default function Home() {
  // const [socket, setSocket] = useState(null)

  return (
    <>
      <Head>
        <title>Chat app</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="" />
      </Head>
      <main className={styles.main}>
        teststds
        <br></br>
 
      </main>
    </>
  )
}
//https://nextjs.org/docs/advanced-features/custom-server