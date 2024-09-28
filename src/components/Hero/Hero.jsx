import React from 'react';
import styles from './Hero.module.css';
import { getImageUrl } from '../../utils';

const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Imran</h1>
                <p className={styles.description}>🌟✨ React Intern with 2+ years in HTML, CSS, JS, & React! 🚀 At Omniful building scalable solutions & crafting WOW user experiences! 🎨💖 Let’s create something amazing! 💥🤩</p>

                <a href="https://resume-builder-test-new.masaischool.com/resume/public?resumeId=66f78b07f930ea373f9020a4" target='_blank' className={styles.contactBtn}>Resume</a>
            </div>

            <img src={getImageUrl("hero/heroImage.png")} alt='Hero image of me' className={styles.heroImg} />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    )
}

export default Hero;