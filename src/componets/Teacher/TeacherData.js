import React from 'react';

const TeacherData = (props) => {
    const {img, position, name} =props.teacher
    return (
        <div className="col">
            <div className="card border-0 text-center rounded">
                <img src={img} alt="" height='270px' width='260px' />
                <div className="card-body">
                    <h5 className="card-title name">{name}</h5>
                   
                    <span>{position}</span>
                   
                </div>
            </div>
        </div>
    );
};

export default TeacherData;