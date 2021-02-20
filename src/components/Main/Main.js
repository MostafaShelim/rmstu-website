import React from 'react';
import Departments from '../Departments/Departments';
import Institutes from '../Institutes/Institutes';
import Notice from '../Notice/Notice';

const Main = () => {
    return (
        <div>
            <Notice></Notice>
            <Departments></Departments>
            <Institutes></Institutes>
        </div>
    );
};

export default Main;