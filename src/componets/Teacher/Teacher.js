import React, { useEffect, useState } from 'react';
import TeacherData from './TeacherData';

const Teacher = () => {
    const [teacher, setTeacher] = useState([]);
    useEffect(() => {
        fetch(`./teacher.json`)
            .then(res => res.json())
            .then(data => setTeacher(data))
    }, [])
    return (
        <div className='container mt-5 pt-5 mb-5 pb-5'>
            <div className="text-center">
                <h2>Our Awesome <span className='text-danger'>Teachers</span></h2>
                <p>Rapid learning rapid authoring tools web based training (wbt) 
                    <br /> informal learning virtual classroom, roi instructional designer big data</p>
            </div>
            <div className='row row-cols-1 row-cols-md-4 g-4 mt-5 mb-5'>
                {
                    teacher.map(teacher =>
                        <TeacherData
                            teacher={teacher}
                        ></TeacherData>
                    )
                }
            </div>
        </div>
    );
};

export default Teacher;