import React from 'react';

const Experience = () => {
    return (
        <div className="page">
            <h1>Experience</h1>
            <div className="experience-item">
                <h2>Company Name - Position Title</h2>
                <p>Date Range</p>
                <ul>
                    <li>Responsibility 1</li>
                    <li>Responsibility 2</li>
                    {/* Add more responsibilities */}
                </ul>
            </div>
            {/* Add more experience items as needed */}
        </div>
    );
};

export default Experience;
