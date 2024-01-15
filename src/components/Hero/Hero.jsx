import React from 'react';
import styles from './Hero.module.css';
import { getImageUrl } from '../../utils';

const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Imran</h1>
                <p className={styles.description}>I am Front-end developer with 1 years of experience using HTML , CSS and Javascript. Reach out if you'd like to learn more!</p>
                <a href="mailto:imrankhan78626yobro@gmail.com" className={styles.contactBtn}>Contact Me</a>
            </div>
            <img src={getImageUrl("hero/heroImage.png")} alt='Hero image of me' className={styles.heroImg} />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    )
}

export default Hero