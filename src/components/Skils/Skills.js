import React from 'react';
import styles from './Skils.module.css'
import Skill from "./Skill/Skil";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCss3, faHtml5, faJs, faReact} from '@fortawesome/free-brands-svg-icons';

function Skills(props) {

    const skillsArr =[
        {
            title: 'React',
            logo: <FontAwesomeIcon icon={faReact}/>,
            description: 'Experience in creating SPA based on React+Redux. Used functional and class components, hooks, local state, local storage, AJAX requests, additional libraries',

        },
        {
            title: 'Javascript',
            logo: <FontAwesomeIcon icon={faJs}/>,
            description: 'I know and put into practice ES6. I use arrow functions, array methods, closures, promises, call contexts, prototypes, deep copying, destructuring.',

        },
        {
            title: 'HTML',
            logo: <FontAwesomeIcon icon={faHtml5}/>,
            description: 'I know and put into practice the modern JavaScript features (ES6).',

        },
        {
            title: 'CSS',
            logo: <FontAwesomeIcon icon={faCss3}/>,
            description: 'I know and put into practice the modern JavaScript features (ES6).',

        },
    ]

    const skillsElements = skillsArr.map(i => <Skill key={i.key} title={i.title}
                                                        description={i.description} logo={i.logo}/>)
    return (

        <div className={styles.mySkills} id={'skills'}>
            <div className={styles.container}>

                <div className={styles.skillsTitle}><span>My skills </span></div>

                <div className={styles.skills}>
                    {skillsElements}
                </div>
            </div>
        </div>
    );
}

export default Skills;
