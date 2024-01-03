import React, { useState } from 'react';
import Layout from './Layout';
import Footer from './Footer';
import Css from '../assets/css.png'
import Html from '../assets/html.png'
import Js from '../assets/js.png'
import Ruby from '../assets/ruby.png'

const ProjectsPage = () => {
    const projects = [
        {
            title: 'Tic Tac Toe',
            description: 'Description for Project 1...',
            imageUrl: 'https://media.giphy.com/media/KYmz5AbToLBmYOKZ0v/giphy.gif',
            link: 'https://playtictactoewithme.onrender.com/',
            techstack1: Css,
            techstack2: Html,
            techstack3: Js,
            techstack4: '',
            techstack5: '',
            techstack6: '',        
        },
        {
            title: 'Dog Tinder',
            description: 'Where good dogs come to play.',
            imageUrl: 'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExb25pZDlhc2F2emhobnBlaHdram1zN2RzaTR3cGRkNmh3cjRiaWR1ZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/NU3OrS035QssTdlLGH/giphy.gif',
            link: 'https://good-dogs-tinder.onrender.com/',
            techstack1: Css,
            techstack2: Html,
            techstack3: Js,
            techstack4: Ruby,
            techstack5: '',
            techstack6: '',        },
        {
            title: 'Project Name 3',
            description: 'Description for Project 3...',
            imageUrl: 'https://static.vecteezy.com/system/resources/thumbnails/011/297/442/small/golden-number-3-png.png',
            link: 'https://assets.orvis.com/is/image/orvisprd/AdobeStock_146372002',
            techstack1: 'https://icons.veryicon.com/png/o/business/vscode-program-item-icon/javascript-3.png',
            techstack2: 'https://w7.pngwing.com/pngs/696/424/png-transparent-logo-css-css3-thumbnail.png',
            techstack3: '',
            techstack4: '',
            techstack5: '',
            techstack6: '',        
        },
        {
            title: 'Project Name 4',
            description: 'Description for Project 4...',
            imageUrl: 'https://pngimg.com/d/number4_PNG15032.png',
            link: 'https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8yNl9waG90b19vZl9hX3BvcnRyYWl0X29mX2N1dGVzdF9wdXBweWV5ZXNfc21pbF84MGJjODAzYy1hODAzLTRlODMtOThmMC0yOWI1NjkwMDc4Y2ZfMS5qcGc.jpg',
            techstack1: 'https://banner2.cleanpng.com/20190125/wpj/kisspng-computer-icons-html5-scalable-vector-graphics-port-socialpack-chocolate-icon-5c4b3bbcb7d671.680718971548434364753.jpg',
            techstack2: '',
            techstack3: '',
            techstack4: '',
            techstack5: '',
            techstack6: '',        },
        {
            title: 'Project Name 5',
            description: 'Description for Project 5...',
            imageUrl: 'https://freepngimg.com/save/129505-5-number-png-download-free/2000x2000',
            link: 'https://m.media-amazon.com/images/I/71-KbJCQfDL.jpg',
            techstack1: 'https://icons.veryicon.com/png/o/business/vscode-program-item-icon/javascript-3.png',
            techstack2: 'https://w7.pngwing.com/pngs/696/424/png-transparent-logo-css-css3-thumbnail.png',
            techstack3: '',
            techstack4: '',
            techstack5: '',
            techstack6: '',
        },
    ];

    const projectsToShow = 3;

    const [currentProject, setCurrentProject] = useState(0)

    const showNextProject = () => {
        setCurrentProject((prev) => (prev + 1) % projects.length)
    }

    const showPrevProject = () => {
        setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
    }

    return (
        <Layout>
            <div className="project-box">
                <h1 className="projects-word">PROJECTS</h1>
                <div className="project-container">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`input-project ${currentProject === index ? 'visible' : ''}`}
                            style={{ order: (index - currentProject + projects.length) % projects.length }}>
                            <h2 style={{ marginBottom: '-10px' }}>{project.title}</h2>
                            <br/>
                            <p style={{ marginBottom: '10px' }}>{project.description}</p><div>
                            <br/>
                            {project.imageUrl && (
                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    <img src={project.imageUrl} alt={`Project ${index + 1}`} className='input-img'/>
                                </a>
                            )}</div>

                            {project.techstack1 && (
                                <div className="tech-stack-container">
                                    {[project.techstack1, project.techstack2, project.techstack3, project.techstack4, project.techstack5, project.techstack6].map((techstack, techIndex) => (
                                        techstack && (
                                            <img key={techIndex} src={techstack} alt={`Tech Stack ${techIndex + 1}`} className="tech-stack" />
                                        )
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div className="arrow left-arrow" onClick={showPrevProject}>
                    ⇦
                </div>
                <div className="arrow right-arrow" onClick={showNextProject}>
                    ⇨
                </div>
            </div>
            <Footer />
        </Layout>
    )
}

export default ProjectsPage;