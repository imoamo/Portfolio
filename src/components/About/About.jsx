import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './About.module.css'
const About = () => {
    return (
        <section className={styles.container} id='about'>
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img src={getImageUrl('about/aboutImage.png')} alt="Me sitting with a laptop" className={styles.aboutImage} />

                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl('about/cursorIcon.png')} alt="cursor icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Frontend Developer</h3>
                            <p>I'm a frontend developer with experience in building responsive and optimized sites</p>
                        </div>
                    </li>
                    {/* second li */}
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl('about/serverIcon.png')} alt="server icon" />
                        <div className={styles.aboutItemText}>
                            <h3>React Developer</h3>
                            <p>I have experience in developing fast and optimized React applications</p>
                        </div>
                    </li>
                    {/* third li */}
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl('about/uiIcon.png')} alt="UI icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Backend Developer</h3>
                            <p>I build and maintain scalable server-side applications using Node.js, Express.js, and MongoDB.</p>

                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
};

export default About