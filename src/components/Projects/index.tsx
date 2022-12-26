import React, {useState, useEffect, useRef, MouseEvent} from 'react';
import {useLocation} from "react-router-dom";
import FutureProject from "../FutureProject";
import Select from "../additional/Select";
import {SelectFunc} from "../../data/interfaces";
import {skillsArr, projectTypeArr, projectsArr} from '../../data/content';
import './projects.scss';

function Projects() {
    const location = useLocation();
    const projectsContainer = useRef<HTMLDivElement>(null);
    const [currentSkill, setCurrentSkill] = useState<string>('all');
    const [currentType, setCurrentType] = useState<string>('all');
    const [noProject, setNoProject] = useState<boolean>(false);
    const [tablet, setTablet] = useState<boolean>(false);

    useEffect(() => {
        window.innerWidth > 1024 ? setTablet(true) : setTablet(false);
    }, [location]);

    useEffect(() => {
        if(projectsContainer.current!.children.length === 0) {
            setNoProject(true);
        } else {
            setNoProject(false);
        }
    }, [currentSkill, currentType])

    const filterProjectsBySkills = (e: React.MouseEvent<HTMLButtonElement>) => {
        setCurrentSkill((e.target as HTMLButtonElement).id);
    }

    // interface SelectFunc {
    //     filter(e:MouseEvent<HTMLButtonElement>): void;
    // }

    // const filterProjectsBySkills = (e: SelectFunc) => {
    //     setCurrentSkill(({ target }: Event).id);
    // }

    const filterProjectsByType = (e: React.MouseEvent<HTMLButtonElement>) => {
        setCurrentType((e.target as HTMLButtonElement).id);
    }

    const addClass = (e: React.MouseEvent<HTMLButtonElement>) => {
        removeActiveButtons(e);
        (e.target as HTMLButtonElement).classList.add('active')
    }

    const removeActiveButtons = (event: React.MouseEvent<HTMLSpanElement>) => {
        const parent = (event.target as HTMLButtonElement)!.parentElement!.children;
        Array.from(parent).forEach(btn => {
            btn.classList.remove('active');
        })
    }

    return (
        <div className='current-page-container main-page-inner-block' id='projects'>
            <h4 className='main-title'>Projects</h4>
            <h6 className='block-title'>my skills</h6>
            {!tablet ? (
                <div className="project-btns-container">
                    {/*<Select*/}
                    {/*    defaultOption={'all teams'}*/}
                    {/*    selectType={'team'}*/}
                    {/*    optionsList={allTeamsList}*/}
                    {/*    setSelectedOption={setSelectedOption}*/}
                    {/*    checkOpen={checkOpen}*/}
                    {/*    selectedOption={teamSelected}*/}
                    {/*    optionStatus={showOptionListTeam}*/}
                    {/*/>*/}
                    {/*<Select optionList={skillsArr} filter={filterProjectsBySkills} />*/}
                </div>
            ) : (
                <div className="project-btns-container">
                    {skillsArr.map(skill => {
                        return <button key={skill} id={skill} onClick={e => {
                            filterProjectsBySkills(e);
                            addClass(e);
                        }} className='skill-btn'>{skill}</button>
                    })}
                </div>
            )}
            <h6 className='block-title'>my projects</h6>
            <div className="project-btns-container">
                {projectTypeArr.map(project => {
                    return <button key={project} id={project} onClick={e => {
                        filterProjectsByType(e);
                        addClass(e)}
                    } className='project-type-btn'>{project}</button>
                })}
            </div>
            <div className="projects-container" ref={projectsContainer}>
                {projectsArr.map(project => {
                    return project.technologies.find(skill => skill === currentSkill) || currentSkill === 'all' ?
                        project.type === currentType || currentType === 'all' ? (
                            <a href={project.link} key={project.name} className='project-item' target='_blank'>
                                <img src={`${process.env.PUBLIC_URL}/assets/images/${project.name}.webp`}
                                     alt={`${project.name} project`}/>
                                <ul>
                                    {project.technologies.map((el, i) => {
                                        return <li key={i} id={el}>{el}</li>
                                    })}
                                </ul>
                            </a>
                        ) : null : null
                })}
            </div>
            <div className="projects-container future-projects">
                {noProject ? <FutureProject /> : null}
            </div>
        </div>
    );
}

export default Projects;