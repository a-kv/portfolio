import React from 'react';
import styles from './Projects.module.css'
import Project from "./Progect/Project";
import game from '../../assets/images/game.jpg';
import todo from '../../assets/images/todo.png';
import network from '../../assets/images/network.png';
import count from '../../assets/images/count.png';

function Projects(props) {

    const projectsArr =[
        {
            title: 'Social network',
            description: 'This project was implemented using React-Redux, functional components were used, REST API',
            urlDemo: 'https://a-kv.github.io/social-network-1',
            urlCode: 'https://github.com/a-kv/social-network-1',
            projectBack: network
        },
        {
            title: 'Todolist',
            description: 'This project was implemented using React-Redux, functional components were used, REST API',
            urlDemo: '',
            urlCode: 'https://github.com/a-kv/todo-list',
            projectBack: todo
        },
        {
            title: 'Counter',
            description: 'This project was implemented using React-Redux, functional components were used, REST API',
            urlDemo: 'https://a-kv.github.io/counter/',
            urlCode: 'https://github.com/a-kv/counter',
            projectBack: count
        },
        {
            title: 'Game',
            description: 'This project was implemented using React-Redux, functional components were used, REST API',
            urlDemo: '',
            urlCode: 'https://github.com/a-kv/game-ts',
            projectBack: game
        },
    ]
    const projectsElements = projectsArr.map(i => <Project key={i.key} title={i.title} description={i.description} urlDemo={i.urlDemo} urlCode={i.urlCode} projectBack={i.projectBack} />)

    return (
        <div className={styles.myProjects}>
        <div className={styles.container}>
            <div className={styles.projectsTitle}><span>My projects</span></div>
            <div className={styles.projects}>
                {projectsElements}
            </div>
        </div>
</div>
    );
}

export default Projects;
