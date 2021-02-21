import React from 'react';
import HomeDepartments from '../HomeDepartments/HomeDepartments';
import HomeInstitutes from '../HomeInstitutes/HomeInstitutes';
import HomeNotice from '../HomeNotice/HomeNotice';
import Slider from '../Slider/Slider';

const Main = () => {
    return (
        <div>
            <Slider></Slider>
            <HomeNotice></HomeNotice>
            <HomeDepartments></HomeDepartments>
            <HomeInstitutes></HomeInstitutes>
        </div>
    );
};

export default Main;