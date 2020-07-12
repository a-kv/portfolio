import React from 'react';
import styles from './Project.module.css'

function Project(props) {
    const projectImgStyle = {
        backgroundImage: 'url(' + props.projectBack + ')',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }

    return (
        <div className={styles.projectContainer} id={'projects'}>
            <div className={styles.projectItem}>
                <div style={projectImgStyle} className={styles.projectImg} >
                    <div className={styles.projectButton}>
                        <form action={props.urlCode} target="_blank">
                            <button className={styles.btnShow}>See code</button>
                        </form>
                        <form action={props.urlDemo} target="_blank">
                            <button className={styles.btnShow}>See demo</button>
                        </form>
                    </div>
                </div>

            <div className={styles.projectInfo}>
                <span className={styles.projectTitle}>{props.title}</span>
                <span className={styles.description}>{props.description}</span>
            </div>
            </div>

        </div>

    );
}

export default Project;
