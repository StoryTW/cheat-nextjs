import React from 'react'
import styles from './Header.module.scss'
import { Logo } from '@/components/Logo/Logo'
import { Navbar } from '@/components/Navbar/Navbar'
import { ProfileButton } from '@/components/ProfileButton/ProfileButton'
import { Burger } from '@/components/Burger/Burger'

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Logo />
        <Navbar />
        <ProfileButton />
        <Burger />
      </div>
    </header>
  )
}
