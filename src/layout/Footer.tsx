import React from 'react';
import styles from './Footer.module.scss';
// import { Logo } from '@/components/Logo/Logo';
import IconVk from '@/assets/icons/vk.svg?react';
import IconInst from '@/assets/icons/inst.svg?react';
import IconDiscord from '@/assets/icons/discord.svg?react';
// import IconRiot from '@/assets/icons/riot.svg?react';
// import IconEpic from '@/assets/icons/epic.svg?react';
// import IconEa from '@/assets/icons/ea.svg?react';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.main}>
          {/* <Logo /> */}
          <div className={styles.social}>
            <IconVk /> <IconInst /> <IconDiscord />
          </div>
          <button className={styles.btn} type='button' tabIndex={-1}>
            Свяжитесь с нами
          </button>
          {/* <div className={styles.partnersText}>Партнеры</div>
          <div className={styles.partners}>
            <IconRiot /> <IconEpic /> <IconEa />
          </div> */}
          <div className={styles.copyright}>Made with Lots of Love</div>
        </div>
        <ul className={styles.list}>
          О компании
          <li>About Us</li>
          <li>Partnerships</li>
          <li>Careers</li>
          <li>Branding</li>
          <li>FAQ</li>
        </ul>

        <ul className={styles.list}>
          Социальаные сети
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Instagram</li>
          <li>TikTok</li>
          <li>Discord</li>
        </ul>

        <ul className={styles.list}>
          Игры
          <li>VALORANT</li>
          <li>Counter-Strike 2</li>
          <li>Dota 2</li>
        </ul>
      </div>
    </footer>
  );
};
