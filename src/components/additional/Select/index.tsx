import React from 'react';
import {SelectFunc} from '../../../data/interfaces';

const Select: React.FC<{optionList: Array<string>, filter: SelectFunc}> = ({optionList, filter}) => {
    return (
        <div className='select-container'>
            {/*{optionList.map(skill => {*/}
            {/*    return <button key={skill} id={skill} onClick={e => {*/}
            {/*        filter(e);*/}
            {/*    }} className='skill-btn'>{skill}</button>*/}
            {/*})}*/}
        </div>
    );
}

export default Select;