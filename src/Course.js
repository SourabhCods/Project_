import React from 'react';
import './Course.css';

const courses = [
    { name: 'React', description: 'Learn the basics of React.' },
    { name: 'Node.js', description: 'Master backend development with Node.js.' },
    { name: 'Java', description: 'Understand the fundamentals of Java programming.' },
    { name: 'Python', description: 'Get started with Python for data science and web development.' },
];

const Course = () => {
    return (
        <div className="course-container">
            <header className="course-header">
                <h1>Courses</h1>
                <p>Select a course and find your learning buddy today!</p>
            </header>
            <main className="course-main">
                {courses.map((course, index) => (
                    <div className="course-card" key={index}>
                        <h2>{course.name}</h2>
                        <p>{course.description}</p>
                        <button className="enroll-button">Enroll</button>
                    </div>
                ))}
            </main>
        </div>
    );
};

export default Course;
