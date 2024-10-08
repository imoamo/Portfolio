// import React from 'react';
// import { getImageUrl } from '../../utils';
// import styles from './Contact.module.css';

// const Contact = () => {
//     return (
//         <footer id='contact' className={styles.container}>
//             <div className={styles.text}>
//                 <h2>Contact</h2>
//                 <p>Feel free to rach out!</p>
//             </div>
//             <ul className={styles.links}>
//                 <li className={styles.link} >
//                     <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon" />
//                     <a href="mailto:imrankhan78626yobro@gmail.com">imrankhan78626yobro@gmail.com</a>
//                 </li>

//                 <li className={styles.link}>
//                     <img src={getImageUrl("contact/linkedinIcon.png")} alt="Linkedin Icon" />
//                     <a href="https://linkedin.com/in/mohd-imran-42aa5822a" target='_blank' >linkedin.com/in/mohd-imran-42aa5822a</a>
//                 </li>

//                 <li className={styles.link}>
//                     <img src={getImageUrl("contact/githubIcon.png")} alt="Github Icon" />
//                     <a href="https://github.com/imoamo" target='_blank'>github.com/imoamo</a>
//                 </li>

//             </ul>
//         </footer>
//     )
// }

// export default Contact

import React from 'react';
import { getImageUrl } from '../../utils';
import styles from './Contact.module.css';

export const Contact = () => {
    return (
        <footer id='contact' className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link} >
                    <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon" />
                    <a href="mailto:imrankhan78626yobro@gmail.com">imrankhan78626yobro@gmail.com</a>
                </li>

                <li className={styles.link}>
                    <img src={getImageUrl("contact/linkedinIcon.png")} alt="Linkedin Icon" />
                    <a href="https://linkedin.com/in/mohd-imran-42aa5822a" target='_blank' >linkedin.com/in/mohd-imran-42aa5822a</a>
                </li>

                <li className={styles.link}>
                    <img src={getImageUrl("contact/githubIcon.png")} alt="Github Icon" />
                    <a href="https://github.com/imoamo" target='_blank'>github.com/imoamo</a>
                </li>
            </ul>
        </footer>
    )
}

export default Contact;
