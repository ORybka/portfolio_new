import React, {useState, useEffect} from 'react';
import {experienceArr} from '../../../data/content'
import {ExperienceElementDesc} from "../../../data/interfaces";
import './experience-block.scss';

function ExperienceBlock({ id }: { id: string }) {
    const defaulElement: ExperienceElementDesc = {
        title: '',
        subtitle: '',
        period: '',
        list: [],
    }
    const [element, setElement] = useState<ExperienceElementDesc>(defaulElement);

    useEffect(() => {
        const currentBlock = experienceArr.find(el => el.id === id)!;
        setElement(currentBlock.description);
    }, [id]);

    return (
        <div className='experience-block-container'>
            <div className="experience-inner-block">
                <h6>{element.title}</h6>
                {element.subtitle ? <p>element.subtitle</p> : ''}
                <div className='period'>{element.period}</div>
                {element.list?.length ? (
                    <ul>
                        {element.list.map((listEl, i) => {
                            return (<li key={i}>{listEl}</li>)
                        })}
                    </ul>
                ) : null}
            </div>
        </div>
    );
}

export default ExperienceBlock;