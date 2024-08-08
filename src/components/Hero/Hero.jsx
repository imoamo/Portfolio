import React from 'react';
import styles from './Hero.module.css';
import { getImageUrl } from '../../utils';

const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Imran</h1>
                <p className={styles.description}>Full Stack Web Developer with 1.5+ years in HTML, CSS, JavaScript, React, MongoDB, Node.js, and Express.js. Connect to see what I can do!</p>

                <a href="https://resume-builder-test-new.masaischool.com/resume/public?resumeId=66a392316e6b499ee3362dbf" target='_blank' className={styles.contactBtn}>Resume</a>
            </div>

            <img src={getImageUrl("hero/heroImage.png")} alt='Hero image of me' className={styles.heroImg} />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    )
}

export default Hero;