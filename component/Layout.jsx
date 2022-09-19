import React from 'react'
import styles from "../styles/Home.module.css"
import Image from "next/image"
import Link from "next/link"
import img from "../public/vercel.svg"
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Layout({children}) {
  return (
    <div className={styles.layout}>
    <nav className={styles.navbar}>
      <Image  src={img} alt="Alt" width ="100" height = "75"/>
      <ul className={styles.list}>

        <Link href ="/"><li>Home</li></Link>
        <Link href ="/team"><li>Team</li></Link>
        <Link href ="/about"><li>About</li></Link>
        <Link href ="/contact"><li>Contact</li></Link>
       
       
      
      </ul>
      <div>
       <ConnectButton />
      </div>
    </nav>
    {children}
 
  </div>
);

}
